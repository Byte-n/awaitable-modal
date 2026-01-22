import React, { ComponentProps } from 'react'
import { staticRender } from './utils/staticRender'
import { asyncModalRenderImp } from './utils/asyncModalRenderImp'

export interface AsyncModalProps {
  onOk?: (...args: any[]) => void;
  onCancel?: (error?: any) => void;
}


export class AsyncModalRenderCancelError extends Error {
  constructor () {
    super('User cancel')
  }
}

/**
 * 直接将组件渲染到 container 元素下
 * @param Comp 组件
 * @param props 熟悉
 * @param container 挂载的容器
 */
export function asyncModalRender<D extends AsyncModalProps> (
  Comp: React.ComponentType<D>,
  props: Omit<D, keyof AsyncModalProps> & Pick<D, keyof AsyncModalProps>,
  container?: Element,
) {
  type PT = ComponentProps<typeof Comp>;
  const [dom, promise] = asyncModalRenderImp<PT>(Comp, props ?? ({} as PT), {
    onClose: () => closeFunc(),
  })
  let uninstallEffect = () => {};
  let realContainer = container;
  if (!realContainer) {
    realContainer = document.createElement('div');
    document.body.appendChild(realContainer);
    uninstallEffect = () => container!.remove();
  }
  const uninstall = staticRender(dom, realContainer);
  const closeFunc = () => {
    uninstall();
    uninstallEffect()
  }
  return promise
}
