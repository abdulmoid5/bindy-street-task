import {Pressable, View, StyleSheet} from 'react-native';
import React from 'react';
import {HeaderProps} from './props';
import {Text} from '~/components/atom/Text';
import {useTheme} from '~/hooks/useTheme';
import {IconArrowBack, IconClose} from '~/assets/icons';

export const Header: React.FC<HeaderProps> = props => {
  const {
    onBack,
    onClose,
    prefix,
    suffix,
    title,
    backButtonAccessibility,
    closeButtonAccessibility,
  } = props;
  const theme = useTheme();
  const isEmptyHeaderWithCloseButton = !onBack || !prefix || !title;
  return (
    <View
      style={[
        styles.container,
        {
          paddingLeft: isEmptyHeaderWithCloseButton ? 10 : theme.spacing.s,
          paddingRight: theme.spacing.s,
          paddingVertical: 10,
        },
      ]}>
      <View style={styles.titleContainer}>
        {!!onBack && (
          <Pressable
            hitSlop={44}
            onPress={onBack}
            accessible={true}
            accessibilityRole={backButtonAccessibility?.role}
            accessibilityLabel={backButtonAccessibility?.label}
            accessibilityHint={backButtonAccessibility?.hint}>
            <IconArrowBack color={theme.colors.darkGray} size="xxs" />
          </Pressable>
        )}
        {!onBack && prefix}

        {!!title && (
          <View
            style={[
              styles.title,
              {
                paddingStart: onBack || prefix ? theme.spacing.xxs : 0,
              },
            ]}>
            <Text variant="subtitle2" ellipsizeMode="tail">
              {title}
            </Text>
          </View>
        )}
      </View>
      {!!onClose && (
        <Pressable
          hitSlop={44}
          onPress={onClose}
          accessible={true}
          accessibilityRole={closeButtonAccessibility?.role}
          accessibilityLabel={closeButtonAccessibility?.label}>
          <IconClose color={theme.colors.darkGray} size="xxs" />
        </Pressable>
      )}
      {!onClose && suffix}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    minHeight: 44,
  },
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    overflow: 'hidden',
    flexShrink: 1,
  },
  title: {
    flexShrink: 1,
    overflow: 'hidden',
  },
});
