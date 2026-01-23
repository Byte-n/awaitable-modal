import React from 'react'
import { staticRender } from './utils/staticRender'
import { asyncModalRenderImp } from './utils/asyncModalRenderImp'
import type { AsyncModalProps, ComputeAsyncModalProps } from './types'

/**
 * 直接将组件渲染到 container 元素下
 * @param Comp 组件
 * @param props 熟悉
 * @param container 挂载的容器
 */
export function asyncModalRender<D extends AsyncModalProps>(
  Comp: React.ComponentType<D>,
  props?: ComputeAsyncModalProps<D>,
  container?: Element,
) {
  const [dom, promise] = asyncModalRenderImp<D>(Comp, props ?? ({} as ComputeAsyncModalProps<D>), {
    onClose: () => closeFunc(),
  });
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
    uninstallEffect();
  };
  return promise;
}
