import {
  NavigationContainer,
  createNavigationContainerRef,
} from '@react-navigation/native';
import React, {useRef} from 'react';

export const navigationRef = createNavigationContainerRef<any>();

export const BindyNavigationContainer: React.FC<
  React.PropsWithChildren<{}>
> = ({children}) => {
  const routeNameRef = useRef<string>();

  return (
    <NavigationContainer
      ref={navigationRef}
      onStateChange={async () => {
        const previousRouteName = routeNameRef.current;
        const currentRouteName = navigationRef.getCurrentRoute().name;

        if (previousRouteName !== currentRouteName) {
          console.info('current route:', currentRouteName);
        }

        // Save the current route name for later comparison
        routeNameRef.current = currentRouteName;
      }}>
      {children}
    </NavigationContainer>
  );
};
