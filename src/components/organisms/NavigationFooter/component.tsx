import React from 'react';
import {View} from 'react-native';
import {Item, ItemProps} from './components/Item';
import {useStyles} from './hooks/useStyles';

export const NavigationFooter: React.FC<React.PropsWithChildren> & {
  Item: React.FC<React.PropsWithChildren<ItemProps>>;
} = props => {
  const {children} = props;
  const styles = useStyles();

  return <View style={styles.container}>{children}</View>;
};

NavigationFooter.Item = Item;
