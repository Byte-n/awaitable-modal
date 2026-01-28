import React, { ComponentType, useCallback, useMemo } from 'react';
import ElementsHolder, { ElementsHolderRef } from '../components/ElementsHolder';
import {
  AsyncModalDestroyOptions, AsyncModalProps, AsyncModalRender, AsyncModalRenderFactory, AsyncModalRenderQuiet,
} from '../types';
import { asyncModalRenderImp } from '../utils/asyncModalRenderImp';

/**
 * hook 与 context 的共同实现
 */
export function useAsyncModalRenderImp() {
  // hook 的挂载方式，依靠 ElementsHolder
  const holderRef = React.useRef<ElementsHolderRef>(null);
  const holder = useMemo(() => <ElementsHolder key="component-holder" ref={holderRef} />, []);

  // render 链接统一的实现 asyncModalImp
  const render = useCallback<AsyncModalRender>((Comp, props, options) => {
    const { persistent, openField, quiet } = options ?? {};

    const realProps = props ?? ({} as any);

    if (persistent && openField) {
      // @ts-ignore
      realProps[openField] = true;
    }

    const [dom, promise] = asyncModalRenderImp(Comp, realProps, {
      onClose: () => {
        if (persistent && openField) {
          // 如果是持久化模式，关闭时不移除元素，而是将 openField 设置为 false
          const closedDom = React.cloneElement(dom, { [openField]: false });
          holderRef.current!.patchElement(closedDom, persistent, openField);
        } else {
          // 只有非持久化模式才执行移除逻辑
          closeFunc();
        }
      },
      quiet
    });

    const closeFunc = holderRef.current!.patchElement(dom, persistent, openField);
    return Object.assign(promise, { destroyModal: closeFunc });
  }, []);

  // 创建 render 的工厂函数
  const renderFactory = useCallback<AsyncModalRenderFactory>(
    (Comp, props, options) => {
      const unmounts: VoidFunction[] = [];
      const func = () => {
        const promise = render(Comp, props, options);
        unmounts.push(promise.destroyModal);
        return promise;
      };
      return Object.assign(func, { destroyModal: () => unmounts.forEach((v) => v()) });
    },
    [render],
  );

  /**
   * 销毁指定的持久化弹窗 或 全部 的持久化弹窗
   */
  const destroy = useCallback((options: AsyncModalDestroyOptions) => {
    holderRef.current!.removeElement(options);
  }, []);

  const renderQuiet = useCallback<AsyncModalRenderQuiet>((Comp, props, options) => {
    // @ts-ignore
    return render(Comp, props, { ...options, quiet: true })
  }, [render])

  return {
    render,
    holder,
    renderFactory,
    destroy,
    renderQuiet
  };
}
