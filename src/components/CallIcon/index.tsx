import React from 'react';
import { Svg, Path, G } from 'react-native-svg';
import { IconProps } from '../../utilities/generalInterface';
import colors from "../../utilities/colors";

const { memo } = React;

const CallIcon: React.FC<IconProps> = ({
  width,
  height,
  color,
  onPress,
  iconStyle
}): JSX.Element => {

  return (
    <Svg
      width={"13"}
      height={height}
      fill={color}
      style={iconStyle}
      onPress={onPress}
      viewBox="0 0 16.001 15.965">
      <G id="call-answer" transform="translate(0 -0.394)">
        <G id="Group_2075" data-name="Group 2075" transform="translate(0 0.394)">
          <G id="Group_2074" data-name="Group 2074" transform="translate(0 0)">
            <Path id="Path_3205" data-name="Path 3205" d="M15.642,13.021,13.171,10.55a1.288,1.288,0,0,0-1.817.034l-1.245,1.245-.246-.137A12.389,12.389,0,0,1,6.869,9.526a12.458,12.458,0,0,1-2.17-3c-.046-.083-.09-.164-.134-.24L5.4,5.452l.411-.411a1.287,1.287,0,0,0,.033-1.817L3.373.752A1.287,1.287,0,0,0,1.557.786l-.7.7.019.019A4.027,4.027,0,0,0,.305,2.518,4.2,4.2,0,0,0,.05,3.545C-.276,6.25.96,8.722,4.315,12.077c4.637,4.637,8.374,4.287,8.535,4.269a4.175,4.175,0,0,0,1.03-.259,4.014,4.014,0,0,0,1.009-.571l.015.014.706-.691A1.29,1.29,0,0,0,15.642,13.021Z" transform="translate(0 -0.394)" fill="#c5c5c5" />
          </G>
        </G>
      </G>
    </Svg>


  );
};

CallIcon.defaultProps = {
  width: 16.001,
  height: 15.965,
  color: colors.black,
  iconStyle: { top: 5 }

};

export default memo(CallIcon);
