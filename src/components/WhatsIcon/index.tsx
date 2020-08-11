import React from 'react';
import { SvgCss } from 'react-native-svg';
import { IconProps } from '../../utilities/generalInterface';
import colors from "../../utilities/colors";

const { memo } = React;

const WhatsIcon: React.FC<IconProps> = ({
  width,
  height,
  color,
  onPress,
  iconStyle
}): JSX.Element => {


  const src = `
  <svg xmlns="http://www.w3.org/2000/svg" width="24.964" height="24.964" viewBox="0 0 24.964 24.964">
  <path id="Icon_ionic-logo-whatsapp" data-name="Icon ionic-logo-whatsapp" d="M14.958,2.25A12.208,12.208,0,0,0,2.7,14.411,12.035,12.035,0,0,0,4.462,20.69L2.25,27.214l6.785-2.155A12.276,12.276,0,0,0,27.214,14.411,12.208,12.208,0,0,0,14.958,2.25Zm6.094,16.779a3.165,3.165,0,0,1-2.168,1.4c-.575.03-.591.445-3.725-.916a12.787,12.787,0,0,1-5.167-4.885,6.01,6.01,0,0,1-1.156-3.257A3.473,3.473,0,0,1,10.03,8.82a1.2,1.2,0,0,1,.849-.357c.247,0,.407-.007.589,0s.456-.038.694.593.8,2.182.877,2.34a.568.568,0,0,1,.006.544,2.128,2.128,0,0,1-.332.506c-.164.175-.344.392-.49.527-.163.149-.333.31-.162.628a9.378,9.378,0,0,0,1.659,2.214,8.551,8.551,0,0,0,2.457,1.634c.307.167.491.149.681-.052s.816-.877,1.036-1.18.427-.244.71-.13,1.792.923,2.1,1.089.512.252.586.384A2.574,2.574,0,0,1,21.052,19.029Z" transform="translate(-2.25 -2.25)" fill="#42b102"/>
</svg>



  `

  return <SvgCss xml={src}
    width={33.5}
    height={35
      // 33
    }
    fill={color}
    style={iconStyle}
    onPress={onPress}
  />
};

WhatsIcon.defaultProps = {
  // width: 50,
  // height: 50,
  // color: colors.white,
};

export default memo(WhatsIcon);
