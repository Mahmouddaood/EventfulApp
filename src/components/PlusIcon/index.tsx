import React from 'react';
import { Svg, Text, TSpan } from 'react-native-svg';
import { IconProps } from '../../utilities/generalInterface';
import colors from "../../utilities/colors";

const { memo } = React;

const PlusIcon: React.FC<IconProps> = ({
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
      viewBox="0 0 28 57">
      <Text id="_"
        data-name="+"
        transform="translate(14 46)"
        fill="#c5c5c5"
        font-size="43"
        font-family="SegoeUI-Light, Segoe UI"
        font-weight="300"
      >
        <TSpan x="-13.973" y="0">+</TSpan></Text>
    </Svg>

  );
};

// PlusIcon.defaultProps = {
//   width: 60,
//   height: 210,
//   color: colors.white,
//   iconStyle: {
//     top: -120
//   }
// };

export default memo(PlusIcon);
