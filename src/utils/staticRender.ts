import { ReactElement } from 'react';

async function getReactDom() {
  /* v8 ignore start -- @preserve */
  // 测试用例中 promise reject 分支不会出发，这里忽略统计
  const RD: any = await import('react-dom');
  /* v8 ignore stop -- @preserve */
  const version = Number(RD.version?.split('.')[0]);

  // 19 版本
  if (version && !isNaN(version) && version >= 19) {
    /* v8 ignore start -- @preserve */
    const client: any = await import('react-dom/client');
    /* v8 ignore stop -- @preserve */
    if (client && typeof client.createRoot === 'function') {
      return [RD, client.createRoot];
    }
  }

  // 小于19 版本
  if (typeof (RD as any).createRoot === 'function') {
    return [RD, (RD as any).createRoot];
  }
  return [RD];
}

/**
* 挂载 React 元素到指定容器，并返回卸载函数
*/
export async function staticRender(element: ReactElement, container: Element): Promise<() => void> {
  const [RD, createRootFn] = await getReactDom();
  if (createRootFn) {
    // React 18 & 19+ 逻辑
    const existingRoot = (container as any).__reactCompatRoot;
    let root;

    if (existingRoot) {
      root = existingRoot;
    } else {
      root = createRootFn(container);
      (container as any).__reactCompatRoot = root;
    }

    root.render(element);

    return () => {
      // 这里的清理逻辑需要防抖或微任务化，防止 React 18 内部渲染冲突
      // 简单实现：
      if ((container as any).__reactCompatRoot === root) {
        root.unmount();
        delete (container as any).__reactCompatRoot;
      }
    };
  }

  // React 16/17 逻辑
  // React 19 已经彻底删除了 ReactDom.render
  if (typeof RD.render === 'function') {
    RD.render(element, container);
    return () => {
      RD.unmountComponentAtNode(container);
    };
  }

  throw new Error('当前 React 版本不支持 render 或 createRoot，请检查依赖。');
}
