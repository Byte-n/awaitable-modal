import React from 'react'
import { staticRender } from './utils/staticRender'
import { asyncModalRenderImp } from './utils/asyncModalRenderImp'
import type { AsyncModalProps, ComputeAsyncModalProps } from './types'

/**
 * 直接将组件渲染到 container 元素下
 * @param Comp 组件
 * @param props 熟悉
 * @param container 挂载的容器
 * @param options
 */
export async function asyncModalRender<D extends AsyncModalProps, Quiet extends boolean>(
  Comp: React.ComponentType<D>,
  props?: ComputeAsyncModalProps<D, Quiet>,
  container?: Element,
  options?: { quiet: Quiet }
) {
  const [dom, promise] = asyncModalRenderImp<D, Quiet>(Comp, props ?? ({} as ComputeAsyncModalProps<D, Quiet>), {
    onClose: () => closeFunc(),
    quiet: options?.quiet
  });
  let uninstallEffect = () => {};
  let realContainer = container;
  if (!realContainer) {
    realContainer = document.createElement('div');
    document.body.appendChild(realContainer);
    uninstallEffect = () => realContainer!.remove();
  }
  const uninstall = await staticRender(dom, realContainer);
  const closeFunc = () => {
    uninstall();
    uninstallEffect();
  };
  return promise;
}
