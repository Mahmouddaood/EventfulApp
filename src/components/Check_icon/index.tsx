import React from 'react';
import { Svg, Path, Rect } from 'react-native-svg';
import { IconProps } from '../../utilities/generalInterface';
import colors from "../../utilities/colors";

const { memo } = React;

const TrueIcon: React.FC<IconProps> = ({
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
            data-name="Check Icon" viewBox="0 0 24 24">
            <Rect id="Bounds" width="24" height="24" fill="none" />
            <Path id="Icon" d="M9,16.2,4.8,12,3.4,13.4,9,19,21,7,19.6,5.6Z" fill="#fff" />
        </Svg>
    );
};

TrueIcon.defaultProps = {
    width: 24,
    height: 24,
    color: colors.white,
};

export default memo(TrueIcon);
