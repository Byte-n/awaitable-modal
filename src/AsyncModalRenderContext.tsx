import React, { useContext, useMemo } from 'react';
import { useAsyncModalRender } from './useAsyncModalRender';
import type { AsyncModalContext } from './types';

export const AsyncModalRenderContext = React.createContext<AsyncModalContext>({
  render: () => {
    throw Error(`AsyncModalContext must be used within createRoot.`);
  },
  renderFactory: () => {
    throw Error(`AsyncModalContext must be used within createRoot.`);
  },
});

/**
 * useAsyncModal 的配套 Context
 * @param children
 * @constructor
 */
export function AsyncModalRenderProvider ({ children }: { children: React.ReactNode }) {
  const { render, renderFactory, holder } = useAsyncModalRender();
  const value = useMemo(() => ({ render, renderFactory }), []);
  return (
    <AsyncModalRenderContext.Provider value={value}>
      {children}
      {holder}
    </AsyncModalRenderContext.Provider>
  )
}

/**
 * useAsyncModal 的 Context 方式获取
 */
export function useAsyncModalRenderContext () {
  return useContext(AsyncModalRenderContext)
}

