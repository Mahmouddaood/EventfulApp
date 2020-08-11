import React from 'react';
import { Svg, Path, Stop, LinearGradient, Defs } from 'react-native-svg';
import { IconProps } from '../../utilities/generalInterface';
import colors from "../../utilities/colors";

const { memo } = React;

const BottomHomeIcon: React.FC<IconProps> = ({
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
      viewBox="0 0 18.305 18.305">
      <Defs>
        <LinearGradient id="linear-gradient" x1="0.5" x2="0" y2="1.544" gradientUnits="objectBoundingBox">
          <Stop offset="0" stop-color={colors.placeholder} />
          <Stop offset="1" stop-color={colors.placeholder} />
        </LinearGradient>
      </Defs>
      <Path
        id="Icon"
        d="M4,8.576H8.576V4H4V8.576ZM10.864,22.3H15.44V17.729H10.864V22.3ZM4,22.3H8.576V17.729H4V22.3ZM4,15.44H8.576V10.864H4V15.44Zm6.864,0H15.44V10.864H10.864V15.44ZM17.729,4V8.576H22.3V4ZM10.864,8.576H15.44V4H10.864V8.576Zm6.864,6.864H22.3V10.864H17.729V15.44Zm0,6.864H22.3V17.729H17.729V22.3Z"
        transform="translate(-4 -4)"
        fill={color}
      />
    </Svg>



  );
};

BottomHomeIcon.defaultProps = {
  width: 18.3,
  height: 18.3,
  color: colors.mainColor,
};

export default memo(BottomHomeIcon);
