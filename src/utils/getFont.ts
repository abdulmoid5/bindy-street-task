type GetFontFunction = () => {
  regular: string;
  bold: string;
  medium: string;
  semiBold: string;
};

export const getFont: GetFontFunction = () => {
  return {
    regular: 'Roboto-Regular',
    bold: 'Roboto-Bold',
    medium: 'Roboto-Medium',
    semiBold: 'Roboto-Medium',
  };
};
