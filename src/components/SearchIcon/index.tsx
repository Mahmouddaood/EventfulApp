import React from 'react';
import { Svg, Path, G } from 'react-native-svg';
import { IconProps } from '../../utilities/generalInterface';
import colors from "../../utilities/colors";

const { memo } = React;

const SearchIcon: React.FC<IconProps> = ({
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
      viewBox="0 0 21.711 21.364"
    >
      <G id="Search_1_"
        transform="translate(0.5 0.5)"
      >
        <Path
          id="search_1_2"
          data-name="search_1_"
          d="M120.724,120.044l-3.986-3.986a9.515,9.515,0,1,0-7.106,3.206,9.365,9.365,0,0,0,6.672-2.773l3.986,3.986a.433.433,0,0,0,.52,0A.943.943,0,0,0,120.724,120.044Zm-11.179-1.386a8.839,8.839,0,1,1,8.839-8.839A8.766,8.766,0,0,1,109.545,118.658Z"
          transform="translate(-100.1 -100.2)"
          // fill="#fff"
          // stroke="#fff"
          stroke-width="1"
        />
      </G>
    </Svg>

  );
};

SearchIcon.defaultProps = {
  width: 10,
  height: 10,
  color: colors.white,
};

export default memo(SearchIcon);
