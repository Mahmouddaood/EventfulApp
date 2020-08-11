import React from 'react';
import { Svg, Path } from 'react-native-svg';
import { IconProps } from '../../utilities/generalInterface';
import colors from "../../utilities/colors";

const { memo } = React;

const DateIcon: React.FC<IconProps> = ({
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
      viewBox="0 0 10.59 10.59"
    >

      <Path
        id="Path_163"
        data-name="Path 163"
        d="M1.324,3.309V9.266H9.266V3.309ZM8.6,1.324H9.928a.625.625,0,0,1,.662.662V9.928a.625.625,0,0,1-.662.662H.662A.625.625,0,0,1,0,9.928V1.986a.625.625,0,0,1,.662-.662H1.986V.662A.625.625,0,0,1,2.647,0a.625.625,0,0,1,.662.662v.662H7.281V.662A.662.662,0,1,1,8.6.662ZM7.942,7.942H6.619V6.619H7.942Zm-1.986,0H4.633V6.619H5.957ZM7.942,5.957H6.619V4.633H7.942Zm-1.986,0H4.633V4.633H5.957ZM3.971,7.942H2.647V6.619H3.971Z"
        fill={color}
        fill-rule="evenodd"
      />
    </Svg >

  );
};

DateIcon.defaultProps = {
  width: 10.59,
  height: 10.59,
  color: colors.white,
};

export default memo(DateIcon);
