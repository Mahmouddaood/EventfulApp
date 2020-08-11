import React from 'react';
import { Svg, Path, G } from 'react-native-svg';
import { IconProps } from '../../utilities/generalInterface';
import colors from "../../utilities/colors";

const { memo } = React;

const EventListSvg: React.FC<IconProps> = ({
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
      viewBox="0 0 16 16.001">
      <Path id="Menu" d="M-6160,15V13h16v2Zm0-7V6h16V8Zm0-7V-1h16V1Z"
        transform="translate(6160 1)" fill={color} />
    </Svg>


  );
};

EventListSvg.defaultProps = {
  width: 16,
  height: 16.001,
  color: colors.black,
  // iconStyle: { marginTop: 10 }
};

export default memo(EventListSvg);
