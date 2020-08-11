import React from 'react';
import { Svg, Path, G } from 'react-native-svg';
import { IconProps } from '../../utilities/generalInterface';
import colors from "../../utilities/colors";

const { memo } = React;

const EditPenIcon: React.FC<IconProps> = ({
  width,
  height,
  color,
  onPress,
  iconStyle
}): JSX.Element => {

  return (
    <Svg
      width={"31"}
      height={"35"}
      fill={color}
      style={iconStyle}
      onPress={onPress}
      id="Capa_1"
      viewBox="0 0 32.001 32.001"
    >
      <G>
        <Path d="M25.96,14.751c0.101,0.82,0.16,1.701,0.16,2.631c0,5.307-1.933,8.988-2.015,9.143L23.9,26.908H2.26l-0.215-0.33
       C1.963,26.449,0,23.357,0,17.384c0-5.97,1.963-9.064,2.045-9.193l0.215-0.33H23.9l0.207,0.385c0.021,0.037,0.158,0.295,0.349,0.744
       l-1.104,1.137c-0.131-0.341-0.248-0.619-0.338-0.818H3.078c-0.459,0.9-1.631,3.631-1.631,8.076c0,4.476,1.168,7.183,1.629,8.076
       H23.01c0.469-1.037,1.662-4.09,1.662-8.076c0-0.44-0.018-0.87-0.041-1.289L25.96,14.751z M20.533,21.142H9.795v1.379h10.738V21.142
       z M17.037,20.058l0.84-0.187l-0.652-0.654L17.037,20.058z M20.143,19.368l-2.416-2.414l-0.442,1.996l0.862,0.862L20.143,19.368z
        M20.706,18.8L32.001,7.508l-2.414-2.415L18.292,16.384L20.706,18.8z M16.058,11.959H4.186v1.045h11.872V11.959z M4.186,18.088
       h8.027v-1.045H4.186V18.088z M4.186,15.624h9.809v-1.045H4.186V15.624z"/>
      </G>
      <G>
      </G>
      <G>
      </G>
      <G>
      </G>
      <G>
      </G>
      <G>
      </G>
      <G>
      </G>
      <G>
      </G>
      <G>
      </G>
      <G>
      </G>
      <G>
      </G>
      <G>
      </G>
      <G>
      </G>
      <G>
      </G>
      <G>
      </G>
      <G>
      </G>


    </Svg>



  );
};

EditPenIcon.defaultProps = {
  width: 30,
  height: 30,
  color: "#dfdede",
  iconStyle: { top: -9, right: 5 }
};

export default memo(EditPenIcon);
