import React, {FC} from 'react';
import Svg, {Path} from 'react-native-svg';
import {IconProps} from './props';
import {getSize} from '~/utils/getSize';

export const IconClose: FC<IconProps> = ({size, color}) => {
  const iconSize = getSize(size);
  return (
    <Svg
      width={iconSize}
      height={iconSize}
      color={color}
      viewBox="0 0 24 24"
      fill="none">
      <Path
        d="M19 6.41L17.59 5L12 10.59L6.41 5L5 6.41L10.59 12L5 17.59L6.41 19L12 13.41L17.59 19L19 17.59L13.41 12L19 6.41Z"
        fill="currentColor"
      />
    </Svg>
  );
};
