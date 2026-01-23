import { describe, it, expect } from 'vitest'
import React from 'react'
import { withAsyncModalPropsMapper, asyncModalRender } from '../dist'
import { page } from 'vitest/browser'

interface CustomModalProps {
  visible?: boolean
  title: string
  confirm: (data: string) => void
  close: () => void
}

const CustomModal: React.FC<CustomModalProps> = ({ title, confirm, close }) => {
  return (
    <div data-testid="custom-modal">
      <h1 data-testid="modal-title">{title}</h1>
      <button data-testid="confirm-button" onClick={() => confirm('mapped-confirmed')}>Confirm</button>
      <button data-testid="close-button" onClick={() => close()}>Close</button>
    </div>
  )
}

describe('withAsyncModalPropsMapper', () => {
  it('应该正确映射 onOk 和 onCancel 到自定义的属性名', async () => {
    // 映射 onOk -> confirm, onCancel -> close
    const MappedModal = withAsyncModalPropsMapper(CustomModal, ['confirm', 'close'])
    
    const container = document.createElement('div')
    document.body.appendChild(container)
    
    const promise = asyncModalRender(MappedModal, { title: 'Mapped Modal' }, container)
    
    await expect.element(page.getByTestId('custom-modal')).toBeInTheDocument()
    await expect.element(page.getByTestId('modal-title')).toHaveTextContent('Mapped Modal')
    
    // 点击映射后的 confirm 按钮
    await page.getByTestId('confirm-button').click()
    
    const result = await promise
    expect(result).toBe('mapped-confirmed')
    
    container.remove()
  })
})
