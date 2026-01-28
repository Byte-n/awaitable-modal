import React, { useCallback, useContext, useEffect, useMemo, useRef } from 'react';
import { useAsyncModalRenderImp } from './hook/useAsyncModalRenderImp';
import { AsyncModalContext, UseAsyncModalRenderReturn } from './types';

export const AsyncModalRenderContext = React.createContext<Omit<UseAsyncModalRenderReturn, 'holder'>>({
  render: () => {
    throw Error(`AsyncModalContext must be used within createRoot.`);
  },
  renderFactory: () => {
    throw Error(`AsyncModalContext must be used within createRoot.`);
  },
  destroy: () => {
    throw Error(`AsyncModalContext must be used within createRoot.`);
  },
});

/**
 * useAsyncModal 的配套 Context
 * @param children
 * @constructor
 */
export function AsyncModalRenderProvider({ children }: { children: React.ReactNode }) {
  const { render, renderFactory, holder, destroy } = useAsyncModalRenderImp();
  const value = useMemo(() => ({ render, renderFactory, destroy }), [render, renderFactory, destroy]);
  return (
    <AsyncModalRenderContext.Provider value={value}>
      {children}
      {holder}
    </AsyncModalRenderContext.Provider>
  );
}

/**
 * useAsyncModal 的 Context 方式获取
 */
export function useAsyncModalRenderContext(): AsyncModalContext {
  const { render, renderFactory, destroy } = useContext(AsyncModalRenderContext);

  // 优化1：使用 Set 替代数组，提升删除性能
  const unmountCallbacks = useRef<Set<VoidFunction>>(new Set());

  // 包装 destroyModal，添加防重复和自动清理逻辑
  const wrapDestroyModal = useCallback(<T extends { destroyModal: VoidFunction }>(promise: T) => {
    const originalDestroy = promise.destroyModal;

    let isDestroyed = false;
    const wrappedDestroy = () => {
      if (isDestroyed) return; // 防止重复销毁
      isDestroyed = true;
      originalDestroy();
      unmountCallbacks.current.delete(wrappedDestroy); // 自动从集合中移除
    };

    unmountCallbacks.current.add(wrappedDestroy);
    promise.destroyModal = wrappedDestroy;
  }, []);

  const realRender = useCallback<AsyncModalContext['render']>(
    (Comp, props, options) => {
      if (!options) {
        return render(Comp, props, options);
      }

      const promise = render(Comp, props, options);
      if (options.destroyStrategy === 'hook') {
        wrapDestroyModal(promise);
      }
      return promise;
    },
    [render, wrapDestroyModal],
  );

  const realRenderFactory = useCallback<AsyncModalContext['renderFactory']>(
    (Comp, props, options) => {
      if (!options) {
        return renderFactory(Comp, props, options);
      }

      const promise = renderFactory(Comp, props, options);
      if (options.destroyStrategy === 'hook') {
        wrapDestroyModal(promise);
      }
      return promise;
    },
    [renderFactory, wrapDestroyModal],
  );

  useEffect(() => {
    return () => {
      unmountCallbacks.current.forEach((v) => v());
      unmountCallbacks.current.clear(); // 清空集合
    };
  }, []);

  return {
    render: realRender,
    renderFactory: realRenderFactory,
    destroy,
  };
}
