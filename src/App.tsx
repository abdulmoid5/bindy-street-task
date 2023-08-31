import React from 'react';
import {BindyNavigationContainer} from '~/navigation/bindyNavigationContainer';
import {AppNavigator} from '~/navigation/appNavigator';
import Toast from 'react-native-toast-message';
import {ToastConfig} from '~/utils/toastConfig';

export const App: React.FC = () => {
  return (
    <BindyNavigationContainer>
      <AppNavigator />
      <Toast config={ToastConfig} />
    </BindyNavigationContainer>
  );
};
