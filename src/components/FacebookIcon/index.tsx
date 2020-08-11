import React from 'react';
import { SvgCss } from 'react-native-svg';
import { IconProps } from '../../utilities/generalInterface';
import colors from "../../utilities/colors";

const { memo } = React;

const FacebookIcon: React.FC<IconProps> = ({
  width,
  height,
  color,
  onPress,
  iconStyle
}): JSX.Element => {


  const src = `
  <svg xmlns="http://www.w3.org/2000/svg" width="27.639" height="27.471" viewBox="0 0 27.639 27.471">
  <path id="Icon_awesome-facebook" data-name="Icon awesome-facebook" d="M28.2,14.382A13.819,13.819,0,1,0,12.223,28.034V18.377H8.712V14.382h3.511V11.337c0-3.463,2.062-5.376,5.22-5.376a21.267,21.267,0,0,1,3.094.27v3.4H18.793a2,2,0,0,0-2.252,2.158v2.594h3.833l-.613,3.995h-3.22v9.657A13.824,13.824,0,0,0,28.2,14.382Z" transform="translate(-0.563 -0.562)" fill="#223ab1"/>
</svg>


  `

  return <SvgCss xml={src}
    width={36}
    height={35}
    fill={color}
    style={iconStyle}
    onPress={onPress}
  />
};

FacebookIcon.defaultProps = {
  // width: 50,
  // height: 50,
  // color: colors.white,
};

export default memo(FacebookIcon);
