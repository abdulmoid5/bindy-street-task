import * as React from 'react';
import {ColorValue} from 'react-native';
import {BaseToast, BaseToastProps} from 'react-native-toast-message';
import {getFont} from './getFont';

export const ToastConfig = {
  /*
   Overwrite 'success' type,
   by modifying the existing `BaseToast` component
 */
  success: ({text1, ...rest}: BaseToastProps) => {
    if (!rest.text2) return;
    return <Base text1={text1} {...rest} leftColor={'#82DD55'} />;
  },
  /*
   Overwrite 'error' type,
   by modifying the existing `ErrorToast` component
 */
  error: ({text1, ...rest}: BaseToastProps) => {
    if (!rest.text2) return;
    return <Base text1={text1} {...rest} leftColor={'#E23636'} />;
  },
  /*
  Overwrite 'Info' type,
  by modifying the existing `BaseToast` component
*/
  info: ({text1, ...rest}: BaseToastProps) => {
    if (!rest.text2) return;
    return <Base text1={text1} {...rest} leftColor={'#4A90E2'} />;
  },
  /*
 Overwrite 'warning' type,
 by modifying the existing `BaseToast` component
*/
  warning: ({text1, ...rest}: BaseToastProps) => {
    if (!rest.text2) return;
    return <Base text1={text1} {...rest} leftColor={'#EDB95E'} />;
  },
};

interface CustomBaseInterface extends BaseToastProps {
  leftColor?: ColorValue | string;
}
const defaultProps = {
  leftColor: 'green',
};
const Base = (props: CustomBaseInterface) => {
  const font = getFont();
  return (
    <BaseToast
      {...props}
      text1NumberOfLines={10}
      text2NumberOfLines={5}
      text1Style={{
        fontWeight: '500',
        fontSize: 14,
        fontFamily: font.regular,
      }}
      text2Style={{
        color: '#272727',
        fontSize: 14,
        fontFamily: font.medium,
      }}
      style={{borderLeftColor: props.leftColor}}
    />
  );
};
Base.defaultProps = defaultProps;
