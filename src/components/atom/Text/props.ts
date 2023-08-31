import {Theme} from '~/components/ThemeProvider/theme';
import {UseMarginProps} from '~/hooks/useMargin';

export type TextProps = {
  /**
   * Web only: if set, will change html tag of the component
   */
  as?: 'h1' | 'h2' | 'h3' | 'p' | 'span' | 'strong';
  /**
   * Variant of the text from design system
   */
  variant?: UseStyles['variants'];
  /**
   * Color of the text from design system
   */
  color?: keyof (typeof Theme)['colors'];

  /**
   * Text alignment
   *
   * `start` - text will be aligned to the left if ltr or right if rtl
   * `end` - text will be aligned to the right if ltr or left if rtl
   * `center` - text will be centered
   */
  textAlign?: 'auto' | 'left' | 'right' | 'center' | 'justify' | undefined;

  /**
   * Where to show ellipsis
   *
   * `tail` - abcd...
   */
  ellipsizeMode?: 'tail';

  /**
   * If set, will truncate the text to `numberOfLines` lines.
   * Will only work if `ellipsizeMode` is set
   */
  numberOfLines?: number;

  /**
   * Handles press events.
   */
  onPress?: () => void;
} & UseMarginProps;

type UseStyles = {
  /**
   * Variant of the text from design system
   */
  variants:
    | 'mainHeading1'
    | 'mainHeading2'
    | 'headline1'
    | 'headline2'
    | 'headline3'
    | 'headline4'
    | 'headline5'
    | 'subtitle1'
    | 'subtitle2'
    | 'body1'
    | 'body2'
    | 'body3'
    | 'body4'
    | 'body5'
    | 'body6';

  /**
   * Text alignment
   *
   * `start` - text will be aligned to the left if ltr or right if rtl
   * `end` - text will be aligned to the right if ltr or left if rtl
   * `center` - text will be centered
   */
  textAlign: 'start' | 'end' | 'center';
};
