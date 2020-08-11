import React from 'react';
import { SvgCss, ClipPath, Rect, G, Defs, Svg } from 'react-native-svg';
import { IconProps } from '../../utilities/generalInterface';
import colors from "../../utilities/colors";

import Image from 'react-native-scalable-image'
import { screenWidth } from '../../utilities/Context/responsive';
// import { Image } from 'react-native';
const image = require('../../assests/eventfulAssests/images/DjNight.png')


const { memo } = React;

const MaskShape: React.FC<IconProps> = ({
  width,
  height,
  color,
  onPress,
  iconStyle,
  child
}): JSX.Element => {
  const src = `
<svg xmlns="http://www.w3.org/2000/svg" width="413.333" height="128.667" viewBox="0 0 413.333 128.667"><path d="M5789.333-246.667s164,43.333,256.667,67.333,156.667-87.333,156.667-87.333V-138H5789.333Z" transform="translate(-5789.333 266.667)" fill="#fff"/></svg>
`

  return <SvgCss xml={src}
    width={screenWidth}
    height={120}
    fill={"#000"}
    onPress={onPress}
    style={{
      bottom: 0,
      position: "absolute"
    }}
  />
    //   width={"100%"}
    //   height={245}
    //   fill={"#000"}
    //   style={{
    //     // marginBottom: 200,
    //     overflow: "hidden",
    //     // opacity: 0.5,
    //     // position: "absolute"
    //     // top: 100
    //   }}
    //   onPress={onPress}
    // >
    //   {child}
    // </SvgCss>
    ;
}

MaskShape.defaultProps = {
  width: 50,
  height: 50,
  color: colors.white,
};

export default memo(MaskShape);
