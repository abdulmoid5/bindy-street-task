import React, {FC} from 'react';
import Svg, {Path} from 'react-native-svg';
import {IconProps} from './props';
import {getSize} from '~/utils/getSize';

export const IconArrowBack: FC<IconProps> = ({size, color}) => {
  const iconSize = getSize(size);
  return (
    <Svg
      width={iconSize}
      height={iconSize}
      color={color}
      viewBox="0 0 24 24"
      fill="none">
      <Path
        d="M9 19L10.41 17.59L5.83 13H22V11H5.83L10.42 6.41L9 5L2 12L9 19Z"
        fill="currentColor"
      />
    </Svg>
  );
};
