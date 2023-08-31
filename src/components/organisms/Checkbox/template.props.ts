import {CheckboxProps} from './props';

export type CheckboxTemplateProps = Omit<CheckboxProps, 'onChange'> & {
  /*
   * Handles change of the checkbox state
   */
  onChange(): void;
};
