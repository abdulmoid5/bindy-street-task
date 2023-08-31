import {Platform, StyleSheet} from 'react-native';
import {useTheme} from '~/hooks/useTheme';

export const useStyles = () => {
  const theme = useTheme();

  return StyleSheet.create({
    container: {
      flexDirection: 'row',
      paddingTop: theme.spacing.xxxs,
      paddingBottom: Platform.OS === 'ios' ? 34 : theme.spacing.xxxs, // As per design the padding is for iOS nodge,
      position: 'absolute',
      bottom: 0,
      left: 0,
      right: 0,
      backgroundColor: theme.colors.white,
      alignItems: 'center',
      justifyContent: 'space-evenly',
      borderTopWidth: 0.2,
      borderTopColor: theme.colors.lightGray5,
    },
  });
};
