import React from 'react';
import { Svg, Path } from 'react-native-svg';
import { IconProps } from '../../utilities/generalInterface';
import colors from "../../utilities/colors";

const { memo } = React;

const BottomWalletIcon: React.FC<IconProps> = ({
  width,
  height,
  color,
  onPress,
  iconStyle
}): JSX.Element => {

  return (
    <Svg
      width={19}
      height={23}
      fill={color}
      style={iconStyle}
      onPress={onPress}
      viewBox="0 0 22.612 19.785">
      <Path id="Icon_awesome-wallet" data-name="Icon awesome-wallet" d="M20.368,6.49H3.533a.707.707,0,0,1,0-1.413H20.492A.706.706,0,0,0,21.2,4.37a2.12,2.12,0,0,0-2.12-2.12H2.826A2.826,2.826,0,0,0,0,5.076V19.209a2.826,2.826,0,0,0,2.826,2.826H20.368a2.186,2.186,0,0,0,2.243-2.12V8.61A2.186,2.186,0,0,0,20.368,6.49Zm-2,9.186a1.413,1.413,0,1,1,1.413-1.413A1.413,1.413,0,0,1,18.372,15.676Z" transform="translate(0 -2.25)" fill={color} />
    </Svg>

  );
};

BottomWalletIcon.defaultProps = {
  width: 20.612,
  height: 20.785,

  color: "#dfdede",
};

export default memo(BottomWalletIcon);
