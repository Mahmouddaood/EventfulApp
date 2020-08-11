import React from 'react';
import { Svg, Path } from 'react-native-svg';
import { IconProps } from '../../utilities/generalInterface';
import colors from "../../utilities/colors";

const { memo } = React;

const UnionIcon: React.FC<IconProps> = ({
  width,
  height,
  color,
  onPress,
  iconStyle
}): JSX.Element => {

  return (
    <Svg viewBox="0 0 21 21">
      <Path
        id="Union_1"
        data-name="Union 1"
        d="M0,21V18.375c0-2.888,4.725-5.251,10.5-5.251S21,15.487,21,18.375V21ZM5.249,5.251A5.25,5.25,0,1,1,10.5,10.5,5.25,5.25,0,0,1,5.249,5.251Z"
        fill="#dfdede"
      />
    </Svg>



  );
};

UnionIcon.defaultProps = {
  width: 21,
  height: 21,
  color: colors.black,
};

export default memo(UnionIcon);
