import React, { useState } from 'react';
import { AsyncModalRenderProvider, useAsyncModalRenderContext, withAsyncModalPropsMapper } from 'async-modal-render';
import InputModal from './InputModal';
import CustomModal from './CustomModal';

// 适配 CustomModal
const AdaptedCustomModal = withAsyncModalPropsMapper(CustomModal, ['onSubmit', 'onClose']);

const ChildComponent = () => {
  const [result, setResult] = useState<string>('');
  const { render } = useAsyncModalRenderContext();

  const handleInputClick = async () => {
    try {
      const res = await render(InputModal, {
        title: 'Context 模式输入',
        placeholder: '请输入...',
      });
      setResult(`输入弹窗 - 结果: ${res}`);
    } catch (error) {
      setResult('输入弹窗 - 取消');
    }
  };

  const handleCustomClick = async () => {
    try {
      const res = await render(AdaptedCustomModal, {
        header: 'Context 模式适配弹窗',
      });
      setResult(`适配弹窗 - 结果: ${res}`);
    } catch (error) {
      setResult('适配弹窗 - 取消');
    }
  };

  return (
    <div>
      <div style={{ marginBottom: 16 }}>
        <button onClick={handleInputClick} style={{ marginRight: 8 }}>输入弹窗</button>
        <button onClick={handleCustomClick}>非标准弹窗(适配)</button>
      </div>
      {result && <div>操作结果: {result}</div>}
    </div>
  );
};

export default () => {
  return (
    <AsyncModalRenderProvider>
      <ChildComponent />
    </AsyncModalRenderProvider>
  );
};
