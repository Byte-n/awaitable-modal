import React, { useState } from 'react';
import { useAsyncModalRender, AsyncModalProps } from 'async-modal-render';
import Modal from './Modal';

interface ExampleModalProps extends AsyncModalProps {
  title: string;
  content: string;
}

const ExampleModal: React.FC<ExampleModalProps> = ({ title, content, onOk, onCancel }) => {
  return (
    <Modal title={title} onOk={() => onOk?.('confirmed')} onCancel={onCancel}>
      <p>{content}</p>
    </Modal>
  );
};

export default () => {
  const [result, setResult] = useState<string>('');
  const { render, holder } = useAsyncModalRender();

  const handleClick = async () => {
    try {
      const res = await render(ExampleModal, {
        title: '提示',
        content: '这是一个使用 useAsyncModalRender 的示例',
      });
      setResult(`用户点击了确定: ${res}`);
    } catch (error) {
      setResult('用户点击了取消');
    }
  };

  return (
    <div>
      <button onClick={handleClick}>打开弹窗</button>
      {result && <div style={{ marginTop: 16 }}>结果: {result}</div>}
      {holder}
    </div>
  );
};
