import { describe, it, expect } from 'vitest'
import React from 'react'
import { AsyncModalRenderProvider, useAsyncModalRenderContext } from '../dist'
import type { AsyncModalProps } from '../dist'
import { page } from 'vitest/browser'
import { render, renderHook } from 'vitest-browser-react'

interface TestModalProps extends AsyncModalProps {
  title: string
}

const TestModal: React.FC<TestModalProps> = ({ title, onOk }) => {
  return (
    <div data-testid="test-modal">
      <h1 data-testid="modal-title">{title}</h1>
      <button data-testid="ok-button" onClick={() => onOk?.('context-confirmed')}>OK</button>
    </div>
  )
}

const ConsumerComponent = () => {
  const { render } = useAsyncModalRenderContext()
  return (
    <button 
      data-testid="open-context-modal" 
      onClick={() => render(TestModal, { title: 'Context Modal' })}
    >
      Open
    </button>
  )
}

describe('AsyncModalRenderContext', () => {
  it('应该通过 AsyncModalRenderProvider 提供上下文渲染能力', async () => {
    await render(
      <AsyncModalRenderProvider>
        <ConsumerComponent />
      </AsyncModalRenderProvider>
    )
    
    // 点击触发 Context 中的 render
    await page.getByTestId('open-context-modal').click()
    
    // 检查弹窗是否渲染
    await expect.element(page.getByTestId('test-modal')).toBeInTheDocument()
    await expect.element(page.getByTestId('modal-title')).toHaveTextContent('Context Modal')
    
    // 点击确定
    await page.getByTestId('ok-button').click()
    
    // 弹窗应该消失
    await expect.element(page.getByTestId('test-modal')).not.toBeInTheDocument()
  })

  it('未在 Provider 内使用 useAsyncModalRenderContext 调用 render 时应抛出错误', async () => {
    const { result } = await renderHook(() => useAsyncModalRenderContext())
    const SimpleModal: React.FC<AsyncModalProps> = () => null
    
    // 调用默认 context 中的 render 应该报错
    expect(() => result.current.render(SimpleModal)).toThrow('AsyncModalContext must be used within createRoot.')
    // 调用默认 context 中的 renderFactory 应该报错
    expect(() => result.current.renderFactory(SimpleModal)()).toThrow('AsyncModalContext must be used within createRoot.')
  })
})
