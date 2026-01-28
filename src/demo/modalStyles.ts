import React from 'react';

// 遮罩层样式
export const maskStyle: React.CSSProperties = {
  position: 'fixed',
  top: 0,
  right: 0,
  bottom: 0,
  left: 0,
  zIndex: 1000,
  height: '100%',
  backgroundColor: 'rgba(0, 0, 0, 0.45)',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
};

// 弹窗容器基础样式 (width 需要动态合并)
export const modalBaseStyle: React.CSSProperties = {
  position: 'relative',
  maxWidth: 'calc(100vw - 32px)',
  backgroundColor: '#fff',
  borderRadius: '8px',
  boxShadow: '0 6px 16px 0 rgba(0, 0, 0, 0.08), 0 3px 6px -4px rgba(0, 0, 0, 0.12), 0 9px 28px 8px rgba(0, 0, 0, 0.05)',
  pointerEvents: 'auto',
  maxHeight: 'calc(100vh - 32px)',
  display: 'flex',
  flexDirection: 'column',
};

// 关闭按钮样式
export const closeStyle: React.CSSProperties = {
  position: 'absolute',
  top: '17px',
  right: '17px',
  zIndex: 10,
  padding: 0,
  color: 'rgba(0, 0, 0, 0.45)',
  fontWeight: 700,
  lineHeight: 1,
  textDecoration: 'none',
  background: 'transparent',
  border: 0,
  outline: 0,
  cursor: 'pointer',
  transition: 'color 0.3s',
  fontSize: '16px',
  width: '22px',
  height: '22px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
};

// 标题样式
export const headerStyle: React.CSSProperties = {
  padding: '16px 24px',
  color: 'rgba(0, 0, 0, 0.88)',
  background: 'transparent',
  borderRadius: '8px 8px 0 0',
  fontSize: '16px',
  fontWeight: 600,
  lineHeight: 1.5,
  wordWrap: 'break-word',
};

// 内容样式
export const bodyStyle: React.CSSProperties = {
  padding: '20px 24px',
  fontSize: '14px',
  lineHeight: 1.5714285714285714,
  color: 'rgba(0, 0, 0, 0.88)',
  flex: 1,
  overflowY: 'auto',
};

// 底部按钮区样式
export const footerStyle: React.CSSProperties = {
  padding: '10px 16px',
  textAlign: 'right',
  background: 'transparent',
  borderTop: '1px solid rgba(5, 5, 5, 0.06)',
  borderRadius: '0 0 8px 8px',
};

// 按钮基础样式
export const buttonStyle: React.CSSProperties = {
  lineHeight: 1.5714285714285714,
  position: 'relative',
  display: 'inline-block',
  fontWeight: 400,
  whiteSpace: 'nowrap',
  textAlign: 'center',
  cursor: 'pointer',
  transition: 'all 0.2s cubic-bezier(0.645, 0.045, 0.355, 1)',
  userSelect: 'none',
  touchAction: 'manipulation',
  height: '32px',
  padding: '4px 15px',
  fontSize: '14px',
  borderRadius: '6px',
  outline: 'none',
  border: '1px solid #d9d9d9',
  backgroundColor: '#fff',
  color: 'rgba(0, 0, 0, 0.88)',
};

export const primaryButtonStyle: React.CSSProperties = {
  ...buttonStyle,
  color: '#fff',
  backgroundColor: '#1677ff',
  borderColor: '#1677ff',
  boxShadow: '0 2px 0 rgba(5, 145, 255, 0.1)',
};
