# VS

`async-modal-render` 结合了函数式调用的便利性和对现有组件的低侵入性，在开发效率、代码质量和维护性上都有显著优势。

## 优势概览

> NiceModal 指的是：@ebay/nice-modal-react

| 特性        | Normal (传统方式)     | NiceModal        | Async Modal Render       |
|:----------|:------------------|:-----------------|:-------------------------|
| **状态管理**  | 手动 (useState)     | 内部 Hook          | **自动 (无需 State)**        |
| **组件挂载**  | JSX 显式挂载          | 需要 Wrapper 注册    | **函数调用自动挂载**             |
| **逻辑流程**  | 分散 (onClick/onOk) | 基于 Promise       | **基于 Promise 的线性流**      |
| **组件侵入性** | 低                 | 高 (需引入 useModal) | **零 (纯净组件)**             |
| **类型支持**  | 手动定义              | 部分支持             | **全自动推导 (Props/Result)** |
| **生命周期**  | 手动控制              | 需手动 remove       | **自动销毁 / 按需持久化**         |
| **代码量**   | 繁琐                | 中等               | **最简**                   |

---

## 1. 对比 Normal (传统 React 状态管理)

### 1.1 无需繁琐的状态管理

**Normal:** 需要定义大量的 `useState`，编写开关处理函数，并且必须在 JSX 中显式挂载组件。
**Async Modal Render:** 完全不需要定义 State，也不需要在 JSX 中预埋组件。

**代码对比:**

```tsx | pure
// Normal.tsx (传统方式)
function NormalExample() {
  const [visible, setVisible] = useState(false); // ❌ 冗余状态

  return (
    <>
      <Button onClick={() => setVisible(true)}>Open</Button>
      {/* ❌ JSX 污染 */}
      <MyModal
        visible={visible}
        onOk={() => setVisible(false)}
        onCancel={() => setVisible(false)}
      />
    </>
  );
}

// AsyncModalExample.tsx (Async Modal Render)
function AsyncExample() {
  const { render } = useAsyncModalRenderContext();
  // ✅ 纯函数调用，无状态，无 JSX 挂载
  return <Button onClick={() => render(MyModal, { visible: true })}>Open</Button>;
}
```

### 1.2 基于 Promise 的线性逻辑流程

**Normal:** 业务逻辑被分散在 `onClick`（打开）、`onOk`（确认）、`onCancel`（取消）等多个回调函数中，导致代码割裂，阅读困难。
**Async Modal Render:** 使用 `await` 在一个函数内完成“打开 -> 等待操作 -> 获取结果”的完整流程，逻辑连贯。

```tsx | pure
// Async Modal Render: 线性逻辑
const handleSubmit = async () => {
  try {
    const inputValue = await render(InputModal, { visible: true });
    // ✅ 逻辑紧凑：获取结果后直接继续执行
    await submitToApi(inputValue);
    message.success('操作成功');
  } catch {
    message.info('用户已取消');
  }
};
```

---

## 2. 对比 NiceModal

### 2.1 无需创建包装组件 (Wrapper)

**NiceModal:** 为了使用现有的弹窗组件，必须先使用 `NiceModal.create` 创建一个包装器 (Wrapper) 来处理 `useModal` 的
resolve/reject 逻辑。
**Async Modal Render:** 可以直接使用原始组件，零侵入性。如果 Props 命名不标准，可以使用 `withAsyncModalPropsMapper`
在行内动态映射，无需额外文件或组件定义。

```tsx | pure
// NiceModal: ❌ 必须定义 Wrapper
const MyModalWrapper = NiceModal.create(() => {
  const modal = useModal(); // 耦合
  return <MyModal visible={modal.visible} onOk={modal.resolve}/>;
});

// Async Modal Render: ✅ 直接使用，或行内映射
await render(
  withAsyncModalPropsMapper(MyCustomModal, ['onConfirm', 'onClose']),
  { open: true }
);
```

### 2.2 组件解耦与零依赖 (Decoupling)

**NiceModal:** UI 组件内部必须引入 `nice-modal-react` 库，并使用 `useModal` Hook。这使得 UI 组件与特定库耦合，难以复用。
**Async Modal Render:** UI 组件完全不需要引入 `async-modal-render`。它只是一个普通的 React 组件，通过 Props
接收回调。库的逻辑完全封装在调用层。

### 2.3 自动生命周期管理 (Auto Lifecycle)

**NiceModal:** 默认行为是“保留”。关闭弹窗后，DOM 节点仍然存在，必须显式调用 `modal.remove()` 才能销毁。容易造成内存泄漏。
**Async Modal Render:** 默认行为是“销毁”。`render` Promise 结束后，库会自动卸载组件并清理 DOM。天然杜绝内存泄漏。

### 2.4 更安全的默认行为 (Safe Defaults)

**NiceModal:** 默认不销毁导致状态残留，需要手动重置。
**Async Modal Render:** 默认销毁保证了每次打开都是全新的状态 (Reset)。同时提供了显式的持久化选项 (`persistent` key)
，控制权更精准。

---

### 2.5 完善的 TypeScript 类型支持

`async-modal-render` 提供了优秀的 TypeScript 类型推导能力。

- **入参类型约束**：自动检查传入的 `props` 是否符合组件定义。
- **返回值类型推导**：`await render(...)` 的返回值类型会自动推导为组件回调函数的参数类型。

```tsx | pure
// ✅ 自动推导 result 类型，无需手动泛型
const result = await render(
  MyModal,
  { visible: true },
  {
    // 指定一个固定的 key 实现持久化
    persistent: 'my-unique-modal',
    // 只能填写 boolean 类型的 key
    openField: 'open'
  }
);
console.log(result.data); // IDE 智能提示可用
```
