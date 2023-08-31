import {Animated, Pressable, View} from 'react-native';
import {CheckboxTemplateProps} from '../template.props';
import {useStyles} from './hooks/useStyles';
import React from 'react';
import {useMargin} from '~/hooks/useMargin';
import {useTheme} from '~/hooks/useTheme';
import {Text} from '~/components/atom/Text';
import {useRipple} from '~/hooks/useRipple';
import {IconCheckbox, IconCheckboxOutline} from '~/assets/icons';

export const CheckboxTemplate: React.FC<CheckboxTemplateProps> = props => {
  const {isDisabled, isChecked, onChange, label, type, ...rest} = props;
  const styles = useStyles({
    isChecked,
    isDisabled,
  });
  const margin = useMargin(rest);
  const theme = useTheme();
  const {ripple, onPressIn, onPressOut} = useRipple({
    width: 40,
    height: 40,
    color: isChecked ? theme.colors.linkLight : theme.colors.lightGray5,
  });

  return (
    <Pressable
      disabled={isDisabled}
      onPress={onChange}
      onPressIn={onPressIn}
      onPressOut={onPressOut}>
      <View style={[styles.container, ...margin]}>
        <View style={styles.checkContainer}>
          {ripple}
          <View>
            {type === 'checkbox' ? (
              isChecked ? (
                <IconCheckbox
                  color={
                    isDisabled ? theme.colors.lightGray5 : theme.colors.linkDark
                  }
                />
              ) : (
                <IconCheckboxOutline
                  color={
                    isDisabled
                      ? theme.colors.lightGray5
                      : theme.colors.lightGray3
                  }
                />
              )
            ) : (
              <View style={styles.radioContainer}>
                <View style={styles.radio}>
                  <Animated.View style={styles.radioCheck} />
                </View>
              </View>
            )}
          </View>
        </View>

        {label && (
          <Text
            variant="body2"
            color={isDisabled ? 'lightGray4' : 'darkGray'}
            marginStart="s">
            {label}
          </Text>
        )}
      </View>
    </Pressable>
  );
};
