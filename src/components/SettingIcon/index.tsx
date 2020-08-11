import React from 'react';
import { Svg, G, Line } from 'react-native-svg';
import { IconProps } from '../../utilities/generalInterface';
import colors from "../../utilities/colors";

const { memo } = React;

const MenuIcon: React.FC<IconProps> = ({
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
            viewBox="0 0 21.622 14.367"
        >
            <G
                id="Group_1037"
                data-name="Group 1037"
                transform="translate(2334.5 -36.5)"
            >
                <Line
                    id="Line_43"
                    data-name="Line 43"
                    x2="21.622"
                    transform="translate(-2334.5 37.5)"
                    fill="none"
                    stroke="#fff"
                    stroke-width="2"
                />
                <Line
                    id="Line_44"
                    data-name="Line 44"
                    x2="21.622"
                    transform="translate(-2334.5 43.684)"
                    fill="none"
                    stroke="#fff"
                    stroke-width="2"
                />
                <Line
                    id="Line_45"
                    data-name="Line 45"
                    x2="21.622"
                    transform="translate(-2334.5 49.867)"
                    fill="none"
                    stroke="#fff"
                    stroke-width="2"
                />
            </G>
        </Svg>
    );
};

MenuIcon.defaultProps = {
    width: 25,
    height: 25,
    color: colors.white,
};

export default memo(MenuIcon);
