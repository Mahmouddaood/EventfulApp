import React from 'react';
import { SvgCss } from 'react-native-svg';
import { IconProps } from '../../utilities/generalInterface';
import colors from "../../utilities/colors";

const { memo } = React;

const SocialInstgramIcon: React.FC<IconProps> = ({
  width,
  height,
  color,
  onPress,
  iconStyle
}): JSX.Element => {
  const src = `
<?xml version="1.0" encoding="iso-8859-1"?>
<!-- Generator: Adobe Illustrator 19.0.0, SVG Export Plug-In . SVG Version: 6.00 Build 0)  -->
<svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
	 viewBox="0 0 512 512" style="enable-background:new 0 0 512 512;" xml:space="preserve">
<linearGradient id="SVGID_1_" gradientUnits="userSpaceOnUse" x1="-46.0041" y1="634.1208" x2="-32.9334" y2="647.1917" gradientTransform="matrix(32 0 0 -32 1519 20757)">
	<stop  offset="0" style="stop-color:#FFC107"/>
	<stop  offset="0.507" style="stop-color:#F44336"/>
	<stop  offset="0.99" style="stop-color:#9C27B0"/>
</linearGradient>
<path style="fill:url(#SVGID_1_);" d="M352,0H160C71.648,0,0,71.648,0,160v192c0,88.352,71.648,160,160,160h192
	c88.352,0,160-71.648,160-160V160C512,71.648,440.352,0,352,0z M464,352c0,61.76-50.24,112-112,112H160c-61.76,0-112-50.24-112-112
	V160C48,98.24,98.24,48,160,48h192c61.76,0,112,50.24,112,112V352z"/>
<linearGradient id="SVGID_2_" gradientUnits="userSpaceOnUse" x1="-42.2971" y1="637.8279" x2="-36.6404" y2="643.4846" gradientTransform="matrix(32 0 0 -32 1519 20757)">
	<stop  offset="0" style="stop-color:#FFC107"/>
	<stop  offset="0.507" style="stop-color:#F44336"/>
	<stop  offset="0.99" style="stop-color:#9C27B0"/>
</linearGradient>
<path style="fill:url(#SVGID_2_);" d="M256,128c-70.688,0-128,57.312-128,128s57.312,128,128,128s128-57.312,128-128
	S326.688,128,256,128z M256,336c-44.096,0-80-35.904-80-80c0-44.128,35.904-80,80-80s80,35.872,80,80
	C336,300.096,300.096,336,256,336z"/>
<linearGradient id="SVGID_3_" gradientUnits="userSpaceOnUse" x1="-35.5456" y1="644.5793" x2="-34.7919" y2="645.3331" gradientTransform="matrix(32 0 0 -32 1519 20757)">
	<stop  offset="0" style="stop-color:#FFC107"/>
	<stop  offset="0.507" style="stop-color:#F44336"/>
	<stop  offset="0.99" style="stop-color:#9C27B0"/>
</linearGradient>
<circle style="fill:url(#SVGID_3_);" cx="393.6" cy="118.4" r="17.056"/>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
</svg>
`
  return <SvgCss xml={src}
    width={33}
    height={25}
    fill={color}
    style={iconStyle}
    onPress={onPress}
  />
};

SocialInstgramIcon.defaultProps = {
  width: 19,
  height: 19,
  // color: "#dfdede",
};

export default memo(SocialInstgramIcon);
