import React from 'react';
import { SvgCss } from 'react-native-svg';
import { IconProps } from '../../utilities/generalInterface';
import colors from "../../utilities/colors";

const { memo } = React;

const SideIcon: React.FC<IconProps> = ({
  width,
  height,
  color,
  onPress,
  iconStyle
}): JSX.Element => {


  const src = `
  <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="78" height="77" viewBox="0 0 78 77">
  <defs>
    <filter id="Ellipse_121" x="0" y="0" width="78" height="77" filterUnits="userSpaceOnUse">
      <feOffset dy="3" input="SourceAlpha"/>
      <feGaussianBlur stdDeviation="6" result="blur"/>
      <feFlood flood-color="#503498"/>
      <feComposite operator="in" in2="blur"/>
      <feComposite in="SourceGraphic"/>
    </filter>
  </defs>
  <g transform="matrix(1, 0, 0, 1, 0, 0)" filter="url(#Ellipse_121)">
    <ellipse id="Ellipse_121-2" data-name="Ellipse 121" cx="21" cy="20.5" rx="21" ry="20.5" transform="translate(18 15)" fill="#fff"/>
  </g>
</svg>

  `

  return <SvgCss xml={src}
    width={width}
    height={height}
    fill={color}
    style={iconStyle}
    onPress={onPress}
  />
};

SideIcon.defaultProps = {
  width: 50,
  height: 50,
  color: colors.white,
};

export default memo(SideIcon);
