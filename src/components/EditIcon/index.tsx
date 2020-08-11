import React from 'react';
import { Svg, G, Path, Circle } from 'react-native-svg';
import { IconProps } from '../../utilities/generalInterface';
import colors from "../../utilities/colors";

const { memo } = React;

const EditIcon: React.FC<IconProps> = ({
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
      id="Component_15_2"
      data-name="Component 15 – 2"
      viewBox="0 0 35 35"
    >
      <G
        id="Ellipse_19"
        data-name="Ellipse 19"
        fill="none"
        stroke="#6b54a4"
        stroke-width="0.5"
      >
        <Circle
          cx="17.5"
          cy="17.5"
          r="17.5"
          stroke="none"
        />
        <Circle
          cx="17.5"
          cy="17.5"
          r="17.25"
          fill="none"
        />
      </G>
      <G
        id="Icon_feather-edit-3"
        data-name="Icon feather-edit-3"
        transform="translate(5.859 5.178)"
      >
        <Path
          id="Path_3099"
          data-name="Path 3099"
          d="M18,30h7.457"
          transform="translate(-6.043 -11.496)"
          fill="none" stroke="#6b54a4"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="1"
        />
        <Path
          id="Path_3100"
          data-name="Path 3100"
          d="M15.685,4.833a1.758,1.758,0,0,1,2.486,2.486L7.814,17.675,4.5,18.5l.829-3.314Z"
          fill="none"
          stroke="#6b54a4"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="1"
        />
      </G>
    </Svg>


  );
};

EditIcon.defaultProps = {
  width: 35,
  height: 35,
  color: colors.white,
};

export default memo(EditIcon);
