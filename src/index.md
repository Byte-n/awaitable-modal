# async-modal-render

以 Promise 的方式使用弹窗组件，支持多种使用方式，简化弹窗的异步交互逻辑。

## 代码演示

### 基础使用 - asyncModalRender

使用 `asyncModalRender` 函数直接渲染弹窗组件到指定容器。

<code src="./demo/basic.tsx"></code>

### Hook 使用 - useAsyncModalRender

使用 `useAsyncModalRender` Hook 在组件内管理弹窗。

<code src="./demo/useAsyncModal.tsx"></code>

### Context 使用 - AsyncModalRenderProvider

使用 `AsyncModalRenderProvider` 和 `useAsyncModalRenderContext` 在应用中共享弹窗渲染能力。

<code src="./demo/context.tsx"></code>

## API

### asyncModalRender

直接将组件渲染到指定容器元素下。

```typescript
function asyncModalRender<D extends AsyncModalProps> (
  Comp: React.ComponentType<D>,
  props: Omit<D, keyof AsyncModalProps> & Pick<D, keyof AsyncModalProps>,
  container?: Element
): Promise<D['onOk'] extends (v: infer R) => void ? R : never>
```

**参数：**

| 参数        | 类型                       | 默认值             | 说明                        |
|-----------|--------------------------|-----------------|---------------------------|
| Comp      | `React.ComponentType<D>` | -               | 需要渲染的组件                   |
| props     | `D`                      | -               | 组件的属性（包含 onOk 和 onCancel） |
| container | `Element`                | `document.body` | 挂载的容器元素                   |


### useAsyncModalRender

在组件内使用的 Hook，返回弹窗渲染相关的方法和元素。

```typescript
function useAsyncModalRender (): UseAsyncModalReturn

interface UseAsyncModalReturn {
  render: AsyncModalRender;
  holder: React.ReactElement;
  renderFactory: AsyncModalRenderFactory;
}
```

**返回值：**

| 属性            | 类型                        | 说明                    |
|---------------|---------------------------|-----------------------|
| render        | `AsyncModalRender`        | 渲染函数，用于渲染弹窗组件         |
| holder        | `React.ReactElement`      | 弹窗容器元素，需要放置在组件的 JSX 中 |
| renderFactory | `AsyncModalRenderFactory` | 渲染工厂函数，用于创建 render 函数 |

### AsyncModalRenderProvider

提供 asyncModalRender 上下文的 Provider 组件，用于在应用中共享弹窗渲染能力。

```typescript
function AsyncModalRenderProvider ({ children }: { children: React.ReactNode }): React.ReactElement
```

### useAsyncModalRenderContext

获取 AsyncModalContext 上下文的 Hook，必须在 AsyncModalRenderProvider 内部使用。

```typescript
function useAsyncModalRenderContext (): AsyncModalContextType

interface AsyncModalContextType {
  render: AsyncModalRender;
  renderFactory: AsyncModalRenderFactory;
}
```

**返回值：**

| 属性            | 类型                        | 说明                    |
|---------------|---------------------------|-----------------------|
| render        | `AsyncModalRender`        | 渲染函数，用于渲染弹窗组件         |
| renderFactory | `AsyncModalRenderFactory` | 渲染工厂函数，用于创建 render 函数 |

### AsyncModalProps

弹窗组件需要继承的基础属性接口。

```typescript
interface AsyncModalProps {
  onOk?: (...args: any[]) => void;
  onCancel?: (error?: any) => void;
}
```

**属性：**

| 属性       | 类型                         | 说明        |
|----------|----------------------------|-----------|
| onOk     | `(...args: any[]) => void` | 点击确定的回调函数 |
| onCancel | `(error?: any) => void`    | 点击取消的回调函数 |

### AsyncModalRenderCancelError

用户取消操作时抛出的错误类。

```typescript
interface AsyncModalRenderCancelError extends Error {
  constructor ();
}
```

当用户点击取消按钮且 `onCancel` 被调用时没有传入错误参数，Promise 会 reject 一个 `AsyncModalRenderCancelError` 实例。


## 注意事项

1. 自定义弹窗组件必须继承 `AsyncModalProps` 接口
2. 弹窗组件需要在适当的时机调用 `onOk` 或 `onCancel` 方法
3. 使用 `useAsyncModalRender` 时，必须将 `holder` 元素放置在组件的 JSX 中
4. 使用 `useAsyncModalRenderContext` 时，必须确保组件在 `AsyncModalRenderProvider` 内部
5. 只允许从公开的模块声明中导入，例如：`import { asyncModalRender } from 'async-modal-render'`
