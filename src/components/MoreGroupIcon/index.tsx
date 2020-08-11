import React from 'react';
import { Svg, Path, G } from 'react-native-svg';
import { SvgCss } from 'react-native-svg';
import { IconProps } from '../../utilities/generalInterface';
import colors from "../../utilities/colors";

const { memo } = React;

const MoreGroupIcon: React.FC<IconProps> = ({
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
	 viewBox="0 0 384 384" style="enable-background:new 0 0 384 384;" xml:space="preserve">
<g>
	<g>
		<circle cx="192" cy="42.667" r="42.667"/>
	</g>
</g>
<g>
	<g>
		<circle cx="192" cy="192" r="42.667"/>
	</g>
</g>
<g>
	<g>
		<circle cx="192" cy="341.333" r="42.667"/>
	</g>
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
<g>
</g>
</svg>
  `

	return <SvgCss xml={src}
		width={22}
		height={30}
		fill={"#fff"}
		onPress={onPress}
		style={iconStyle}
	/>
};


export default memo(MoreGroupIcon);
