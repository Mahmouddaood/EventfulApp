import React from 'react';
import { Svg, Path, G } from 'react-native-svg';
import { IconProps } from '../../utilities/generalInterface';
import colors from "../../utilities/colors";

const { memo } = React;

const ProfileIcon: React.FC<IconProps> = ({
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
      viewBox="0 0 23.397 25.223"
    >
      <G id="man_8_" transform="translate(0.35 -1.351)">
        <G id="man_9_" transform="translate(0 -1)">
          <Path id="Path_2833" data-name="Path 2833" d="M120.716,355.9l-3.121-1.6c-2.081-1.027-2.175-.913-2.364-.456l-.095.114c-.662,1.37-3.121,5.022-3.688,5.136-.662-.114-3.215-3.995-3.688-5.136l-.095-.114c-.189-.342-.284-.685-2.459.456l-3.121,1.6a4.281,4.281,0,0,0-1.986,3.652v4.68h22.7v-4.566A4.807,4.807,0,0,0,120.716,355.9Zm-19.765,7.3v-3.538a3.17,3.17,0,0,1,1.419-2.625l3.121-1.6q.993-.514,1.419-.685c.567,1.027,3.215,5.479,4.445,5.479s3.783-4.451,4.445-5.479q.426.171,1.419.685l3.121,1.6a3.34,3.34,0,0,1,1.419,2.625V363.2Z" transform="translate(-100.1 -337.004)" fill="#fff" stroke="#fff" stroke-width="0.7" />
          <Path id="Path_2834" data-name="Path 2834" d="M111.7,353.378c-2.932,0-5.2-4.647-5.2-7.682a5.408,5.408,0,0,1,5.2-5.6,5.469,5.469,0,0,1,5.2,5.6C116.9,348.731,114.633,353.378,111.7,353.378Zm0-12.33a4.459,4.459,0,0,0-4.256,4.647c0,2.561,1.986,6.734,4.256,6.734s4.256-4.173,4.256-6.734A4.459,4.459,0,0,0,111.7,341.048Z" transform="translate(-100.448 -337.399)" fill="#fff" stroke="#fff" stroke-width="0.7" />
        </G>
      </G>
    </Svg>


  );
};

ProfileIcon.defaultProps = {
  width: 22.397,
  height: 22.223,
  color: colors.white,
};

export default memo(ProfileIcon);
