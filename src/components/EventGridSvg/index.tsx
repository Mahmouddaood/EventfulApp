import React from 'react';
import { Svg, Path, G } from 'react-native-svg';
import { IconProps } from '../../utilities/generalInterface';
import colors from "../../utilities/colors";

const { memo } = React;

const EventGridSvg: React.FC<IconProps> = ({
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
      <Path id="Union_31" data-name="Union 31" d="M951,3916v-4h4v4Zm-6,0v-4h4v4Zm-6,0v-4h4v4Zm12-6v-4h4v4Zm-6,0v-4h4v4Zm-6,0v-4h4v4Zm12-6v-4h4v4Zm-6,0v-4h4v4Zm-6,0v-4h4v4Z"
        transform="translate(-939 -3900)" fill="#6b54a4" />
    </Svg>


  );
};

EventGridSvg.defaultProps = {
  width: 16,
  height: 16.001,
  color: colors.black,
  // iconStyle: { marginTop: 10 }
};

export default memo(EventGridSvg);
