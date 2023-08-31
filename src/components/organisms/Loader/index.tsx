import React from 'react';
import {ActivityIndicator, View} from 'react-native';
import {useTheme} from '~/hooks/useTheme';

type Props = {
  useFlex?: boolean;
  visible?: boolean;
};
export const Loader: React.FC<Props> = ({visible = true, useFlex = true}) => {
  const theme = useTheme();
  if (!visible) return null;
  return (
    <View
      style={{
        flex: useFlex ? 1 : 0,
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <ActivityIndicator size="large" color={theme.colors.black} />
    </View>
  );
};
