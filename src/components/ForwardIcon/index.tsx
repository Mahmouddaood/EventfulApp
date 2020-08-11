import React from 'react';
import { Svg, Path, G } from 'react-native-svg';
import { IconProps } from '../../utilities/generalInterface';
import colors from "../../utilities/colors";

const { memo } = React;

const ForwardIcon: React.FC<IconProps> = ({
  width,
  height,
  color,
  onPress,
  iconStyle,
  transform
}): JSX.Element => {

  return (
    <Svg
      width={width}
      height={height}
      fill={color}
      style={iconStyle}
      onPress={onPress}
      viewBox="0 0 7.078 11.434">
      <G id="Group_756" data-name="Group 756" transform={transform}>
        <Path id="Back" d="M5.955,0,0,5.717l5.955,5.717,1.123-1.078L2.246,5.717,7.078,1.078Z" transform="translate(0 0)" fill-rule="evenodd" />
      </G>
    </Svg>



  );
};

ForwardIcon.defaultProps = {
  width: 7.078,
  height: 11.434,
  color: colors.black,
  transform: "translate(7.078 11.434) rotate(180)"
};

export default memo(ForwardIcon);
