import React, { ComponentProps, useCallback, useMemo } from 'react';
import ElementsHolder, { ElementsHolderRef } from './components/ElementsHolder';
import { asyncModalRenderImp } from './utils/asyncModalRenderImp';
import type { AsyncModalRender, AsyncModalRenderFactory, ComputeAsyncModalProps, UseAsyncModalRenderReturn } from './types';

/**
 * useAsyncModal 的 Hook 封装
 */
export function useAsyncModalRender(): UseAsyncModalRenderReturn {
  // hook 的挂载方式，依靠 ElementsHolder
  const holderRef = React.useRef<ElementsHolderRef>(null);
  const holder = useMemo(() => <ElementsHolder key="component-holder" ref={holderRef} />, []);

  // render 链接统一的实现 asyncModalImp
  const render = useCallback<AsyncModalRender>((Comp, props) => {
    type PT = ComponentProps<typeof Comp>;
    const [dom, promise] = asyncModalRenderImp(Comp, props ?? ({} as ComputeAsyncModalProps<PT>), {
      onClose: () => closeFunc(),
    });
    const closeFunc = holderRef.current!.patchElement(dom);
    return promise;
  }, []);

  // 创建 render 的工厂函数
  const renderFactory = useCallback<AsyncModalRenderFactory>((Comp, props) => () => render(Comp, props), [render]);

  return {
    render,
    holder,
    renderFactory,
  };
}
