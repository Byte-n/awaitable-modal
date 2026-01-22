import React, { useContext, useMemo } from 'react'
import { AsyncModalRender, AsyncModalRenderFactory, useAsyncModalRender } from './useAsyncModalRender'

export interface AsyncModalContextType {
  render: AsyncModalRender;
  renderFactory: AsyncModalRenderFactory
}

export const AsyncModalRenderContext = React.createContext<AsyncModalContextType>({
  render: () => {
    throw Error(`AsyncModalContext must be used within createRoot.`)
  },
  renderFactory: () => {
    throw Error(`AsyncModalContext must be used within createRoot.`)
  },
})


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

export function useAsyncModalRenderContext () {
  return useContext(AsyncModalRenderContext)
}

