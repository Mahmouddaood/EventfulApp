import React from 'react';
import { Svg, Rect, G, Circle } from 'react-native-svg';
import { IconProps } from '../../utilities/generalInterface';
import colors from "../../utilities/colors";

const { memo } = React;

const AddIcon: React.FC<IconProps> = ({
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
      viewBox="0 0 32 32">
      <G id="Ellipse_168" data-name="Ellipse 168" fill="none" stroke="#c5c5c5" stroke-width="1">
        <Circle cx="16" cy="16" r="16" stroke="none" />
        <Circle cx="16" cy="16" r="15.5" fill="none" />
      </G>
    </Svg>


  );
};

AddIcon.defaultProps = {
  width: 32,
  height: 32,
  color: colors.black,
  iconStyle: { marginTop: 10 }
};

export default memo(AddIcon);
