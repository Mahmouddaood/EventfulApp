import React from 'react';
import { Svg, Path } from 'react-native-svg';
import { IconProps } from '../../utilities/generalInterface';
import colors from "../../utilities/colors";

const { memo } = React;

const TicketIcon: React.FC<IconProps> = ({
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
      viewBox="0 0 18 18">
      <Path id="ticket_1_" data-name="ticket (1)" d="M17.628,6.612a1.145,1.145,0,0,1,0-1.619L18,4.622,13.377,0,13.006.37a1.138,1.138,0,0,1-.81.335,1.138,1.138,0,0,1-.81-.335L11.016,0l-1.6,1.6.741.742-.741.741-.741-.741L0,11.016l.371.371a1.138,1.138,0,0,1,.335.81,1.138,1.138,0,0,1-.335.81L0,13.377,4.621,18l.371-.371a1.145,1.145,0,0,1,1.619,0L6.982,18l8.672-8.672-.741-.741.741-.741.742.741,1.6-1.6ZM10.984,4.657,10.2,3.872l.741-.742.786.786Zm1.571,1.571-.786-.786.741-.741.786.786ZM14.127,7.8l-.786-.786.741-.741.786.786Zm0,0" transform="translate(0.001 0.001)" fill="#c5c5c5" />

    </Svg>


  );
};

TicketIcon.defaultProps = {
  width: 17,
  height: 17,
  color: colors.placeholder,
  iconStyle: { marginTop: 7.5 }

};

export default memo(TicketIcon);
