# VS

通过对比 `Normal` (传统 React 状态管理) 和 `NiceModal`(@ebay/nice-modal-react) 库，以下是 `async-modal-render` 的主要优势总结。

## 1. 无需繁琐的状态管理 (vs Normal)

**Normal (传统方式):**
需要定义大量的 `useState`，编写开关处理函数，并且必须在 JSX 中显式挂载组件。

```tsx | pure
// Normal.tsx 伪代码
function NormalExample() {
  const [visible, setVisible] = useState(false);

  const handleOpen = () => setVisible(true);
  const handleOk = () => setVisible(false);

  return (
    <>
      <Button onClick={handleOpen}>Open Modal</Button>
      {/* 必须在 JSX 中预埋组件 */}
      <MyModal
        visible={visible}
        onOk={handleOk}
        onCancel={() => setVisible(false)}
      />
    </>
  );
}
```

**Async Modal Render:**
完全不需要定义 State，也不需要在 JSX 中预埋组件。

```tsx | pure
// AsyncModalExample.tsx 伪代码
function AsyncExample() {
  const { render } = useAsyncModalRenderContext();

  const handleOpen = async () => {
    // 直接函数式调用，自动挂载和销毁
    await render(MyModal, { visible: true });
  };

  return <Button onClick={handleOpen}>Open Modal</Button>;
}
```

## 2. 无需创建包装组件 (vs NiceModal)

**NiceModal:**
为了使用现有的弹窗组件，必须先使用 `NiceModal.create` 创建一个包装器 (Wrapper) 来处理 `useModal` 的 resolve/reject 逻辑。

```tsx | pure
// NiceModalExample.tsx 伪代码
// 必须定义额外的 Wrapper
const MyModalWrapper = NiceModal.create(() => {
  const modal = useModal();
  return (
    <MyModal
      visible={modal.visible}
      onOk={() => {
        modal.resolve(); // 手动处理 Promise
        modal.remove();  // 手动清理
      }}
    />
  );
});

// 调用时
NiceModal.show(MyModalWrapper);
```

**Async Modal Render:**
可以直接使用原始组件，零侵入性。如果 Props 命名不标准，可以使用 `withAsyncModalPropsMapper` 在行内动态映射，无需额外文件或组件定义。

```tsx | pure
// AsyncModalExample.tsx 伪代码
// 场景 1: 直接使用
await render(MyModal, { visible: true });

// 场景 2: 行内动态映射 Props (无需 Wrapper)
await render(
  withAsyncModalPropsMapper(MyCustomModal, ['onConfirm', 'onClose']),
  { open: true }
);
```

## 3. 基于 Promise 的线性逻辑流程

逻辑更加连贯，符合直觉，避免了逻辑分散在 `onClick` 和 `onOk` 等多个回调函数中。

```tsx | pure
const handleSubmit = async () => {
  try {
    // 1. 打开弹窗并等待用户操作
    const inputValue = await render(InputModal, { visible: true });
    
    // 2. 获取结果后直接进行后续处理 (仅在用户确认后执行)
    await submitToApi(inputValue);
    message.success('操作成功');
    
  } catch {
    // 3. 处理用户取消的情况
    message.info('用户已取消');
  }
};
```

## 4. 完善的 TypeScript 类型支持

`async-modal-render` 提供了优秀的 TypeScript 类型推导能力，能够自动识别组件 Props 和返回值类型，提供开发时的智能提示和类型安全保障。

- **入参类型约束**：调用 `render` 时，会自动检查传入的 `props` 是否符合组件定义的 Props 类型。
- **返回值类型推导**：`await render(...)` 的返回值类型会自动推导为组件回调函数（如 `onOk`, `onConfirm`）的参数类型。

```tsx | pure
// 定义组件 Props
interface MyModalProps {
  title: string;
  onConfirm: (result: { id: number; name: string }) => void;
  onCancel: () => void;
  visible: boolean;
}

// 调用示例
const result = await render(
  MyModal,
  {
    title: 'Type Check', // ✅ 类型检查：必须是 string
    // otherProp: 123    // ❌ 报错：属性不存在
    visible: true
  }
);

// ✅ 自动推导 result 类型为: { id: number; name: string }
console.log(result.name); 
```
