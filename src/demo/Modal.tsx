import React from 'react';
import { AsyncModalProps } from 'async-modal-render';
import {
  maskStyle,
  modalBaseStyle,
  closeStyle,
  headerStyle,
  bodyStyle,
  footerStyle,
  buttonStyle,
  primaryButtonStyle,
} from './modalStyles';

export interface ModalProps extends AsyncModalProps {
  open?: boolean;
  title?: React.ReactNode;
  children?: React.ReactNode;
  okText?: string;
  cancelText?: string;
  width?: number | string;
  footer?: React.ReactNode | null;
  closable?: boolean;
  maskClosable?: boolean;
}

const Modal: React.FC<ModalProps> = ({
  open = true,
  title = '提示',
  children,
  okText = '确定',
  cancelText = '取消',
  width = 520,
  footer,
  closable = true,
  maskClosable = true,
  onOk,
  onCancel,
}) => {
  if (!open) {
    return null;
  }
  const handleMaskClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (maskClosable && e.target === e.currentTarget) {
      onCancel?.();
    }
  };

  const handleOk = () => {
    onOk?.();
  };

  const handleCancel = () => {
    onCancel?.();
  };

  // 动态合并样式
  const modalStyle: React.CSSProperties = {
    ...modalBaseStyle,
    width: typeof width === 'number' ? `${width}px` : width,
  };

  return (
    <div style={maskStyle} onClick={handleMaskClick}>
      <div style={modalStyle} onClick={(e) => e.stopPropagation()}>
        {closable && (
          <button
            style={closeStyle}
            onClick={handleCancel}
            onMouseEnter={(e) => {
              e.currentTarget.style.color = 'rgba(0, 0, 0, 0.88)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.color = 'rgba(0, 0, 0, 0.45)';
            }}
          >
            <span style={{ fontSize: '14px' }}>✕</span>
          </button>
        )}
        {title && <div style={headerStyle}>{title}</div>}
        <div style={bodyStyle}>{children}</div>
        <ModalFooter
          footer={footer}
          okText={okText}
          cancelText={cancelText}
          onOk={handleOk}
          onCancel={handleCancel}
        />
      </div>
    </div>
  );
};

export default Modal;

interface ModalFooterProps {
  footer?: React.ReactNode | null;
  okText?: string;
  cancelText?: string;
  onOk: () => void;
  onCancel: () => void;
}

function ModalFooter({
  footer,
  okText,
  cancelText,
  onOk,
  onCancel,
}: ModalFooterProps) {
  if (footer === null) {
    return null;
  }

  if (footer !== undefined) {
    return <div style={footerStyle}>{footer}</div>;
  }

  return (
    <div style={footerStyle}>
      <button
        style={buttonStyle}
        onClick={onCancel}
        onMouseEnter={(e) => {
          e.currentTarget.style.color = '#4096ff';
          e.currentTarget.style.borderColor = '#4096ff';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.color = 'rgba(0, 0, 0, 0.88)';
          e.currentTarget.style.borderColor = '#d9d9d9';
        }}
      >
        {cancelText}
      </button>
      <button
        style={{ ...primaryButtonStyle, marginLeft: '8px' }}
        onClick={onOk}
        onMouseEnter={(e) => {
          e.currentTarget.style.backgroundColor = '#4096ff';
          e.currentTarget.style.borderColor = '#4096ff';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.backgroundColor = '#1677ff';
          e.currentTarget.style.borderColor = '#1677ff';
        }}
      >
        {okText}
      </button>
    </div>
  );
}
