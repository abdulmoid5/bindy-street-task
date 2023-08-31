import React, {FC} from 'react';
import {TouchableOpacity, View} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {useTheme} from '~/hooks/useTheme';
import {Header} from '~/components/organisms/Header';
import i18n from '~/translations/i18n/i18n';
import {IconDotVertical} from '~/assets/icons';

type HeaderNavBackProps = {
  title?: string;
  style?: any;
  backgroundColor?: string;
  titleStyle?: any;
  showMenuBar?: boolean;
  hideBack?: boolean;
  empty?: boolean;
  backRoute?: string;
  onBackClick?: () => void;
  onMenuClick?: () => void;
};

export const HeaderNavBack: FC<HeaderNavBackProps> = props => {
  /**
   * Header height
   */
  const theme = useTheme();
  const insets = useSafeAreaInsets();

  const renderSuffixButton = () => {
    if (props.showMenuBar) {
      return (
        <TouchableOpacity
          hitSlop={{top: 10, bottom: 10, left: 20, right: 20}}
          onPress={props.onMenuClick}
          accessible={true}
          accessibilityRole="button"
          accessibilityLabel={i18n.t('accessibility_label_menu')}
          accessibilityHint={i18n.t('accessibility_hint_open_menu')}>
          <IconDotVertical size="xs" color={theme.colors.darkGray} />
        </TouchableOpacity>
      );
    }

    return undefined;
  };

  return (
    <View
      style={{
        paddingTop: insets.top,
        backgroundColor: props.backgroundColor ?? theme.colors.white,
      }}>
      {props.empty ? null : (
        <Header
          title={props.title}
          onBack={props.hideBack ? undefined : props.onBackClick}
          suffix={renderSuffixButton()}
          backButtonAccessibility={{
            role: props.hideBack ? undefined : 'button',
            label: props.hideBack
              ? undefined
              : i18n.t('accessibility_label_back'),
            hint: props.hideBack
              ? undefined
              : i18n.t('accessibility_hint_navigate_back'),
          }}
        />
      )}
    </View>
  );
};
