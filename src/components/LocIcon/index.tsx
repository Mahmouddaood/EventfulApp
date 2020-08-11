import React from 'react';
import { Svg, Path, G } from 'react-native-svg';
import { IconProps } from '../../utilities/generalInterface';
import colors from "../../utilities/colors";

const { memo } = React;

const LocIcon: React.FC<IconProps> = ({
  width,
  height,
  color,
  onPress,
  iconStyle
}): JSX.Element => {

  return (
    <Svg
      width={22}
      height={21}
      fill={colors.placeholder}
      style={iconStyle}
      onPress={onPress}
      viewBox="0 0 128 128">
      <G>
        <Path d="m78.777 37.021a14.777 14.777 0 1 0 -14.777 14.779 14.795 14.795 0 0 0 14.777-14.779zm-26.054 0a11.277 11.277 0 1 1 11.277 11.279 11.29 11.29 0 0 1 -11.277-11.279z" />
        <Path d="m123.328 121.069-14.266-37.4a1.751 1.751 0 0 0 -1.635-1.126h-27c.165-.269.329-.53.494-.8 10.389-17.2 15.617-32.246 15.542-44.714a32.464 32.464 0 0 0 -64.928-.011c-.075 12.479 5.153 27.527 15.542 44.725.165.273.329.534.494.8h-27a1.751 1.751 0 0 0 -1.635 1.126l-14.264 37.4a1.748 1.748 0 0 0 1.635 2.374h115.386a1.748 1.748 0 0 0 1.635-2.374zm-88.292-84.048a28.964 28.964 0 1 1 57.928.01c.15 24.858-23.09 55.517-28.964 62.869-5.874-7.349-29.115-38-28.964-62.879zm27.631 66.779a1.75 1.75 0 0 0 2.666 0 185.716 185.716 0 0 0 12.9-17.759h27.987l2.24 5.875-54.691 19.451-19.494-25.329h15.49a185.716 185.716 0 0 0 12.902 17.762zm-8.959 11.3h.01l32.627-11.6 12.655 16.443h-58.9zm-31.93-29.062h8.08l20.442 26.562-20.643 7.342h-20.81zm81.643 33.905-13.609-17.682 19.9-7.077 9.443 24.759z" />
      </G>
    </Svg>


  );
};

LocIcon.defaultProps = {
  width: 20,
  height: 20,
  color: colors.black,
  // iconStyle: { marginTop: 10 }
};

export default memo(LocIcon);
