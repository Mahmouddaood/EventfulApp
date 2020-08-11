import React from 'react';
import { Svg, Path } from 'react-native-svg';
import { IconProps } from '../../utilities/generalInterface';
import colors from "../../utilities/colors";

const { memo } = React;

const LocationIcon: React.FC<IconProps> = ({
  width,
  height,
  color,
  onPress,
  iconStyle
}): JSX.Element => {

  return (
    <Svg
      width={width}
      height={height}
      fill={color}
      style={iconStyle}
      onPress={onPress}
      viewBox="0 0 7.408 8.991"
    >

      <Path
        id="Path_3204"
        data-name="Path 3204"
        d="M3.708,5.3A1.566,1.566,0,0,0,5.277,3.731,1.614,1.614,0,0,0,3.708,2.107,1.566,1.566,0,0,0,2.14,3.675,1.653,1.653,0,0,0,3.708,5.3ZM1.075,1.042A3.723,3.723,0,0,1,6.341,6.308L3.708,8.941,1.075,6.308A3.825,3.825,0,0,1,1.075,1.042Z"
        transform="translate(-0.025 0.05)"
        fill="#fff"
        fill-rule="evenodd"
      />
    </Svg >

  );
};

LocationIcon.defaultProps = {
  width: 7.41,
  height: 8.99,
  // color: colors.white,
};

export default memo(LocationIcon);
