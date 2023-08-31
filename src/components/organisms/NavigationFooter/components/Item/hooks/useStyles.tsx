import {ViewStyle} from 'react-native';
import {useTheme} from '~/hooks/useTheme';

export const useStyles = () => {
  const theme = useTheme();

  return {
    container: {
      height: 49,
      width: 75,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: theme.colors.white,
    } as ViewStyle,
  };
};
