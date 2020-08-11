import React from 'react';
import { Svg, G, Ellipse, Path, Circle } from 'react-native-svg';
import { IconProps } from '../../utilities/generalInterface';
import colors from "../../utilities/colors";

const { memo } = React;

const BottomProfileIcon: React.FC<IconProps> = ({
  width,
  height,
  color,
  onPress,
  iconStyle
}): JSX.Element => {

  return (
    <Svg
      width={21}
      height={21}
      fill={color}
      style={iconStyle}
      onPress={onPress}
      x="0px" y="0px"
      viewBox="0 0 512.012 512.012" >
      <Circle fill={"#dfdede"} cx="256.006" cy="256.006" r="256.006" />
      <Path fill={"#dfdede"} d="M501.635,328.317C470.426,434.489,372.278,512,256.006,512c-10.157,0-20.165-0.611-30.022-1.764
     L118.336,402.588l176.939,0.623l-2.26-133.266l-4.623-17.72l11.679-125.472L501.635,328.317z"/>
      <Path fill={colors.white} d="M185.643,285.67h4.923l28.835-15.726l4.692-18.343c-18.585-14.227-31.117-39.13-31.117-61.243
     v-20.441c0-33.273,28.35-60.505,63.03-60.505l0,0c34.668,0,63.042,27.232,63.042,60.505v20.441
     c0,22.113-12.544,47.016-31.129,61.232l4.692,18.354h0.404l28.027,15.726h5.327c37.032,0,67.319,29.146,67.319,64.598v52.319
     H118.336v-52.319C118.336,314.735,148.611,285.67,185.643,285.67z"/>
      <Path fill={"#dfdede"} d="M230.711,114.531c7.759-3.286,16.314-5.119,25.295-5.119l0,0c34.668,0,63.042,27.232,63.042,60.505
     v20.441c0,22.113-12.544,47.016-31.129,61.232l4.692,18.354h0.404l28.027,15.726h5.327c37.032,0,67.319,29.146,67.319,64.598v52.319
     h-12.59v-48.446c0-35.452-30.287-64.598-67.319-64.598h-5.326l-28.027-15.726h-0.404l-4.692-18.354
     c18.585-14.215,31.117-39.119,31.117-61.232v-20.441c0-33.273-28.362-60.505-63.03-60.505h-0.012
     C239.069,113.286,234.815,113.712,230.711,114.531z"/>
      <G>
      </G>
      <G>
      </G>
      <G>
      </G>
      <G>
      </G>
      <G>
      </G>
      <G>
      </G>
      <G>
      </G>
      <G>
      </G>
      <G>
      </G>
      <G>
      </G>
      <G>
      </G>
      <G>
      </G>
      <G>
      </G>
      <G>
      </G>
      <G>
      </G>
    </Svg>





  );
};

BottomProfileIcon.defaultProps = {
  width: 25,
  height: 18,
  color: "#dfdede",
};

export default memo(BottomProfileIcon);
