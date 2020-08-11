import React from 'react';
import { Svg, Path } from 'react-native-svg';
import { IconProps } from '../../utilities/generalInterface';
import colors from "../../utilities/colors";

const { memo } = React;

const ShareIcon: React.FC<IconProps> = ({
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
      viewBox="0 0 24.592 24.592">
      <Path id="path" d="M0,0H24.592V24.592H0Z" fill="none" fill-rule="evenodd" />
      <Path id="ic_share" d="M15.3,14.747a2.27,2.27,0,0,0-1.607.7L7.845,11.687a3.257,3.257,0,0,0,.074-.634,3.257,3.257,0,0,0-.074-.634L13.624,6.7a2.33,2.33,0,0,0,1.672.733,2.594,2.594,0,0,0,2.459-2.716A2.594,2.594,0,0,0,15.3,2a2.594,2.594,0,0,0-2.459,2.716,3.257,3.257,0,0,0,.074.634L7.131,9.07a2.33,2.33,0,0,0-1.672-.733A2.594,2.594,0,0,0,3,11.053a2.594,2.594,0,0,0,2.459,2.716,2.33,2.33,0,0,0,1.672-.733L12.968,16.8a2.808,2.808,0,0,0-.066.588A2.531,2.531,0,0,0,15.3,20.034,2.531,2.531,0,0,0,17.69,17.39,2.531,2.531,0,0,0,15.3,14.747Z" transform="translate(1.918 1.279)" fill-rule="evenodd" />
    </Svg>


  );
};

ShareIcon.defaultProps = {
  width: 24.592,
  height: 24.592,
  color: colors.black,
};

export default memo(ShareIcon);
