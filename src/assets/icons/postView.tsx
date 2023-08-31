import React, {FC} from 'react';
import Svg, {Path} from 'react-native-svg';
import {IconProps} from './props';
import {getSize} from '~/utils/getSize';

export const IconPostView: FC<IconProps> = ({size, color}) => {
  const iconSize = getSize(size);
  return (
    <Svg
      width={iconSize}
      height={iconSize}
      color={color}
      viewBox="0 0 24 24"
      fill="none">
      <Path
        d="M4.5 20.5002L3 22.0002V2.00024L4.5 3.50024L6 2.00024L7.5 3.50024L9 2.00024L10.5 3.50024L12 2.00024L13.5 3.50024L15 2.00024L16.5 3.50024L18 2.00024L19.5 3.50024L21 2.00024V22.0002L19.5 20.5002L18 22.0002L16.5 20.5002L15 22.0002L13.5 20.5002L12 22.0002L10.5 20.5002L9 22.0002L7.5 20.5002L6 22.0002L4.5 20.5002ZM18 7.00024V9.00024H6V7.00024H18ZM6 11.0002V13.0002H18V11.0002H6ZM6 15.0002V17.0002H18V15.0002H6Z"
        fill="currentColor"
      />
    </Svg>
  );
};
