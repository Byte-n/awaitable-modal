import { describe, it, expect, beforeEach, afterEach, vi } from 'vitest'
import React from 'react'
import { asyncModalRender, AsyncModalRenderCancelError } from '../dist'
import type { AsyncModalProps } from '../dist'
import { page } from 'vitest/browser'

interface TestModalProps extends AsyncModalProps {
  title: string
  message?: string
}

const TestModal: React.FC<TestModalProps> = ({ title, message, onOk, onCancel }) => {
  return (
    <div data-testid="test-modal">
      <h1 data-testid="modal-title">{title}</h1>
      {message && <p data-testid="modal-message">{message}</p>}
      <button data-testid="ok-button" onClick={() => onOk?.('confirmed')}>
        OK
      </button>
      <button data-testid="cancel-button" onClick={() => onCancel?.()}>
        Cancel
      </button>
    </div>
  )
}

describe('asyncModalRender', () => {
  let container: HTMLDivElement

  beforeEach(() => {
    container = document.createElement('div')
    document.body.appendChild(container)
  })

  afterEach(() => {
    container.remove()
  })

  it('点击确定时应渲染弹窗并 resolve 返回值', async () => {
    const promise = asyncModalRender(TestModal, { title: 'Test Modal', message: 'Test Message' }, container)
    await expect.element(page.getByTestId('test-modal')).toBeInTheDocument()
    await expect.element(page.getByTestId('modal-title')).toHaveTextContent('Test Modal')
    await expect.element(page.getByTestId('modal-message')).toHaveTextContent('Test Message')
    await page.getByTestId('ok-button').click()

    const result = await promise
    expect(result).toBe('confirmed')
    expect(container.querySelector('[data-testid="test-modal"]')).toBeNull()
  })

  it('不传 message 时不应渲染 message 节点', async () => {
    const promise = asyncModalRender(TestModal, { title: 'Only Title' }, container)

    await expect.element(page.getByTestId('modal-title')).toHaveTextContent('Only Title')
    expect(container.querySelector('[data-testid="modal-message"]')).toBeNull()

    await page.getByTestId('ok-button').click()
    await promise
  })

  it('点击取消时应 reject AsyncModalRenderCancelError', async () => {
    const onCancel = vi.fn()
    const promise = asyncModalRender(TestModal, { title: 'Cancel Test', onCancel }, container)

    // 立即“吞掉”异常，防止上报给全局 runner
    promise.catch(() => {}) 

    await page.getByTestId('cancel-button').click()

    await expect(promise).rejects.toBeInstanceOf(AsyncModalRenderCancelError)
    expect(onCancel).toHaveBeenCalledTimes(1)
    expect(onCancel.mock.calls[0]?.[0]).toBeInstanceOf(AsyncModalRenderCancelError)
    expect(container.querySelector('[data-testid="test-modal"]')).toBeNull()
  })

  it('onCancel 传入错误时应原样 reject 该错误', async () => {
    interface ErrorCancelModalProps extends AsyncModalProps {
      title: string
      cancelError: Error
    }

    const ErrorCancelModal: React.FC<ErrorCancelModalProps> = ({ title, cancelError, onCancel }) => {
      return (
        <div data-testid="test-modal">
          <h1 data-testid="modal-title">{title}</h1>
          <button data-testid="cancel-button" onClick={() => onCancel?.(cancelError)}>
            Cancel
          </button>
        </div>
      )
    }

    const customError = new Error('用户主动中止')
    const promise = asyncModalRender(
      ErrorCancelModal,
      { title: 'Error Cancel', cancelError: customError },
      container,
    )
    // 立即“吞掉”异常，防止上报给全局 runner
    promise.catch(() => {}) 

    await page.getByTestId('cancel-button').click()
    await expect(promise).rejects.toBe(customError)
    expect(container.querySelector('[data-testid="test-modal"]')).toBeNull()
  })

  it('props 的 onOk 回调应在确定时被调用', async () => {
    const onOk = vi.fn()
    const promise = asyncModalRender(TestModal, { title: 'OK Callback', onOk }, container)

    await page.getByTestId('ok-button').click()
    await expect(promise).resolves.toBe('confirmed')
    expect(onOk).toHaveBeenCalledTimes(1)
    expect(onOk).toHaveBeenCalledWith('confirmed')
  })
})
