import { useAsyncModalRenderImp } from './hook/useAsyncModalRenderImp';
import type { UseAsyncModalRenderReturn } from './types';

/**
 * useAsyncModal 的 Hook 封装
 */
export function useAsyncModalRender(): UseAsyncModalRenderReturn {
  const { render, renderFactory, destroy, holder } = useAsyncModalRenderImp();
  return { render, renderFactory, destroy, holder };
}
