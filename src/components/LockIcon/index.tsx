import React from 'react';
import { Svg, Path, G } from 'react-native-svg';
import { IconProps } from '../../utilities/generalInterface';
import colors from "../../utilities/colors";

const { memo } = React;

const LockIcon: React.FC<IconProps> = ({
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
      id="lock" viewBox="0 0 11.797 15.73"
    >
      <G id="Group_681" data-name="Group 681" transform="translate(0 0)">
        <Path id="Path_388" data-name="Path 388" d="M75.47,5.9h-.983V4.588a4.588,4.588,0,0,0-9.176,0V5.9h-.983A.328.328,0,0,0,64,6.226v8.193a1.312,1.312,0,0,0,1.311,1.311h9.176A1.312,1.312,0,0,0,75.8,14.419V6.226A.328.328,0,0,0,75.47,5.9Zm-4.59,6.846a.328.328,0,0,1-.326.364H69.243a.328.328,0,0,1-.326-.364l.207-1.859a1.3,1.3,0,0,1-.536-1.054,1.311,1.311,0,0,1,2.622,0,1.3,1.3,0,0,1-.536,1.054ZM72.52,5.9H67.277V4.588a2.622,2.622,0,1,1,5.243,0Z" transform="translate(-64)" />
      </G>
    </Svg>



  );
};

LockIcon.defaultProps = {
  width: 11.797,
  height: 15.73,
  color: colors.black,
};

export default memo(LockIcon);
