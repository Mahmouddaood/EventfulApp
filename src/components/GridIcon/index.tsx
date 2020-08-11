import React from 'react';
import { Svg, Path } from 'react-native-svg';
import { IconProps } from '../../utilities/generalInterface';
import colors from "../../utilities/colors";

const { memo } = React;

const GridIcon: React.FC<IconProps> = ({
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
      viewBox="0 0 444 444" >
      <Path
        d="m7 0h181c3.867188 0 7 3.132812 7 7v181c0 3.867188-3.132812 7-7 7h-181c-3.867188 0-7-3.132812-7-7v-181c0-3.867188 3.132812-7 7-7zm0 0" />
      <Path d="m256 0h181c3.867188 0 7 3.132812 7 7v181c0 3.867188-3.132812 7-7 7h-181c-3.867188 0-7-3.132812-7-7v-181c0-3.867188 3.132812-7 7-7zm0 0" />
      <Path d="m7 249h181c3.867188 0 7 3.132812 7 7v181c0 3.867188-3.132812 7-7 7h-181c-3.867188 0-7-3.132812-7-7v-181c0-3.867188 3.132812-7 7-7zm0 0" />
      <Path d="m256 249h181c3.867188 0 7 3.132812 7 7v181c0 3.867188-3.132812 7-7 7h-181c-3.867188 0-7-3.132812-7-7v-181c0-3.867188 3.132812-7 7-7zm0 0" />
    </Svg>



  );
};

GridIcon.defaultProps = {
  width: 21,
  height: 21,
  color: colors.purple,
};

export default memo(GridIcon);
