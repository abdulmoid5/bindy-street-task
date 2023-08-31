import React from 'react';
import {View, TouchableHighlight} from 'react-native';
import {useStyles} from './hooks/useStyles';
import {ItemProps} from './props';
import {useTheme} from '~/hooks/useTheme';
import {Text} from '~/components/atom/Text';

export const Item: React.FC<ItemProps> = props => {
  const theme = useTheme();
  const {icon: Icon, isActive = false, onPress, title} = props;
  const styles = useStyles();

  return (
    <TouchableHighlight
      activeOpacity={1}
      underlayColor="transparent"
      onPress={onPress}>
      <View style={styles.container}>
        <Icon
          color={isActive ? theme.colors.darkGray : theme.colors.lightGray4}
        />
        <Text
          variant="body5"
          color={isActive ? 'darkGray' : 'lightGray4'}
          marginTop="xxxs">
          {title}
        </Text>
      </View>
    </TouchableHighlight>
  );
};
