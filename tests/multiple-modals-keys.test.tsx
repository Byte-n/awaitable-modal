import { describe, it, expect, vi, afterEach } from 'vitest'
import React, { useEffect } from 'react'
import { useAsyncModalRender, type AsyncModalProps } from '../dist'
import { page } from 'vitest/browser'
import { render } from 'vitest-browser-react'

interface TestModalProps extends AsyncModalProps {
  id: number
}

const TestModal: React.FC<TestModalProps> = ({ id, onOk }) => {
  return (
    <div data-testid={`test-modal-${id}`}>
      Modal {id}
      <button onClick={() => onOk?.()}>Close</button>
    </div>
  )
}

const MultipleModalsApp = ({ count = 3 }: { count?: number }) => {
  const { render, holder } = useAsyncModalRender()

  useEffect(() => {
    for (let i = 0; i < count; i++) {
      render(TestModal, { id: i })
    }
  }, [count, render])

  return (
    <div>
      {holder}
    </div>
  )
}

describe('Multiple Modals Keys', () => {
  afterEach(() => {
    vi.restoreAllMocks()
  })

  it('rendering multiple modals simultaneously should not cause duplicate key warnings', async () => {
    const consoleErrorSpy = vi.spyOn(console, 'error').mockImplementation(() => {})
    const consoleWarnSpy = vi.spyOn(console, 'warn').mockImplementation(() => {})

    await render(<MultipleModalsApp count={3} />)

    // Verify all modals are present
    await expect.element(page.getByTestId('test-modal-0')).toBeInTheDocument()
    await expect.element(page.getByTestId('test-modal-1')).toBeInTheDocument()
    await expect.element(page.getByTestId('test-modal-2')).toBeInTheDocument()

    // Check for key warnings
    const calls = [
      ...consoleErrorSpy.mock.calls,
      ...consoleWarnSpy.mock.calls
    ]
    
    const keyWarnings = calls.filter(args => {
      const msg = args[0]
      return typeof msg === 'string' && (
        msg.includes('unique "key" prop') || 
        msg.includes('Encountered two children with the same key')
      )
    })

    expect(keyWarnings).toHaveLength(0)
  })

})
