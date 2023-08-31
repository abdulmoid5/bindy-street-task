import React from 'react';
import {useCheckable} from './hooks/useCheckable';
import {CheckboxProps} from './props';
import {CheckboxTemplate} from './templates/template';

export const Checkbox: React.FC<CheckboxProps> = props => {
  const {
    isChecked: _isChecked,
    type = 'checkbox',
    onChange: _onChange = () => null,
    ...rest
  } = props;

  const {isChecked, onChange} = useCheckable({
    isChecked: _isChecked,
    onChange: _onChange,
  });

  return (
    <CheckboxTemplate
      {...rest}
      type={type}
      isChecked={isChecked}
      onChange={onChange}
    />
  );
};
