import React, {FC} from 'react';
import Svg, {Path} from 'react-native-svg';
import {IconProps} from './props';
import {getSize} from '~/utils/getSize';

export const IconDotVertical: FC<IconProps> = ({size, color}) => {
  const iconSize = getSize(size);
  return (
    <Svg
      width={iconSize}
      height={iconSize}
      color={color}
      viewBox="0 0 32 32"
      fill="none">
      <Path
        d="M13 16c0 1.654 1.346 3 3 3s3-1.346 3-3-1.346-3-3-3-3 1.346-3 3zm0 10c0 1.654 1.346 3 3 3s3-1.346 3-3-1.346-3-3-3-3 1.346-3 3zm0-20c0 1.654 1.346 3 3 3s3-1.346 3-3-1.346-3-3-3-3 1.346-3 3z"
        fill="currentColor"
      />
    </Svg>
  );
};
