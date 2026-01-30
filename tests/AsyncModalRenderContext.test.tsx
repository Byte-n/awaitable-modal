import { describe, it, expect } from 'vitest'
import React from 'react'
import { AsyncModalRenderProvider, useAsyncModalRenderContext } from '../src'
import type { AsyncModalProps } from '../src'
import { page } from 'vitest/browser'
import { render, renderHook } from 'vitest-browser-react'

interface TestModalProps extends AsyncModalProps {
  title: string
  open?: boolean;
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

  it('destroyStrategy=hook 时，Provider 卸载应清理已打开的弹窗', async () => {
    const HookConsumer = () => {
      const { render } = useAsyncModalRenderContext()
      return (
        <button
          data-testid="open-hook"
          onClick={() => render(TestModal, { title: 'Hook Modal' }, { destroyStrategy: 'hook', persistent: 'hook-modal', openField: 'open' })}
        >
          Open Hook
        </button>
      )
    }

    const Wrapper = () => {
      const [showConsumer, setShowConsumer] = React.useState(true)
      return (
        <AsyncModalRenderProvider>
          <button data-testid="toggle-consumer" onClick={() => setShowConsumer((s) => !s)}>
            Toggle Consumer
          </button>
          {showConsumer && <HookConsumer />}
        </AsyncModalRenderProvider>
      )
    }

    await render(<Wrapper />)
    await page.getByTestId('open-hook').click()
    await expect.element(page.getByTestId('test-modal')).toBeInTheDocument()
    await page.getByTestId('toggle-consumer').click()
    await new Promise((resolve) => { setTimeout(resolve, 500) })
    await expect.element(page.getByTestId('test-modal')).not.toBeInTheDocument()
  })

  it('destroyStrategy=context 时，Provider 卸载不自动调用 destroyModal（DOM 被卸载）', async () => {
    const ContextConsumer = () => {
      const { render } = useAsyncModalRenderContext()
      return (
        <button
          data-testid="open-context"
          onClick={() => render(TestModal, { title: 'Ctx Modal' }, { destroyStrategy: 'context', persistent: 'context-modal', openField: 'open' })}
        >
          Open Ctx
        </button>
      )
    }

    const Wrapper = () => {
      const [showConsumer, setShowConsumer] = React.useState(true)
      return (
        <AsyncModalRenderProvider>
          <button data-testid="toggle-consumer" onClick={() => setShowConsumer((s) => !s)}>
            Toggle Consumer
          </button>
          {showConsumer && <ContextConsumer />}
        </AsyncModalRenderProvider>
      )
    }

    await render(<Wrapper />)
    await page.getByTestId('open-context').click()
    await expect.element(page.getByTestId('test-modal')).toBeInTheDocument()
    await page.getByTestId('toggle-consumer').click()
    await new Promise((resolve) => { setTimeout(resolve, 500) })
    await expect.element(page.getByTestId('test-modal')).toBeInTheDocument()
  })

  it('无 options 时，组件卸载不自动触发 destroyModal 清理', async () => {
    const NoOptionsConsumer = () => {
      const { render } = useAsyncModalRenderContext()
      return (
        <button
          data-testid="open-no-options"
          onClick={() => render(TestModal, { title: 'No Options' })}
        >
          Open No Options
        </button>
      )
    }

    const Wrapper = () => {
      const [showConsumer, setShowConsumer] = React.useState(true)
      return (
        <AsyncModalRenderProvider>
          <button data-testid="toggle-consumer" onClick={() => setShowConsumer((s) => !s)}>
            Toggle Consumer
          </button>
          {showConsumer && <NoOptionsConsumer />}
        </AsyncModalRenderProvider>
      )
    }

    await render(<Wrapper />)
    await page.getByTestId('open-no-options').click()
    await expect.element(page.getByTestId('test-modal')).toBeInTheDocument()
    await page.getByTestId('toggle-consumer').click()
    await new Promise((resolve) => {
      setTimeout(resolve, 500)
    })
    await expect.element(page.getByTestId('test-modal')).toBeInTheDocument()
  })

  it('renderFactory 无 options 时，组件卸载不自动清理 factory 创建的弹窗', async () => {
    const FactoryConsumer = () => {
      const { renderFactory } = useAsyncModalRenderContext()
      const factoryRef = React.useRef<ReturnType<typeof renderFactory> | null>(null)
      if (!factoryRef.current) {
        factoryRef.current = renderFactory(TestModal, { title: 'Factory No Options' })
      }
      return (
        <button data-testid="open-factory-no-options" onClick={() => factoryRef.current?.()}>
          Open Factory No Options
        </button>
      )
    }

    const Wrapper = () => {
      const [showConsumer, setShowConsumer] = React.useState(true)
      return (
        <AsyncModalRenderProvider>
          <button data-testid="toggle-consumer" onClick={() => setShowConsumer((s) => !s)}>
            Toggle Consumer
          </button>
          {showConsumer && <FactoryConsumer />}
        </AsyncModalRenderProvider>
      )
    }

    await render(<Wrapper />)
    await page.getByTestId('open-factory-no-options').click()
    await expect.element(page.getByTestId('test-modal')).toBeInTheDocument()
    await page.getByTestId('toggle-consumer').click()
    await new Promise((resolve) => {
      setTimeout(resolve, 500)
    })
    await expect.element(page.getByTestId('test-modal')).toBeInTheDocument()
  })

