import React, { ComponentType } from 'react';

/**
 * AsyncModalProps 映射高阶组件
 */
export function withAsyncModalPropsMapper<A extends object, OnOk extends keyof A, OnCancel extends keyof A>(
  Comp: ComponentType<A>,
  keys: [OnOk, OnCancel],
): ComponentType<Pick<A, Exclude<keyof A, OnOk | OnCancel>> & { onCancel: A[OnCancel]; onOk: A[OnOk] }> {
  return (props) => {
    const { onOk, onCancel, ..._newProps } = props;
    const newProps = _newProps as A;
    const [onOkKey, onCancelKey] = keys;
    newProps[onOkKey] = onOk;
    newProps[onCancelKey] = onCancel;
    return <Comp {...newProps} />;
  };
}
