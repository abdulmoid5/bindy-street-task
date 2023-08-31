import {AccessibilityProps} from '~/components/AccessibilityProps';

export type HeaderProps = {
  /**
   * Title
   */
  title?: string;
  /**
   * Prefix element. Will be rendered before title
   */
  prefix?: JSX.Element;
  /**
   * Suffix element. Will be rendered after title
   */
  suffix?: JSX.Element;

  /**
   * Handles press on back icon.
   * If set, will render back icon instead of prefix
   */
  onBack?(): void;

  /**
   * Handles press on close icon.
   * If set, will render close icon instead of suffix
   */
  onClose?(): void;

  /**
   * If set, will add accessibility properties to header back button
   */
  backButtonAccessibility?: AccessibilityProps;

  /**
   * If set, will add accessibility properties to header close button
   */
  closeButtonAccessibility?: AccessibilityProps;
};