  it('destroyStrategy=hook 时，renderFactory 创建的弹窗在组件卸载应被统一清理', async () => {
    const FactoryConsumer = () => {
      const { renderFactory } = useAsyncModalRenderContext()
      const factoryRef = React.useRef<ReturnType<typeof renderFactory> | null>(null)
      if (!factoryRef.current) {
        factoryRef.current = renderFactory(TestModal, { title: 'Hook Factory' }, { destroyStrategy: 'hook' })
      }
      return (
        <button
          data-testid="open-factory-twice-hook"
          onClick={() => {
            factoryRef.current?.()
            factoryRef.current?.()
          }}
        >
          Open Factory Twice Hook
        </button>
      )
    }

    const Wrapper = () => {
      const [showConsumer, setShowConsumer] = React.useState(true)
      return (
        <AsyncModalRenderProvider>
          <button data-testid="toggle-consumer" onClick={() => setShowConsumer((s) => !s)}>
            Toggle Consumer
          </button>
          {showConsumer && <FactoryConsumer />}
        </AsyncModalRenderProvider>
      )
    }

    await render(<Wrapper />)
    await page.getByTestId('open-factory-twice-hook').click()
    await expect.poll(() => document.querySelectorAll('[data-testid="test-modal"]').length).toBe(2)
    await page.getByTestId('toggle-consumer').click()
    await new Promise((resolve) => {
      setTimeout(resolve, 500)
    })
    await expect.poll(() => document.querySelectorAll('[data-testid="test-modal"]').length).toBe(0)
  })

  it('destroyStrategy=hook 时，renderPersistentFactory 创建的弹窗在组件卸载应被清理', async () => {
    const PersistentFactoryConsumer = () => {
      const { renderPersistentFactory } = useAsyncModalRenderContext()
      const factoryRef = React.useRef<ReturnType<typeof renderPersistentFactory> | null>(null)
      if (!factoryRef.current) {
        factoryRef.current = renderPersistentFactory(
          TestModal,
          { title: 'Hook Persistent Factory' },
          { destroyStrategy: 'hook', persistent: 'hook-persistent-factory', openField: 'open' },
        )
      }
      return (
        <button data-testid="open-persistent-factory-hook" onClick={() => factoryRef.current?.()}>
          Open Persistent Factory Hook
        </button>
      )
    }

    const Wrapper = () => {
      const [showConsumer, setShowConsumer] = React.useState(true)
      return (
        <AsyncModalRenderProvider>
          <button data-testid="toggle-consumer" onClick={() => setShowConsumer((s) => !s)}>
            Toggle Consumer
          </button>
          {showConsumer && <PersistentFactoryConsumer />}
        </AsyncModalRenderProvider>
      )
    }

    await render(<Wrapper />)
    await page.getByTestId('open-persistent-factory-hook').click()
    await expect.element(page.getByTestId('test-modal')).toBeInTheDocument()
    await page.getByTestId('toggle-consumer').click()
    await new Promise((resolve) => {
      setTimeout(resolve, 500)
    })
    await expect.element(page.getByTestId('test-modal')).not.toBeInTheDocument()
  })

  it('destroyStrategy=hook 时，render 返回的 destroyModal 应幂等', async () => {
    let lastPromise: any
    const HookRenderConsumer = () => {
      const { render } = useAsyncModalRenderContext()
      return (
        <button
          data-testid="open-hook-render"
          onClick={() => {
            lastPromise = render(TestModal, { title: 'Hook Render' }, { destroyStrategy: 'hook' })
          }}
        >
          Open Hook Render
        </button>
      )
    }

    await render(
      <AsyncModalRenderProvider>
        <HookRenderConsumer />
      </AsyncModalRenderProvider>,
    )

    await page.getByTestId('open-hook-render').click()
    await expect.element(page.getByTestId('test-modal')).toBeInTheDocument()
    expect(() => lastPromise.destroyModal()).not.toThrow()
    expect(() => lastPromise.destroyModal()).not.toThrow()
    await expect.element(page.getByTestId('test-modal')).not.toBeInTheDocument()
  })

  it('destroyStrategy=context 时，renderFactory 创建的弹窗在组件卸载不自动清理', async () => {
    const FactoryConsumer = () => {
      const { renderFactory } = useAsyncModalRenderContext()
      const factoryRef = React.useRef<ReturnType<typeof renderFactory> | null>(null)
      if (!factoryRef.current) {
        factoryRef.current = renderFactory(TestModal, { title: 'Ctx Factory' }, { destroyStrategy: 'context' })
      }
      return (
        <button data-testid="open-factory-context" onClick={() => factoryRef.current?.()}>
          Open Factory Context
        </button>
      )
    }

    const Wrapper = () => {
      const [showConsumer, setShowConsumer] = React.useState(true)
      return (
        <AsyncModalRenderProvider>
          <button data-testid="toggle-consumer" onClick={() => setShowConsumer((s) => !s)}>
            Toggle Consumer
          </button>
          {showConsumer && <FactoryConsumer />}
        </AsyncModalRenderProvider>
      )
    }

    await render(<Wrapper />)
    await page.getByTestId('open-factory-context').click()
    await expect.element(page.getByTestId('test-modal')).toBeInTheDocument()
    await page.getByTestId('toggle-consumer').click()
    await new Promise((resolve) => {
      setTimeout(resolve, 500)
    })
    await expect.element(page.getByTestId('test-modal')).toBeInTheDocument()
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
