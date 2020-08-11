import React from 'react';
import { Svg, Path, G } from 'react-native-svg';
import { SvgCss } from 'react-native-svg';
import { IconProps } from '../../utilities/generalInterface';
import colors from "../../utilities/colors";

const { memo } = React;

const VideoCameraIcon: React.FC<IconProps> = ({
	width,
	height,
	color,
	onPress,
	iconStyle
}): JSX.Element => {


	const src = `
	<svg id="Capa_1" enable-background="new 0 0 565.648 565.648" height="512" viewBox="0 0 565.648 565.648" width="512" xmlns="http://www.w3.org/2000/svg"><path d="m512.619 106.059-88.383 77.641v-42.288c0-19.526-15.827-35.353-35.353-35.353h-353.53c-19.526 0-35.353 15.827-35.353 35.353v282.824c0 19.524 15.827 35.353 35.353 35.353h353.53c19.526 0 35.353-15.829 35.353-35.353v-42.29l88.383 77.643h53.03v-176.765-176.765z"/></svg>
  `

	return <SvgCss xml={src}
		width={23}
		height={25}
		fill={colors.mainColor}
		onPress={onPress}
		style={iconStyle}
	/>
};


export default memo(VideoCameraIcon);
