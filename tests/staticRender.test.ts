import { beforeEach, describe, expect, it, vi } from 'vitest'
import React from 'react'

const state = vi.hoisted(() => {
  const root = {
    render: vi.fn(),
    unmount: vi.fn(),
  }
  return {
    mode: 'createRoot' as 'createRoot' | 'render' | 'none',
    root,
    createRootSpy: vi.fn(() => root),
    reactDomRenderSpy: vi.fn(),
    unmountComponentAtNodeSpy: vi.fn(),
  }
})

vi.mock('react-dom', () => ({
  get render() {
    return state.mode === 'render' ? state.reactDomRenderSpy : undefined
  },
  get unmountComponentAtNode() {
    return state.mode === 'render' ? state.unmountComponentAtNodeSpy : undefined
  },
  get version () {
    return state.mode === 'render' ? '18.0.0' : '19.0.0'
  }
}))

vi.mock('react-dom/client', () => ({
  get createRoot() {
    return state.mode === 'createRoot' ? state.createRootSpy : undefined
  },
}))

import { staticRender } from '../src/utils/staticRender'

describe('staticRender', () => {
  beforeEach(() => {
    state.root.render.mockReset()
    state.root.unmount.mockReset()
    state.createRootSpy.mockClear()
    state.reactDomRenderSpy.mockReset()
    state.unmountComponentAtNodeSpy.mockReset()
  })

  it('createRoot 存在时应挂载并复用 root，且卸载时清理 __reactCompatRoot', async () => {
    state.mode = 'createRoot'
    const container = document.createElement('div') as any
    const elementA = React.createElement('div', { 'data-testid': 'a' })

    const unmountA = await staticRender(elementA, container)
    expect(state.createRootSpy).toHaveBeenCalledTimes(1)
    expect(state.createRootSpy).toHaveBeenCalledWith(container)
    expect(state.root.render).toHaveBeenCalledTimes(1)
    expect(container.__reactCompatRoot).toBeTruthy()

    const elementB = React.createElement('div', { 'data-testid': 'b' })
    const unmountB = await staticRender(elementB, container)
    expect(state.createRootSpy).toHaveBeenCalledTimes(1)
    expect(state.root.render).toHaveBeenCalledTimes(2)
    expect(container.__reactCompatRoot).toBeTruthy()

    unmountB()
    expect(state.root.unmount).toHaveBeenCalledTimes(1)
    expect(container.__reactCompatRoot).toBeUndefined()

    unmountA()
    expect(state.root.unmount).toHaveBeenCalledTimes(1)
  })

  it('createRoot 不存在且 render 存在时走 ReactDOM.render / unmountComponentAtNode 路径', async () => {
    state.mode = 'render'
    const container = document.createElement('div')
    const element = React.createElement('div')
    const unmount = await staticRender(element, container)

    expect(state.reactDomRenderSpy).toHaveBeenCalledTimes(1)
    expect(state.reactDomRenderSpy).toHaveBeenCalledWith(element, container)

    unmount()
    expect(state.unmountComponentAtNodeSpy).toHaveBeenCalledTimes(1)
    expect(state.unmountComponentAtNodeSpy).toHaveBeenCalledWith(container)
  })

  it('既不支持 createRoot 也不支持 render 时应抛错', () => {
    state.mode = 'none'
    const container = document.createElement('div')
    const element = React.createElement('div')

    expect(staticRender(element, container)).rejects.toThrow()
  })
})
