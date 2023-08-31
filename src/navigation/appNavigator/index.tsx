import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import {useTheme} from '~/hooks/useTheme';
import {OnboardScreen} from '~/screens/onboard/OnboardScreen';
import {HeaderNavBack} from '../headerNavBackButton';
import {APP_TAB_ROUTE, ONBOARD_ROUTE} from '../routes';
import {AppTabNavigator} from '../stacks/app/appTabNavigator';
import type {AppNavigatorStackParamsList} from './types';

type AppNavigatorStackParamsListTodo = AppNavigatorStackParamsList & any;
const AppNavigatorStack =
  createStackNavigator<AppNavigatorStackParamsListTodo>();

export const AppNavigator: React.FC = () => {
  const theme = useTheme();

  return (
    <AppNavigatorStack.Navigator>
      <AppNavigatorStack.Group
        screenOptions={() => ({
          gestureEnabled: false,
          headerShown: true,
          header: () => (
            <HeaderNavBack
              backgroundColor={theme.colors.white}
              onBackClick={() => {}}
            />
          ),
        })}>
        <AppNavigatorStack.Screen
          name={ONBOARD_ROUTE}
          component={OnboardScreen}
          options={{
            header: () => null,
          }}
        />
        <AppNavigatorStack.Screen
          name={APP_TAB_ROUTE}
          component={AppTabNavigator}
          options={{
            header: () => null,
          }}
        />
      </AppNavigatorStack.Group>
    </AppNavigatorStack.Navigator>
  );
};
