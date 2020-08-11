import React from 'react';
import { Svg, G, Defs, Ellipse } from 'react-native-svg';
import { IconProps } from '../../utilities/generalInterface';
import colors from "../../utilities/colors";

const { memo } = React;

const ShadowIcon: React.FC<IconProps> = ({
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
      viewBox="0 0 78 77">
      <Defs>
        {/* <filter id="Ellipse_121" x="0" y="0" width="78" height="77" filterUnits="userSpaceOnUse">
      <feOffset dy="3" />
      <feGaussianBlur stdDeviation="6" result="blur"/>
      <feFlood flood-color="#503498"/>
      <feComposite operator="in" in2="blur"/>
      <feComposite in="SourceGraphic"/>
    </filter> */}
      </Defs>
      <G transform="matrix(1, 0, 0, 1, 0, 0)" filter="url(#Ellipse_121)">
        <Ellipse id="Ellipse_121-2" data-name="Ellipse 121" cx="21" cy="20.5" rx="21" ry="20.5" transform="translate(18 15)" fill="#fff" />
      </G>

    </Svg >

  );
};

ShadowIcon.defaultProps = {
  width: 78,
  height: 77,
  // color: colors.white,
};

export default memo(ShadowIcon);
