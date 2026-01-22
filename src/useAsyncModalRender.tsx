import React, { ComponentProps, useCallback, useMemo } from 'react'
import { AsyncModalProps } from './asyncModalRender'
import ElementsHolder, { ElementsHolderRef } from './components/ElementsHolder'
import { asyncModalRenderImp } from './utils/asyncModalRenderImp'

export interface AsyncModalRender {
  <D extends AsyncModalProps> (
    Comp: React.ComponentType<D>,
    props?: Omit<D, keyof AsyncModalProps> & Partial<Pick<D, keyof AsyncModalProps>>,
  ): Promise<D['onOk'] extends (v: infer R) => void ? R : never>
}

export interface AsyncModalRenderFactory {
  (...args: Parameters<AsyncModalRender>): () => ReturnType<AsyncModalRender>
}

export interface UseAsyncModalRenderReturn {
  render: AsyncModalRender;
  holder: React.ReactElement;
  renderFactory: AsyncModalRenderFactory;
}

export function useAsyncModalRender (): UseAsyncModalRenderReturn {
  // hook 的挂载方式，依靠 ElementsHolder
  const holderRef = React.useRef<ElementsHolderRef>(null)
  const holder = useMemo(() => <ElementsHolder key="component-holder" ref={holderRef}/>, [])

  // render 链接统一的实现 asyncModalImp
  const render = useCallback<AsyncModalRender>((Comp, props) => {
    type PT = ComponentProps<typeof Comp>;
    const [dom, promise] = asyncModalRenderImp<PT>(Comp, props ?? ({} as PT), {
      onClose: () => closeFunc(),
    })
    const closeFunc = holderRef.current!.patchElement(dom)
    return promise
  }, [])

  // 创建 render 的工厂函数
  const renderFactory = useCallback<AsyncModalRenderFactory>((Comp, props) => () => render(Comp, props), [render])

  return {
    render,
    holder,
    renderFactory,
  }
}
