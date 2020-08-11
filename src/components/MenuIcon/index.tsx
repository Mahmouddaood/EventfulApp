import React from 'react';
import { Svg, Path, G } from 'react-native-svg';
import { IconProps } from '../../utilities/generalInterface';
import colors from "../../utilities/colors";

const { memo } = React;

const SettingIcon: React.FC<IconProps> = ({
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
      viewBox="0 0 23.103 23.103"
    >
      <G
        id="Icon_feather-settings"
        data-name="Icon feather-settings"
        transform="translate(-0.5 -0.5)">
        <Path
          id="Exclusion_2"
          data-name="Exclusion 2"
          d="M10.628,21.1A1.921,1.921,0,0,1,8.71,19.184V19.1A1.572,1.572,0,0,0,7.674,17.65a1.582,1.582,0,0,0-1.746.317l-.058.058a1.92,1.92,0,0,1-2.715,0,1.907,1.907,0,0,1-.562-1.358,1.931,1.931,0,0,1,.562-1.357l.058-.058a1.6,1.6,0,0,0-1.132-2.7H1.918a1.919,1.919,0,0,1,0-3.837H2A1.574,1.574,0,0,0,3.453,7.674a1.575,1.575,0,0,0-.317-1.746L3.079,5.87a1.931,1.931,0,0,1-.563-1.357A1.92,1.92,0,0,1,5.794,3.156l.058.058A1.582,1.582,0,0,0,7.6,3.53h.077a1.58,1.58,0,0,0,.959-1.448V1.918a1.919,1.919,0,0,1,3.837,0V2a1.593,1.593,0,0,0,2.7,1.132l.058-.058a1.918,1.918,0,0,1,2.715,0,1.931,1.931,0,0,1,.563,1.357,1.908,1.908,0,0,1-.563,1.358l-.058.058A1.574,1.574,0,0,0,17.573,7.6v.077a1.582,1.582,0,0,0,1.449.959h.163a1.919,1.919,0,1,1,0,3.837H19.1a1.6,1.6,0,0,0-1.132,2.7l.058.058a1.919,1.919,0,1,1-2.715,2.714l-.058-.058a1.6,1.6,0,0,0-2.7,1.132v.163A1.921,1.921,0,0,1,10.628,21.1ZM10.551,7.674a2.878,2.878,0,1,0,2.878,2.878A2.881,2.881,0,0,0,10.551,7.674Z"
          transform="translate(1.5 1.5)"
          fill="none"
          stroke="#fff"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
        />
      </G>
    </Svg >

  );
};

SettingIcon.defaultProps = {
  width: 25,
  height: 25,
  color: colors.white,
};

export default memo(SettingIcon);
