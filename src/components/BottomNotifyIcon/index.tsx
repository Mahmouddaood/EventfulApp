import React from 'react';
import { Svg, Path } from 'react-native-svg';
import { IconProps } from '../../utilities/generalInterface';
import colors from "../../utilities/colors";

const { memo } = React;

const BottomNotifyIcon: React.FC<IconProps> = ({
  width,
  height,
  color,
  onPress,
  iconStyle
}): JSX.Element => {

  return (
    <Svg
      width={16}
      height={height}
      fill={color}
      style={iconStyle}
      onPress={onPress}
      viewBox="0 0 20.487 20.593">
      <Path id="Path_150" data-name="Path 150" d="M19.288,18.019H12.853a2.574,2.574,0,1,1-5.148,0H1.269a1.236,1.236,0,0,1-1.158-.9A1.374,1.374,0,0,1,.5,15.7a5.181,5.181,0,0,0,2.059-4.119V7.722A7.722,7.722,0,1,1,18,7.722v3.861A5.181,5.181,0,0,0,20.06,15.7a1.219,1.219,0,0,1,.386,1.416A1.236,1.236,0,0,1,19.288,18.019Z" transform="translate(-0.063)" fill={color} fill-rule="evenodd" />
    </Svg>




  );
};

BottomNotifyIcon.defaultProps = {
  width: 29,
  height: 20.593,
  color: "#dfdede",
  iconStyle: {
    right: 6
  }
};

export default memo(BottomNotifyIcon);
