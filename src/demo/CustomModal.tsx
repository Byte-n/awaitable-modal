import React, { useState } from 'react';
import Modal from './Modal';

// 完全自定义的 Props，不符合 AsyncModalProps 规范
export interface CustomModalProps {
  // 控制显隐的属性名不同
  visible?: boolean;
  // 标题属性名不同
  header?: string;
  // 回调函数名不同
  onSubmit?: (value: string) => void;
  onClose?: () => void;
}

const CustomModal: React.FC<CustomModalProps> = ({
  visible = true,
  header = '自定义弹窗',
  onSubmit,
  onClose,
}) => {
  const [value, setValue] = useState('');

  return (
    <Modal
      open={visible}
      title={header}
      onOk={() => onSubmit?.(value)}
      onCancel={onClose}
      okText="提交"
      cancelText="关闭"
    >
      <div style={{ marginBottom: 8 }}>这是一个非标准 Props 的弹窗</div>
      <input
        style={{
          width: '100%',
          padding: '4px 11px',
          borderRadius: '4px',
          border: '1px solid #d9d9d9',
          outline: 'none',
        }}
        placeholder="请输入..."
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
    </Modal>
  );
};

export default CustomModal;
