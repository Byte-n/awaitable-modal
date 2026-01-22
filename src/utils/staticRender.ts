import * as ReactDOM from 'react-dom'
import * as React from 'react'

// 检测是否支持 React 18+ 的 createRoot API
const supportsCreateRoot = typeof (ReactDOM as any).createRoot === 'function'

/**
 * 挂载 React 元素到指定容器，并返回卸载函数
 * @param element - 要挂载的 React 元素
 * @param container - DOM 容器元素
 * @returns 卸载函数，调用后会卸载组件并清理资源
 */
export function staticRender (
  element: React.ReactElement,
  container: Element,
): () => void {

  if (supportsCreateRoot) {
    // React 18+
    const createRoot = (ReactDOM as any).createRoot

    // 检查容器是否已有 root 实例
    const existingRoot = (container as any).__reactCompatRoot

    let root
    if (existingRoot) {
      root = existingRoot
    } else {
      // 创建新的 root 并缓存到容器上
      root = createRoot(container);
      (container as any).__reactCompatRoot = root
    }

    // 执行挂载
    root.render(element)

    return () => {
      if ((container as any).__reactCompatRoot !== root) {
        return
      }
      root.unmount()
      delete (container as any).__reactCompatRoot
    }
  } else {
    // React 16/17
    (ReactDOM as any).render(element, container)
    return () => {
      (ReactDOM as any).unmountComponentAtNode(container)
    }
  }
}
