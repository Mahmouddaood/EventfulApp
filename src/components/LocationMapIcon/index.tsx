import React from 'react';
import { Svg, Path, Stop, LinearGradient, Defs } from 'react-native-svg';
import { IconProps } from '../../utilities/generalInterface';
import colors from "../../utilities/colors";

const { memo } = React;

const LocationMapIcon: React.FC<IconProps> = ({
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
      viewBox="0 0 14.832 18">
      <Path id="Path_162"
        data-name="Path 162"
        d="M7.4,10.66a3.135,3.135,0,0,0,3.14-3.14A3.231,3.231,0,0,0,7.4,4.268a3.135,3.135,0,0,0-3.14,3.14A3.31,3.31,0,0,0,7.4,10.66ZM2.128,2.137A7.454,7.454,0,0,1,12.67,12.679L7.4,17.95,2.128,12.679A7.658,7.658,0,0,1,2.128,2.137Z"
        transform="translate(-0.025 0.05)"
        fill={color}
        fill-rule="evenodd" />


    </Svg>



  );
};

LocationMapIcon.defaultProps = {
  width: 14.832,
  height: 19,
  color: colors.grey,
};

export default memo(LocationMapIcon);
