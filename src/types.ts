import React, { ComponentType } from 'react';

export interface AsyncModalProps {
  onOk?: (data: any) => void;
  onCancel?: (error?: any) => void;
}

export type ComputeAsyncModalProps<D extends AsyncModalProps, Quiet extends boolean> =
  & Pick<D, Exclude<keyof D, 'onOk' |'onCancel'>>
  & Partial<Pick<D, 'onOk'>>
  & (
    Quiet extends true ? (
      { onCancel?: VoidFunction }
    ) : Pick<AsyncModalProps, 'onCancel'>
  );

export type AsyncModalRenderOptions<D, Quiet extends boolean> = {
  /**
   * 状态持久化的key，若不传，则关闭时直接销毁弹窗。
   */
  persistent: string;
  /**
   * 控制弹窗展示隐藏的prop key
   */
  openField: ExtractBooleanKeys<D>;
  quiet?: Quiet;
}

type ExtractBooleanKeys<T> = {
  [K in keyof T]: Required<T>[K] extends boolean ? K : never;
}[keyof T];

export interface AsyncModalDestroyOptions {
  /**
   * 状态持久化的key，若不传，则关闭销毁所有持久化的弹窗。
   */
  persistent?: string;
  /**
   * 可见性筛选，若不传，则默认筛选所有弹窗。
   */
  visibility?: 'visible' | 'hidden';
}

export interface AsyncModalRender {
  <D extends AsyncModalProps, const Quiet extends boolean>(
    Comp: React.ComponentType<D>,
    props?: ComputeAsyncModalProps<D, Quiet>,
    options?: AsyncModalRenderOptions<D, Quiet>,
  ): Promise<D['onOk'] extends (v: infer R) => void ? ComputeQuiet<Quiet, R> : never> & { destroyModal: VoidFunction };
}

export interface AsyncModalRenderQuiet {
  <D extends AsyncModalProps>(
    Comp: React.ComponentType<D>,
    props?: ComputeAsyncModalProps<D, true>,
    options?: Omit<AsyncModalRenderOptions<D, true>, 'quiet'>,
  ): Promise<D['onOk'] extends (v: infer R) => void ? ComputeQuiet<true, R> : never> & { destroyModal: VoidFunction };
}

// const fun: AsyncModalRender = null as any as AsyncModalRender;
// fun(null as any as ComponentType<AsyncModalProps & {OPEN?:boolean}>, {onCancel: (_)=> {}}, { persistent:'s', quiet:true, openField: 'OPEN'  })

export interface AsyncModalRenderFactory {
  <D extends AsyncModalProps, Quiet extends boolean>(
    Comp: React.ComponentType<D>,
    props?: ComputeAsyncModalProps<D, Quiet>,
    options?: AsyncModalRenderOptions<D, Quiet>,
  ): (() => Promise<D['onOk'] extends (v: infer R) => void ? ComputeQuiet<Quiet, R> : never> & { destroyModal: VoidFunction }) & {
    destroyModal: VoidFunction;
  };
}

export interface AsyncModalDestroy {
  (options: AsyncModalDestroyOptions): void;
}

export interface UseAsyncModalRenderReturn {
  render: AsyncModalRender;
  holder: React.ReactElement;
  renderFactory: AsyncModalRenderFactory;
  destroy: AsyncModalDestroy;
}

export type ContextAsyncModalRenderOptions<D, Quiet extends boolean> = {
  /**
   * 状态持久化的key，若不传，则关闭时直接销毁弹窗。
   */
  persistent: string;
  /**
   * 控制弹窗展示隐藏的prop key
   */
  openField: ExtractBooleanKeys<D>;
  destroyStrategy?: 'hook' | 'context';
  quiet?: Quiet
};

export interface ContextAsyncModalRender {
  <D extends AsyncModalProps, Quiet extends boolean>(
    Comp: React.ComponentType<D>,
    props?: ComputeAsyncModalProps<D, Quiet>,
    options?: ContextAsyncModalRenderOptions<D, Quiet>,
  ): Promise<D['onOk'] extends (v: infer R) => void ? ComputeQuiet<Quiet, R> : never>;
}

export interface ContextAsyncModalRenderFactory {
  <D extends AsyncModalProps, Quiet extends boolean>(
    Comp: React.ComponentType<D>,
    props?: ComputeAsyncModalProps<D, Quiet>,
    options?: ContextAsyncModalRenderOptions<D, Quiet>,
  ): () => Promise<D['onOk'] extends (v: infer R) => void ? ComputeQuiet<Quiet, R> : never>;
}

type ComputeQuiet <Quiet extends boolean, R> = Quiet extends true ? (R | undefined) : R

export interface AsyncModalContext {
  render: ContextAsyncModalRender;
  renderFactory: ContextAsyncModalRenderFactory;
  destroy: AsyncModalDestroy;
}
