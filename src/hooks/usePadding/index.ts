import {useTheme} from '../useTheme';
import {UsePaddingProps} from './props';

export * from './props';

/**
 * This hook returns the padding styles for the component. Those styles include:
 * - `padding` - Padding around the component.
 * - `paddingStart` - Padding on the left side of the component.
 * - `paddingEnd` - Padding on the right side of the component.
 * - `paddingTop` - Padding on the top of the component.
 * - `paddingBottom` - Padding on the bottom of the component.
 * - `paddingVertical` - Padding on the top and bottom of the component.
 * - `paddingHorizontal` - Padding on the left and right of the component.
 */
export const usePadding = (props: UsePaddingProps) => {
  const theme = useTheme();

  const {
    padding,
    paddingBottom,
    paddingStart,
    paddingEnd,
    paddingTop,
    paddingHorizontal,
    paddingVertical,
  } = props;

  return [
    !!padding && {
      padding: theme.spacing[padding],
    },
    !!paddingVertical && {
      paddingTop: theme.spacing[paddingVertical],
      paddingBottom: theme.spacing[paddingVertical],
    },
    !!paddingHorizontal && {
      paddingLeft: theme.spacing[paddingHorizontal],
      paddingRight: theme.spacing[paddingHorizontal],
    },
    !!paddingBottom && {
      paddingBottom: theme.spacing[paddingBottom],
    },
    !!paddingTop && {
      paddingTop: theme.spacing[paddingTop],
    },
    !!paddingStart && {
      paddingLeft: theme.spacing[paddingStart],
    },
    !!paddingEnd && {
      paddingRight: theme.spacing[paddingEnd],
    },
  ];
};
