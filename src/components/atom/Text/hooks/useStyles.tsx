import {getFont} from '~/utils/getFont';
import {useTheme} from '../../../../hooks/useTheme';

export const useStyles = () => {
  const theme = useTheme();
  const font = getFont();
  return {
    base: {
      margin: 0,
      padding: 0,
      fontSize: 16,
      lineHeight: 20,
      color: theme.colors.darkGray,
      fontFamily: font.regular,
    },
    ellipsizeTail: {
      whiteSpace: 'nowrap',
      overflow: 'hidden',
      textOverflow: 'ellipsis',
    },
    textAlign: {
      center: {
        textAlign: 'center',
      },
      end: {
        textAlign: 'right',
      },
      start: {
        textAlign: 'left',
      },
    },
    variants: {
      mainHeading1: {
        fontSize: 64,
        lineHeight: 84,
        fontFamily: font.semiBold,
      },
      mainHeading2: {
        fontSize: 48,
        lineHeight: 64,
        fontFamily: font.semiBold,
      },
      headline1: {
        fontSize: 34,
        lineHeight: 46,
        fontFamily: font.bold,
      },
      headline2: {
        fontSize: 30,
        lineHeight: 40,
        fontFamily: font.bold,
      },
      headline3: {
        fontSize: 24,
        lineHeight: 32,
        fontFamily: font.bold,
      },
      headline4: {
        fontSize: 20,
        lineHeight: 28,
        fontFamily: font.bold,
      },
      headline5: {
        fontSize: 18,
        lineHeight: 24,
        fontFamily: font.bold,
      },

      subtitle1: {
        fontSize: 20,
        lineHeight: 28,
        fontFamily: font.semiBold,
      },
      subtitle2: {
        fontSize: 18,
        lineHeight: 24,
        fontFamily: font.semiBold,
      },

      body1: {
        fontSize: 20,
        lineHeight: 28,
        fontFamily: font.medium,
      },
      body2: {
        fontSize: 18,
        lineHeight: 24,
        fontFamily: font.medium,
      },
      body3: {
        fontSize: 16,
        lineHeight: 22,
        fontFamily: font.medium,
      },
      body4: {
        fontSize: 14,
        lineHeight: 20,
        fontFamily: font.regular,
      },
      body5: {
        fontSize: 12,
        lineHeight: 16,
        fontFamily: font.regular,
      },
      body6: {
        fontSize: 10,
        lineHeight: 14,
        fontFamily: font.regular,
      },
    },
  };
};
