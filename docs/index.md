# async-modal-render

一个将 React 模态框操作 Promise 化的轻量级工具库，让你可以使用 `async/await` 语法优雅地处理模态框交互。

## 为什么需要 async-modal-render？

### 传统 Modal 的痛点

在传统的 Modal 使用方式中，我们需要通过回调函数来处理用户的操作，这导致代码逻辑分散，难以维护：

```tsx ｜ pure
// ❌ 传统方式：代码逻辑分散，难以阅读
function TraditionalWay() {
  const [visible, setVisible] = useState(false);

  // 点击按钮的逻辑
  const handleClick = () => {
    setVisible(true);
  };

  // 确认的回调逻辑 - 分散在另一个地方
  const handleOk = async (formData) => {
    try {
      // 继续后续操作...
    } catch (error) {
      message.error('提交失败');
    } finally {
      setVisible(false);
    }
  };

  // 取消的回调逻辑 - 又在另一个地方
  const handleCancel = () => {
    setVisible(false);
    // 取消后的处理...
  };

  return (
    <>
      <Button onClick={handleClick}>打开弹窗</Button>
      <Modal
        visible={visible}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <Form />
      </Modal>
    </>
  );
}
```

### async-modal-render 的优势

使用 async-modal-render，代码逻辑集中在一处，清晰易懂：

```tsx ｜ pure
import { asyncModalRender } from 'async-modal-render'

// ✅ async-modal-render 方式：逻辑集中，代码清晰
function AsyncModalWay () {
  const handleClick = async () => {
    try {
      // 弹窗逻辑、确认逻辑、后续处理都在一起, FormModal 中需要提供 onOk\onCancel 回调处理
      const formData = await asyncModalRender(FormModal, { title: '填写表单' })

      // 用户点击确认后才会执行到这里
      await api.submit(formData)
      message.success('提交成功')

      // 继续后续操作

    } catch (error) {
      // 用户点击取消或发生错误都会进入这里
      if (error instanceof AsyncModalRenderCancelError) {
        console.log('用户取消了操作')
      } else {
        message.error('提交失败')
      }
    }
  }

  return <Button onClick={handleClick}>打开弹窗</Button>;
}
```

### 对比总结

| 特性 | 传统 Modal | async-modal-render |
|------|-----------|-------------|
| 代码组织 | 回调函数分散在多处 | async/await 集中处理 |
| 可读性 | 需要跳转查看不同回调 | 从上到下线性阅读 |
| 流程控制 | 需要状态管理 | Promise 自然流转 |
| 错误处理 | 分散在各个回调 | try/catch 统一处理 |
| 异步操作 | 回调嵌套 | async/await 扁平化 |

