import React from 'react';
import { Svg, Path, G } from 'react-native-svg';
import { IconProps } from '../../utilities/generalInterface';
import colors from "../../utilities/colors";

const { memo } = React;

const BoxIcon: React.FC<IconProps> = ({
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
      viewBox="0 0 23.816 16.165">
      <G id="box_1_" data-name="box (1)" transform="translate(0 -71.347)">
        <G id="Group_2078" data-name="Group 2078" transform="translate(0 71.347)">
          <Path id="Path_3214" data-name="Path 3214" d="M239.922,198.317a.188.188,0,0,0-.17-.025l-6.555,2.23a.221.221,0,0,1-.241-.076l-2.008-2.48a.188.188,0,0,0-.334.118v9a.187.187,0,0,0,.259.173l9.01-3.723a.188.188,0,0,0,.116-.173v-4.893A.188.188,0,0,0,239.922,198.317Z" transform="translate(-218.25 -191.111)" fill="#c5c5c5" />
          <Path id="Path_3215" data-name="Path 3215" d="M23.779,76.541l-1.719-2.3a.187.187,0,0,0-.1-.068l-10-2.822a.228.228,0,0,0-.112,0l-10,2.822a.187.187,0,0,0-.1.068l-1.72,2.3a.188.188,0,0,0,.09.29L8.58,79.7a.187.187,0,0,0,.206-.059l2.366-2.916.7.193a.187.187,0,0,0,.1,0h0l.01,0,.7-.193,2.366,2.916a.188.188,0,0,0,.206.059l8.452-2.869a.188.188,0,0,0,.09-.29Zm-11.865-.42L4.745,74.162l7.168-2.012,7.157,2.009Z" transform="translate(0 -71.347)" fill="#c5c5c5" />
          <Path id="Path_3216" data-name="Path 3216" d="M47.786,197.957a.188.188,0,0,0-.209.059L45.57,200.5a.222.222,0,0,1-.241.076l-6.555-2.23a.188.188,0,0,0-.248.178v4.893a.188.188,0,0,0,.116.173l9.01,3.723a.188.188,0,0,0,.259-.173v-9A.188.188,0,0,0,47.786,197.957Z" transform="translate(-36.46 -191.158)" fill="#c5c5c5" />
        </G>
      </G>
    </Svg>


  );
};

BoxIcon.defaultProps = {
  width: 23.816,
  height: 16.165,
  color: colors.black,
  // iconStyle: { marginTop: 10 }
};

export default memo(BoxIcon);
