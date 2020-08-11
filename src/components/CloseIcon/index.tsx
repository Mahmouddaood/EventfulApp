import React from 'react';
import { Svg, Path, G } from 'react-native-svg';
import { IconProps } from '../../utilities/generalInterface';
import colors from "../../utilities/colors";

const { memo } = React;

const CloseIcon: React.FC<IconProps> = ({
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
      x="0px" y="0px"
      viewBox="0 0 512 512">
      <G>
        <G>
          <G>
            <Path d="M256,0C114.844,0,0,114.844,0,256s114.844,256,256,256s256-114.844,256-256S397.156,0,256,0z M256,490.667
				C126.604,490.667,21.333,385.396,21.333,256S126.604,21.333,256,21.333S490.667,126.604,490.667,256S385.396,490.667,256,490.667
				z"/>
            <Path d="M359.542,152.458c-4.167-4.167-10.917-4.167-15.083,0L256,240.917l-88.458-88.458c-4.167-4.167-10.917-4.167-15.083,0
				c-4.167,4.167-4.167,10.917,0,15.083L240.917,256l-88.458,88.458c-4.167,4.167-4.167,10.917,0,15.083
				c2.083,2.083,4.813,3.125,7.542,3.125s5.458-1.042,7.542-3.125L256,271.083l88.458,88.458c2.083,2.083,4.813,3.125,7.542,3.125
				c2.729,0,5.458-1.042,7.542-3.125c4.167-4.167,4.167-10.917,0-15.083L271.083,256l88.458-88.458
				C363.708,163.375,363.708,156.625,359.542,152.458z"/>
          </G>
        </G>
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

CloseIcon.defaultProps = {
  width: 24,
  height: 24,
  color: colors.white,
  iconStyle: {
    backgroundColor: colors.placeholder,
    borderRadius: 12
  }
};

export default memo(CloseIcon);
