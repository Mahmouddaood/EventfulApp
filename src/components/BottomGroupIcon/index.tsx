import React from 'react';
import { Svg, G, Ellipse } from 'react-native-svg';
import { IconProps } from '../../utilities/generalInterface';
import colors from "../../utilities/colors";

const { memo } = React;

const BottomGroupIcon: React.FC<IconProps> = ({
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
      viewBox="0 0 4 19">
      <G id="Group_1004" data-name="Group 1004" transform="translate(-0.321 0.238)">
        <Ellipse id="Ellipse_82" data-name="Ellipse 82" cx="2" cy="2.5" rx="2" ry="2.5" transform="translate(0.321 -0.238)" fill={color} />
        <Ellipse id="Ellipse_82-2" data-name="Ellipse 82" cx="2" cy="2.5" rx="2" ry="2.5" transform="translate(0.321 6.762)" fill={color} />
        <Ellipse id="Ellipse_82-3" data-name="Ellipse 82" cx="2" cy="2.5" rx="2" ry="2.5" transform="translate(0.321 13.762)" fill={color} />
      </G>
    </Svg>





  );
};

BottomGroupIcon.defaultProps = {
  width: 4,
  height: 19,
  color: "#dfdede",
};

export default memo(BottomGroupIcon);
