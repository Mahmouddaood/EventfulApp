import React from 'react';
import { Svg, Path } from 'react-native-svg';
import { IconProps } from '../../utilities/generalInterface';
import colors from "../../utilities/colors";

const { memo } = React;

const CheckIcon: React.FC<IconProps> = ({
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
      viewBox="0 0 21.279 21.279">
      <Path
        id="Icon_awesome-check-circle"
        data-name="Icon awesome-check-circle"
        d="M21.841,11.2A10.639,10.639,0,1,1,11.2.563,10.639,10.639,0,0,1,21.841,11.2ZM9.971,16.835l7.894-7.894a.686.686,0,0,0,0-.971L16.894,7a.686.686,0,0,0-.971,0L9.486,13.438,6.48,10.432a.686.686,0,0,0-.971,0l-.971.971a.686.686,0,0,0,0,.971L9,16.835a.686.686,0,0,0,.971,0Z"
        transform="translate(-0.563 -0.563)"
        fill="#54a454"
      />
    </Svg>

  );
};

CheckIcon.defaultProps = {
  width: 21.279,
  height: 21.279,
  color: colors.white,
};

export default memo(CheckIcon);
