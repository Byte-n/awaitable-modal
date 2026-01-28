import React, { ComponentProps } from 'react';
import { AsyncModalProps, ComputeAsyncModalProps } from '../types';
import { AsyncModalRenderCancelError } from './AsyncModalRenderCancelError';

type ReturnType<D extends AsyncModalProps> = D['onOk'] extends (v: infer R) => void ? R : never;

interface AsyncModalOptions {
  onClose: VoidFunction
  quiet?: boolean
}

/**
 * 弹窗入参、交互、创建的统一实现
 * @param Comp
 * @param props
 * @param options
 */
export function asyncModalRenderImp<D extends AsyncModalProps, Quiet extends boolean>(
  Comp: React.ComponentType<D>,
  props: ComputeAsyncModalProps<D, Quiet>,
  options: AsyncModalOptions,
): [React.ReactElement, Promise<ReturnType<D>>] {
  let dom: React.ReactElement | null = null;
  const promise = new Promise<ReturnType<D>>((resolve, reject) => {
    const onOk = (v: ReturnType<D>) => {
      options.onClose();
      resolve(v);
      props?.onOk?.(v);
    };
    const onCancel = (err: any) => {
      const realError = err === undefined ? new AsyncModalRenderCancelError() : err;
      options.onClose();
      if (options) {
        reject(realError);
        props?.onCancel?.(realError);
      } else {
        resolve(undefined as ReturnType<D>);
        props?.onCancel?.();
      }
    };
    dom = <Comp {...(props as ComponentProps<typeof Comp>)} onOk={onOk} onCancel={onCancel} />;
  });
  return [dom!, promise];
}
