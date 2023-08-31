import React, {useCallback} from 'react';
import {BottomTabBarProps} from '@react-navigation/bottom-tabs';
import {IconProps} from '~/assets/icons/props';
import {NavigationFooter} from '~/components/organisms/NavigationFooter';

type TabBarRouteConfig = {
  title: string;
  icon: React.FC<IconProps>;
};

type AppTabBarProps = {
  routeConfig: TabBarRouteConfig[];
};

interface NavigationRoute {
  name: string;
  key: string;
  params?: Record<string, any>;
}

export const AppTabBar: React.FC<BottomTabBarProps & AppTabBarProps> = ({
  state,
  navigation,
  routeConfig,
}) => {
  const onPress = useCallback(
    (route: NavigationRoute, isFocused: boolean) => {
      const event = navigation.emit({
        type: 'tabPress',
        target: route.key,
        canPreventDefault: true,
      });

      if (!isFocused && !event.defaultPrevented) {
        // The `merge: true` option makes sure that the params inside the tab screen are preserved
        navigation.navigate({name: route.name, params: {}, merge: true});
      }
    },
    [navigation],
  );
  return (
    <NavigationFooter>
      {state.routes.map((route, index) => {
        const label = routeConfig[index].title;
        const Icon = routeConfig[index].icon;
        const isFocused = state.index === index;

        return (
          <NavigationFooter.Item
            key={`tab-${route.key}-${label}`}
            onPress={() => onPress(route, isFocused)}
            icon={Icon}
            isActive={isFocused}
            title={routeConfig[index].title}
          />
        );
      })}
    </NavigationFooter>
  );
};
