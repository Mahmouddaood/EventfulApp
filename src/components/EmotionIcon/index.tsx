import React from 'react';
import { Svg, Path, G, Ellipse, Rect } from 'react-native-svg';
import { IconProps } from '../../utilities/generalInterface';
import colors from "../../utilities/colors";

const { memo } = React;

const EmotionIcon: React.FC<IconProps> = ({
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
            id="Layer"
            viewBox="0 0 51.365 50.25"
        >
            <G id="laughing_1_" data-name="laughing (1)" transform="translate(-5.214 -47.82)">
                <Ellipse id="Ellipse_164" data-name="Ellipse 164" cx="25.682" cy="25.125" rx="25.682" ry="25.125" transform="translate(5.214 47.82)" fill="#f6ee86" />
                <Ellipse id="Path_3163" data-name="Path 3163"
                    // d="M86.128,98.445c-35.657,2.177-38.756-25.421-24.241-42.8A25.225,25.225,0,0,0,43.2,79.824c0,13.876,11.5,25.125,25.682,25.125a25.909,25.909,0,0,0,17.242-6.5Z" 
                    transform="translate(-37.989 -6.879)"
                    fill="#eed076" />
                <G id="Group_1218" data-name="Group 1218" transform="translate(8.868 66.341)">
                    <G id="Group_1216" data-name="Group 1216" transform="translate(0 2.81)">
                        <Path id="Path_3164" data-name="Path 3164" d="M85.35,240.5c0,2.611-2.656,4.73-5.935,4.731s-5.939-2.114-5.94-4.725,2.656-4.73,5.935-4.731S85.349,237.885,85.35,240.5Z" transform="translate(-73.475 -234.419)" fill="#e7889d" />
                        <Path id="Path_3165" data-name="Path 3165" d="M340.133,240.367c0,2.611,2.661,4.727,5.94,4.725s5.936-2.12,5.935-4.731-2.661-4.727-5.94-4.725-5.936,2.12-5.935,4.731Z" transform="translate(-307.95 -234.3)" fill="#e7889d" />
                    </G>
                    <Rect id="Rectangle_4042" data-name="Rectangle 4042" width="2" height="5" rx="1" transform="translate(8.969 2.019)" fill="#4e5660" />
                    <Rect id="Rectangle_4043" data-name="Rectangle 4043" width="2" height="5" rx="1" transform="translate(32.969 2.019)" fill="#4e5660" />
                </G>
                <Path id="Path_3176" data-name="Path 3176" d="M17.866,85.122s5.444-7.041,17.451-4.676" transform="matrix(-0.966, -0.259, 0.259, -0.966, 35.984, 168.515)" fill="none" stroke="#4e5660" stroke-linecap="round" stroke-width="2" />
            </G>
        </Svg>
    );
};

EmotionIcon.defaultProps = {
    width: 51.365,
    height: 50.25,
    color: colors.white,
};

export default memo(EmotionIcon);
