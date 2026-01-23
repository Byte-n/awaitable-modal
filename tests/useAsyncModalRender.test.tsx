import { describe, it, expect } from 'vitest'
import React from 'react'
import { useAsyncModalRender } from '../dist'
import type { AsyncModalProps } from '../dist'
import { page } from 'vitest/browser'
import { render } from 'vitest-browser-react'

interface TestModalProps extends AsyncModalProps {
  title: string
}

const TestModal: React.FC<TestModalProps> = ({ title, onOk, onCancel }) => {
  return (
    <div data-testid="test-modal">
      <h1 data-testid="modal-title">{title}</h1>
      <button data-testid="ok-button" onClick={() => onOk?.('hook-confirmed')}>OK</button>
      <button data-testid="cancel-button" onClick={() => onCancel?.()}>Cancel</button>
    </div>
  )
}

const TestApp = () => {
  const { render, holder } = useAsyncModalRender()
  return (
    <div>
      <button 
        data-testid="open-modal" 
        onClick={() => render(TestModal, { title: 'Hook Modal' })}
      >
        Open
      </button>
      {holder}
    </div>
  )
}

describe('useAsyncModalRender', () => {
  it('应该正确渲染 holder 并通过 render 函数打开弹窗', async () => {
    await render(<TestApp />)
    
    // 点击按钮触发 render
    await page.getByTestId('open-modal').click()
    
    // 检查弹窗是否渲染
    await expect.element(page.getByTestId('test-modal')).toBeInTheDocument()
    await expect.element(page.getByTestId('modal-title')).toHaveTextContent('Hook Modal')
    
    // 点击确定
    await page.getByTestId('ok-button').click()
    
    // 弹窗应该消失
    await expect.element(page.getByTestId('test-modal')).not.toBeInTheDocument()
  })

  it('renderFactory 应该能正常工作', async () => {
    const FactoryApp = () => {
      const { renderFactory, holder } = useAsyncModalRender()
      const openModal = renderFactory(TestModal, { title: 'Factory Modal' })
      
      return (
        <div>
          <button data-testid="open-factory" onClick={openModal}>Open Factory</button>
          {holder}
        </div>
      )
    }

    await render(<FactoryApp />)
    await page.getByTestId('open-factory').click()
    
    await expect.element(page.getByTestId('test-modal')).toBeInTheDocument()
    await expect.element(page.getByTestId('modal-title')).toHaveTextContent('Factory Modal')
    
    await page.getByTestId('ok-button').click()
    await expect.element(page.getByTestId('test-modal')).not.toBeInTheDocument()
  })
})
