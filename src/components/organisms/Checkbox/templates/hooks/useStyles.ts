import {StyleProp, ViewStyle} from 'react-native';
import {useAnimation} from 'react-native-animation-hooks';
import {useTheme} from '~/hooks/useTheme';

type UseStylesProps = {
  isChecked?: boolean;
  isDisabled?: boolean;
};

export const useStyles = (props: UseStylesProps) => {
  const theme = useTheme();

  const animatedRadioSize = useAnimation({
    type: 'timing',
    initialValue: 0,
    toValue: props.isChecked ? 1 : 0,
    duration: 150,
    useNativeDriver: false,
  });
  return {
    container: {
      flexDirection: 'row',
      alignItems: 'center',
    } as StyleProp<ViewStyle>,
    checkContainer: {
      position: 'relative',
      alignItems: 'center',
      justifyContent: 'center',
    } as StyleProp<ViewStyle>,
    radioContainer: {
      width: 24,
      height: 24,
      alignItems: 'center',
      justifyContent: 'center',
    } as StyleProp<ViewStyle>,
    radio: {
      width: 20,
      height: 20,
      borderRadius: 10,
      borderWidth: 2,
      borderColor: props.isDisabled
        ? theme.colors.lightGray5
        : props.isChecked
        ? theme.colors.linkDark
        : theme.colors.lightGray3,
      alignItems: 'center',
      justifyContent: 'center',
    } as StyleProp<ViewStyle>,
    radioCheck: {
      width: animatedRadioSize.interpolate({
        inputRange: [0, 1],
        outputRange: [0, 10],
      }),
      height: animatedRadioSize.interpolate({
        inputRange: [0, 1],
        outputRange: [0, 10],
      }),
      borderRadius: 10,
      backgroundColor: props.isDisabled
        ? theme.colors.lightGray5
        : props.isChecked
        ? theme.colors.linkDark
        : theme.colors.lightGray3,
    },
  };
};
