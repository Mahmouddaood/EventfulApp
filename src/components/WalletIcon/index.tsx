import React from 'react';
import { Svg, Path, G } from 'react-native-svg';
import { IconProps } from '../../utilities/generalInterface';
import colors from "../../utilities/colors";

const { memo } = React;

const WalletIcon: React.FC<IconProps> = ({
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
      viewBox="0 0 57.005 57.577"
    >
      <G id="wallet" transform="translate(0.25 0.25)">
        <Path
          id="Path_2807"
          data-name="Path 2807"
          d="M1.681,26.589H4.42v-12.6A5.483,5.483,0,0,1,9.9,8.515h3.709L17.4,1.69A3.286,3.286,0,0,1,21.871.414l14.567,8.1H52.709a5.483,5.483,0,0,1,5.477,5.477V51.6a5.483,5.483,0,0,1-5.477,5.477H9.9A5.483,5.483,0,0,1,4.42,51.6V40.555H1.681ZM9.9,10.705a3.28,3.28,0,0,0-3.25,2.921h4.117l1.623-2.921ZM20.8,2.329a1.116,1.116,0,0,0-1.489.425L13.27,13.626H41.121ZM6.61,51.6A3.29,3.29,0,0,0,9.9,54.887H52.709A3.29,3.29,0,0,0,56,51.6V13.992a3.29,3.29,0,0,0-3.286-3.286H40.377l5.254,2.922h6.394a1.1,1.1,0,1,1,0,2.191H6.61V26.59h8.011a6.756,6.756,0,0,1,6.748,6.748v.471a6.756,6.756,0,0,1-6.748,6.748H6.61V51.6ZM3.872,38.365H14.621a4.562,4.562,0,0,0,4.557-4.557v-.471a4.562,4.562,0,0,0-4.557-4.557H3.872Zm7.394-4.7a2.419,2.419,0,1,0,2.419-2.419A2.418,2.418,0,0,0,11.266,33.662Z"
          transform="translate(-1.681)"
          fill="#fff" stroke="#fff"
          stroke-width="0.5"
        />
      </G>
    </Svg>


  );
};

WalletIcon.defaultProps = {
  width: 57.005,
  height: 57.577,
  color: colors.white,
};

export default memo(WalletIcon);
