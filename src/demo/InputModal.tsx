import React, { useState } from 'react';
import { AsyncModalProps } from 'async-modal-render';
import Modal from './Modal';

export interface InputModalProps extends AsyncModalProps {
  title?: string;
  placeholder?: string;
  defaultValue?: string;
}

const InputModal: React.FC<InputModalProps> = ({
  title = '请输入',
  placeholder = '请输入内容',
  defaultValue = '',
  onOk,
  onCancel,
}) => {
  const [value, setValue] = useState(defaultValue);

  return (
    <Modal
      title={title}
      onOk={() => onOk?.(value)}
      onCancel={onCancel}
    >
      <input
        style={{
          width: '100%',
          padding: '4px 11px',
          borderRadius: '4px',
          border: '1px solid #d9d9d9',
          outline: 'none',
        }}
        placeholder={placeholder}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        autoFocus
      />
    </Modal>
  );
};

export default InputModal;
