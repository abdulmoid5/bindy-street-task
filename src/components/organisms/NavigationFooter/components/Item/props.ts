import {IconProps} from '~/assets/icons/props';

export type ItemProps = {
  /**
   * Item icon
   */
  icon: React.FC<IconProps>;

  /**
   * If true, will show item in active state
   *
   * @default false
   */
  isActive?: boolean;

  /**
   * Item title
   */
  title: string;

  /**
   * Handles item press
   */
  onPress(): void;
};
