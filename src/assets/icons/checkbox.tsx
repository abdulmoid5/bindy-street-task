import React, {FC} from 'react';
import Svg, {Path} from 'react-native-svg';
import {IconProps} from './props';
import {getSize} from '~/utils/getSize';

export const IconCheckbox: FC<IconProps> = ({size, color}) => {
  const iconSize = getSize(size);
  return (
    <Svg
      width={iconSize}
      height={iconSize}
      color={color}
      viewBox="0 0 24 24"
      fill="none">
      <Path
        d="M19 3H5c-.53043 0-1.03911.21071-1.41418.58579C3.21074 3.96086 3 4.46957 3 5v14c0 .5304.21074 1.0391.58582 1.4142C3.96089 20.7893 4.46957 21 5 21h14c.5304 0 1.0391-.2107 1.4142-.5858S21 19.5304 21 19V5c0-.53043-.2107-1.03914-.5858-1.41421C20.0391 3.21071 19.5304 3 19 3Zm-9 14-5-5 1.40997-1.41L10 14.17l7.59-7.59L19 8l-9 9Z"
        fill="currentColor"
      />
    </Svg>
  );
};
