import { describe, it, expect } from 'vitest'
import React from 'react'
import { useAsyncModalRender } from '../src'
import type { AsyncModalProps } from '../src'
import { page } from 'vitest/browser'
import { render, renderHook } from 'vitest-browser-react'

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

interface PersistentModalProps extends AsyncModalProps {
  title: string
  open?: boolean
}

const PersistentModal: React.FC<PersistentModalProps> = ({ title, open, onOk, onCancel }) => {
  const [count, setCount] = React.useState(0)
  return (
    <div data-testid="persistent-modal" style={{ display: open ? 'block' : 'none' }}>
      <h1 data-testid="persistent-title">{title}</h1>
      <p data-testid="persistent-count">{count}</p>
      <button data-testid="persistent-inc" onClick={() => setCount((c) => c + 1)}>
        Inc
      </button>
      <button data-testid="persistent-ok" onClick={() => onOk?.(count)}>
        OK
      </button>
      <button data-testid="persistent-cancel" onClick={() => onCancel?.()}>
        Cancel
      </button>
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

  it('render 返回的 Promise.destroyModal 能正确移除 DOM', async () => {
    const { result } = await renderHook(() => useAsyncModalRender())
    const { render: renderModal, holder } = result.current
    await render(<div>{holder}</div>)
    const promise = renderModal(TestModal, { title: 'Destroy Modal' })
    await expect.element(page.getByTestId('test-modal').filter({ hasText: 'Destroy Modal' })).toBeInTheDocument()
    promise.destroyModal()
    await expect.element(page.getByTestId('test-modal').filter({ hasText: 'Destroy Modal' })).not.toBeInTheDocument()
  })

  it('destroyModal 幂等调用不应报错', async () => {
    const { result } = await renderHook(() => useAsyncModalRender())
    const { render: renderModal, holder } = result.current
    await render(<div>{holder}</div>)
    const promise = renderModal(TestModal, { title: 'Idempotent Destroy' })
    await expect.element(page.getByTestId('test-modal').filter({ hasText: 'Idempotent Destroy' })).toBeInTheDocument()
    expect(() => promise.destroyModal()).not.toThrow()
    expect(() => promise.destroyModal()).not.toThrow()
    await expect.element(page.getByTestId('test-modal').filter({ hasText: 'Idempotent Destroy' })).not.toBeInTheDocument()
  })

  it('仅提供 persistent 或仅提供 openField 时应走非持久化分支', async () => {
    const { result } = await renderHook(() => useAsyncModalRender())
    const { render: renderModal, holder } = result.current
    await render(<div>{holder}</div>)
    const p1 = renderModal(TestModal, { title: 'Only Persistent' }, { persistent: 'only-key' } as any)
    await expect.element(page.getByTestId('test-modal').filter({ hasText: 'Only Persistent' })).toBeInTheDocument()
    await page.getByTestId('test-modal').filter({ hasText: 'Only Persistent' }).getByTestId('ok-button').click()
    await p1
    await expect.element(page.getByTestId('test-modal').filter({ hasText: 'Only Persistent' })).not.toBeInTheDocument()

    const p2 = renderModal(TestModal, { title: 'Only OpenField' }, { openField: 'open' } as any)
    await expect.element(page.getByTestId('test-modal').filter({ hasText: 'Only OpenField' })).toBeInTheDocument()
    await page.getByTestId('test-modal').filter({ hasText: 'Only OpenField' }).getByTestId('ok-button').click()
    await p2
    await expect.element(page.getByTestId('test-modal').filter({ hasText: 'Only OpenField' })).not.toBeInTheDocument()
  })

  it('persistent key 支持 number', async () => {
    const { result } = await renderHook(() => useAsyncModalRender())
    const { render: renderModal, holder, destroy } = result.current
    await render(<div>{holder}</div>)

    const key = 1 as any
    const p1 = renderModal(PersistentModal, { title: 'Num Key' }, { persistent: key, openField: 'open' } as any)
    await expect.element(page.getByTestId('persistent-modal')).toBeVisible()
    await page.getByTestId('persistent-inc').click()
    await expect.element(page.getByTestId('persistent-count')).toHaveTextContent('1')

    await page.getByTestId('persistent-ok').click()
    await p1
    await expect.element(page.getByTestId('persistent-modal')).toBeInTheDocument()
    await expect.element(page.getByTestId('persistent-modal')).not.toBeVisible()

    const p2 = renderModal(PersistentModal, { title: 'Num Key' }, { persistent: key, openField: 'open' } as any)
    await expect.element(page.getByTestId('persistent-modal')).toBeVisible()
    await expect.element(page.getByTestId('persistent-count')).toHaveTextContent('1')
    await page.getByTestId('persistent-ok').click()
    await p2

    destroy({ persistent: key } as any)
    await expect.element(page.getByTestId('persistent-modal')).not.toBeInTheDocument()
  })

  it('persistent key 支持 symbol', async () => {
    const { result } = await renderHook(() => useAsyncModalRender())
    const { render: renderModal, holder, destroy } = result.current
    await render(<div>{holder}</div>)

    const key = Symbol('sym-key') as any
    const p = renderModal(PersistentModal, { title: 'Sym Key' }, { persistent: key, openField: 'open' } as any)
    await expect.element(page.getByTestId('persistent-modal')).toBeVisible()
    await page.getByTestId('persistent-ok').click()
    await p
    await expect.element(page.getByTestId('persistent-modal')).toBeInTheDocument()
    await expect.element(page.getByTestId('persistent-modal')).not.toBeVisible()

    destroy({ persistent: key } as any)
    await expect.element(page.getByTestId('persistent-modal')).not.toBeInTheDocument()
  })

  it('持久化关闭后，旧 destroyModal 不应误删已 patch 的元素；应使用 destroy 清理', async () => {
    const { result } = await renderHook(() => useAsyncModalRender())
    const { render: renderModal, holder, destroy } = result.current
    await render(<div>{holder}</div>)

    const p = renderModal(PersistentModal, { title: 'Stale Destroy' }, { persistent: 'stale', openField: 'open' } as any)
    await expect.element(page.getByTestId('persistent-modal')).toBeVisible()
    await page.getByTestId('persistent-ok').click()
    await p

    await expect.element(page.getByTestId('persistent-modal')).toBeInTheDocument()
    await expect.element(page.getByTestId('persistent-modal')).not.toBeVisible()

    p.destroyModal()
    await expect.element(page.getByTestId('persistent-modal')).toBeInTheDocument()

    destroy({ persistent: 'stale' })
    await expect.element(page.getByTestId('persistent-modal')).not.toBeInTheDocument()
  })

  it('不传 props 时 render 应使用空对象并正常 resolve', async () => {
    const MinimalModal: React.FC<AsyncModalProps> = ({ onOk }) => {
      return (
        <div data-testid="minimal-modal">
          <button data-testid="minimal-ok" onClick={() => onOk?.('ok')}>
            OK
          </button>
        </div>
      )
    }

    const { result } = await renderHook(() => useAsyncModalRender())
    const { render: renderModal, holder } = result.current
    await render(<div>{holder}</div>)

    const p = renderModal(MinimalModal as any)
    await expect.element(page.getByTestId('minimal-modal')).toBeInTheDocument()
    await page.getByTestId('minimal-ok').click()
    await expect(p).resolves.toBe('ok')
  })

})
