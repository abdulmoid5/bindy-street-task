type Sizes = {
  ssss: number;
  xxxxs: number;
  sss: number;
  xxxs: number;
  ss: number;
  xxs: number;
  xs: number;
  s: number;
  m: number;
  l: number;
  xl: number;
};

export const sizesMap: Sizes = {
  ssss: 8,
  xxxxs: 12,
  sss: 16,
  xxxs: 18,
  ss: 20,
  xxs: 24,
  xs: 32,
  s: 48,
  m: 64,
  l: 80,
  xl: 112,
};
const sizesMapS = {
  ssss: '8px',
  xxxxs: '12px',
  sss: '16px',
  xxxs: '18px',
  ss: '20px',
  xxs: '24px',
  xs: '32px',
  s: '48px',
  m: '64px',
  l: '80px',
  xl: '112px',
};

export type SizesProps = keyof typeof sizesMap;

export const getSize = (size: string = 'xxs', useString: boolean = false) =>
  (useString
    ? sizesMapS[size as keyof Sizes]
    : sizesMap[size as keyof Sizes]) || size;
