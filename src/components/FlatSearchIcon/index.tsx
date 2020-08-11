import React from 'react';
import { SvgCss } from 'react-native-svg';
import { IconProps } from '../../utilities/generalInterface';
import colors from "../../utilities/colors";

const { memo } = React;

const FLatSearchIcon: React.FC<IconProps> = ({
  width,
  height,
  color,
  onPress,
  iconStyle
}): JSX.Element => {


  const src = `
  <svg id="Capa_1" enable-background="new 0 0 515.558 515.558" height="512" viewBox="0 0 515.558 515.558" width="512" xmlns="http://www.w3.org/2000/svg"><path d="m378.344 332.78c25.37-34.645 40.545-77.2 40.545-123.333 0-115.484-93.961-209.445-209.445-209.445s-209.444 93.961-209.444 209.445 93.961 209.445 209.445 209.445c46.133 0 88.692-15.177 123.337-40.547l137.212 137.212 45.564-45.564c0-.001-137.214-137.213-137.214-137.213zm-168.899 21.667c-79.958 0-145-65.042-145-145s65.042-145 145-145 145 65.042 145 145-65.043 145-145 145z"/></svg>


  `

  return <SvgCss xml={src}
    width={26}
    height={25}
    fill={color}
    style={iconStyle}
    onPress={onPress}
  />
};

FLatSearchIcon.defaultProps = {
  // width: 50,
  // height: 50,
  color: colors.white,
};

export default memo(FLatSearchIcon);
