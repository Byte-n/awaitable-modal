import { describe, expect, it } from 'vitest'
import React from 'react'
import ElementsHolder from '../src/components/ElementsHolder'
import type { ElementsHolderRef } from '../src/components/ElementsHolder'
import { page } from 'vitest/browser'
import { render } from 'vitest-browser-react'

const Box: React.FC<{ testId: string; title: string; open?: boolean }> = ({ testId, title, open = true }) => {
  const [count, setCount] = React.useState(0)
  return (
    <div data-testid={testId} style={{ display: open ? 'block' : 'none' }}>
      <span data-testid={`${testId}-title`}>{title}</span>
      <span data-testid={`${testId}-count`}>{count}</span>
      <button data-testid={`${testId}-inc`} onClick={() => setCount((c) => c + 1)}>
        inc
      </button>
    </div>
  )
}

describe('ElementsHolder', () => {
  it('patchElement 同 persistent key 更新时应保持 React key 不变以保留状态', async () => {
    const App = () => {
      const ref = React.useRef<ElementsHolderRef>(null)
      return (
        <div>
          <button
            data-testid="add"
            onClick={() => ref.current?.patchElement(<Box testId="p-box" title="A" open />, Box, 'p', 'open')}
          >
            Add
          </button>
          <button
            data-testid="patch"
            onClick={() => ref.current?.patchElement(<Box testId="p-box" title="B" open />, Box, 'p', 'open')}
          >
            Patch
          </button>
          <ElementsHolder ref={ref} />
        </div>
      )
    }

    await render(<App />)

    await page.getByTestId('add').click()
    await page.getByTestId('p-box-inc').click()
    await expect.element(page.getByTestId('p-box-count')).toHaveTextContent('1')

    await page.getByTestId('patch').click()
    await expect.element(page.getByTestId('p-box-title')).toHaveTextContent('B')
    await expect.element(page.getByTestId('p-box-count')).toHaveTextContent('1')
  })

  it('visibility=visible 时仅删除可见持久化元素', async () => {
    const App = () => {
      const ref = React.useRef<ElementsHolderRef>(null)
      return (
        <div>
          <button
            data-testid="setup"
            onClick={() => {
              ref.current?.patchElement(<Box testId="visible-box" title="Visible" open />, Box, 'v', 'open')
              ref.current?.patchElement(<Box testId="hidden-box" title="Hidden" open={false} />, Box, 'h', 'open')
            }}
          >
            Setup
          </button>
          <button data-testid="remove-visible" onClick={() => ref.current?.removeElement({ visibility: 'visible' })}>
            Remove Visible
          </button>
          <ElementsHolder ref={ref} />
        </div>
      )
    }

    await render(<App />)
    await page.getByTestId('setup').click()
    await expect.element(page.getByTestId('visible-box')).toBeVisible()
    await expect.element(page.getByTestId('hidden-box')).toBeInTheDocument()
    await expect.element(page.getByTestId('hidden-box')).not.toBeVisible()

    await page.getByTestId('remove-visible').click()
    await expect.element(page.getByTestId('visible-box')).not.toBeInTheDocument()
    await expect.element(page.getByTestId('hidden-box')).toBeInTheDocument()
  })

  it('visibility=hidden 时仅删除隐藏持久化元素', async () => {
    const App = () => {
      const ref = React.useRef<ElementsHolderRef>(null)
      return (
        <div>
          <button
            data-testid="setup"
            onClick={() => {
              ref.current?.patchElement(<Box testId="visible-box" title="Visible" open />, Box, 'v', 'open')
              ref.current?.patchElement(<Box testId="hidden-box" title="Hidden" open={false} />, Box, 'h', 'open')
            }}
          >
            Setup
          </button>
          <button data-testid="remove-hidden" onClick={() => ref.current?.removeElement({ visibility: 'hidden' })}>
            Remove Hidden
          </button>
          <ElementsHolder ref={ref} />
        </div>
      )
    }

    await render(<App />)
    await page.getByTestId('setup').click()
    await expect.element(page.getByTestId('visible-box')).toBeVisible()
    await expect.element(page.getByTestId('hidden-box')).toBeInTheDocument()

    await page.getByTestId('remove-hidden').click()
    await expect.element(page.getByTestId('hidden-box')).not.toBeInTheDocument()
    await expect.element(page.getByTestId('visible-box')).toBeInTheDocument()
  })

  it('visibility 过滤但 openField 缺失时默认不删除', async () => {
    const App = () => {
      const ref = React.useRef<ElementsHolderRef>(null)
      return (
        <div>
          <button
            data-testid="setup"
            onClick={() => ref.current?.patchElement(<Box testId="no-open-field" title="No OpenField" open />, Box, 'n')}
          >
            Setup
          </button>
          <button data-testid="remove-visible" onClick={() => ref.current?.removeElement({ visibility: 'visible', persistent: 'n' })}>
            Remove Visible
          </button>
          <ElementsHolder ref={ref} />
        </div>
      )
    }

    await render(<App />)
    await page.getByTestId('setup').click()
    await expect.element(page.getByTestId('no-open-field')).toBeInTheDocument()
    await page.getByTestId('remove-visible').click()
    await expect.element(page.getByTestId('no-open-field')).toBeInTheDocument()
  })
})

