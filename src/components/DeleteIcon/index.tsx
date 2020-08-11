import React from 'react';
import { Svg, Rect, G } from 'react-native-svg';
import { IconProps } from '../../utilities/generalInterface';
import colors from "../../utilities/colors";

const { memo } = React;

const DeleteIcon: React.FC<IconProps> = ({
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
      viewBox="0 0 7.686 7.685">
      <G id="Group_2056" data-name="Group 2056" transform="translate(256.339 -417.697) rotate(45)">
        <G id="Group_1231" data-name="Group 1231" transform="translate(114.838 475.874)">
          <Rect id="Rectangle_3853" data-name="Rectangle 3853" width="1.482" height="9.387" rx="0.741" transform="translate(9.387) rotate(90)" fill="#e80e8d" />
        </G>
        <G id="Group_1233" data-name="Group 1233" transform="translate(120.272 471.922) rotate(90)">
          <Rect id="Rectangle_3853-2" data-name="Rectangle 3853" width="1.482" height="9.387" rx="0.741" transform="translate(9.387) rotate(90)" fill="#e80e8d" />
        </G>
      </G>
    </Svg>


  );
};

DeleteIcon.defaultProps = {
  width: 7.686,
  height: 7.685,
  color: colors.white,
  iconStyle: { marginTop: 10 }
};

export default memo(DeleteIcon);
