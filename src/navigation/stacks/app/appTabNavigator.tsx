import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';
import {IconCardView, IconPostView} from '~/assets/icons';
import {CARD_VIEW_ROUTE, POST_VIEW_ROUTE} from '~/navigation/routes';
import {CardViewScreen} from '~/screens/cardView/CardViewScreen';
import {PostViewScreen} from '~/screens/postView/PostViewScreen';
import i18n from '~/translations/i18n/i18n';
import {AppTabBar} from './appTabBar';

const Tab = createBottomTabNavigator();

export const AppTabNavigator = () => {
  return (
    <Tab.Navigator
      tabBar={props => (
        <AppTabBar
          {...props}
          routeConfig={[
            {title: i18n.t('bottom_tab_post_view_title'), icon: IconPostView},
            {title: i18n.t('bottom_tab_card_view_title'), icon: IconCardView},
          ]}
        />
      )}
      screenOptions={{
        headerShown: true,
      }}>
      <Tab.Screen name={POST_VIEW_ROUTE} component={PostViewScreen} />
      <Tab.Screen name={CARD_VIEW_ROUTE} component={CardViewScreen} />
    </Tab.Navigator>
  );
};
