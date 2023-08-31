import {Text as BaseText} from 'react-native';
import {TextProps} from './props';
import React from 'react';
import {useMargin} from '~/hooks/useMargin';
import {useTheme} from '~/hooks/useTheme';
import {useStyles} from './hooks/useStyles';

export const Text: React.FunctionComponent<
  React.PropsWithChildren<TextProps>
> = props => {
  const {
    color,
    variant = 'body2',
    textAlign,
    ellipsizeMode,
    numberOfLines = 1,
    onPress,
    ...restProps
  } = props;
  const theme = useTheme();
  const margin = useMargin(restProps);
  const styles = useStyles();

  return (
    <BaseText
      ellipsizeMode={ellipsizeMode}
      numberOfLines={ellipsizeMode ? numberOfLines : undefined}
      accessibilityRole="text"
      style={[
        {
          ...styles.base,
          textAlignVertical: 'center',
          color: theme.colors[color],
          ...styles.variants[variant],
          textAlign: textAlign,
        },

        ...margin,
      ]}
      onPress={onPress}>
      {props.children}
    </BaseText>
  );
};
