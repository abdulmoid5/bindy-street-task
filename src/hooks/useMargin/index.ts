import {useTheme} from '../useTheme';
import {Spacing, UseMarginProps} from './props';

export * from './props';

type SpacingWithNegative = `-${Spacing}` | Spacing;

/**
 * This hook returns the margin styles for the component. Those styles include:
 * - `margin` - Margin around the component.
 * - `marginStart` - Margin on the left side of the component.
 * - `marginEnd` - Margin on the right side of the component.
 * - `marginTop` - Margin on the top of the component.
 * - `marginBottom` - Margin on the bottom of the component.
 * - `marginVertical` - Margin on the top and bottom of the component.
 * - `marginHorizontal` - Margin on the left and right of the component.
 */
export const useMargin = (props: UseMarginProps) => {
  const theme = useTheme();

  const {
    margin,
    marginBottom,
    marginStart,
    marginEnd,
    marginTop,
    marginHorizontal,
    marginVertical,
  } = props;

  const toSpacing = (spacing: SpacingWithNegative): number => {
    if (spacing.includes('-')) {
      const value: SpacingWithNegative = spacing.slice(
        1,
        spacing.length,
      ) as SpacingWithNegative;
      //@ts-ignore
      return -theme.spacing[value];
    }
    //@ts-ignore
    return theme.spacing[spacing];
  };

  return [
    !!margin && {
      margin: toSpacing(margin),
    },
    !!marginVertical && {
      marginTop: toSpacing(marginVertical),
      marginBottom: toSpacing(marginVertical),
    },
    !!marginHorizontal && {
      marginLeft: toSpacing(marginHorizontal),
      marginRight: toSpacing(marginHorizontal),
    },
    !!marginBottom && {
      marginBottom: toSpacing(marginBottom),
    },
    !!marginTop && {
      marginTop: toSpacing(marginTop),
    },
    !!marginStart && {
      marginLeft: toSpacing(marginStart),
    },
    !!marginEnd && {
      marginRight: toSpacing(marginEnd),
    },
  ];
};
