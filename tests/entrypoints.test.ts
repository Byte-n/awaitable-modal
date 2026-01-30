import { describe, it, expect } from 'vitest'
import * as entry from '../src/index'

describe('entrypoints', () => {
  it('index.ts 应导出核心 API', () => {
    expect(entry.asyncModalRender).toBeTypeOf('function')
    expect(entry.useAsyncModalRender).toBeTypeOf('function')
    expect(entry.AsyncModalRenderProvider).toBeTruthy()
    expect(entry.useAsyncModalRenderContext).toBeTypeOf('function')
    expect(entry.AsyncModalRenderCancelError).toBeTypeOf('function')
    expect(entry.PersistentComponentConflictError).toBeTypeOf('function')
    expect(entry.withAsyncModalPropsMapper).toBeTypeOf('function')
  })

  it('types.ts 应可被运行时导入', async () => {
    const mod = await import('../src/types')
    expect(mod).toBeTruthy()
  })
})
