import React from 'react';
import { Svg, Path } from 'react-native-svg';
import { IconProps } from '../../utilities/generalInterface';
import colors from '../../utilities/colors';

const { memo } = React;

const BackIcon: React.FC<IconProps> = ({
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
      viewBox="0 0 18.356 18.356">
      <Path
        id="Path_153"
        data-name="Path 153"
        d="M9.178,0,7.509,1.669l6.317,6.317H0V10.37H13.826L7.509,16.687l1.669,1.669,9.178-9.178Z"
        transform="translate(18.356 18.356) rotate(180)"
        fill={color} />

    </Svg>


  );
};

BackIcon.defaultProps = {
  width: 18.356,
  height: 18.356,
  color: colors.white
};

export default memo(BackIcon);
