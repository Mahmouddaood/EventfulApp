import React from 'react';
import { Svg, Path, G, Ellipse } from 'react-native-svg';
import { IconProps } from '../../utilities/generalInterface';
import colors from "../../utilities/colors";

const { memo } = React;

const LaughingIcon: React.FC<IconProps> = ({
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
                <Path id="Path_3163" data-name="Path 3163" d="M86.128,98.445c-35.657,2.177-38.756-25.421-24.241-42.8A25.225,25.225,0,0,0,43.2,79.824c0,13.876,11.5,25.125,25.682,25.125a25.909,25.909,0,0,0,17.242-6.5Z" transform="translate(-37.989 -6.879)" fill="#eed076" />
                <G id="Group_1218" data-name="Group 1218" transform="translate(8.868 66.341)">
                    <G id="Group_1216" data-name="Group 1216" transform="translate(0 2.81)">
                        <Path id="Path_3164" data-name="Path 3164" d="M85.35,240.5c0,2.611-2.656,4.73-5.935,4.731s-5.939-2.114-5.94-4.725,2.656-4.73,5.935-4.731S85.349,237.885,85.35,240.5Z" transform="translate(-73.475 -234.419)" fill="#e7889d" />
                        <Path id="Path_3165" data-name="Path 3165" d="M340.133,240.367c0,2.611,2.661,4.727,5.94,4.725s5.936-2.12,5.935-4.731-2.661-4.727-5.94-4.725-5.936,2.12-5.935,4.731Z" transform="translate(-307.95 -234.3)" fill="#e7889d" />
                        <Path id="Path_3166" data-name="Path 3166" d="M219.408,228.5c0-3.6-2.608-3.934-5.822-3.932s-5.82.341-5.818,3.938,2.609,6.511,5.823,6.51S219.41,232.095,219.408,228.5Z" transform="translate(-191.56 -224.566)" fill="#4e5660" />
                    </G>
                    <G id="Group_1217" data-name="Group 1217" transform="translate(5.664)">
                        <Path id="Path_3167" data-name="Path 3167" d="M121.31,206.023a.905.905,0,0,1-.905-.9,3.731,3.731,0,0,1,3.729-3.733h0a3.735,3.735,0,0,1,3.731,3.729.905.905,0,0,1-.9.906h0a.905.905,0,0,1-.905-.9,1.923,1.923,0,0,0-1.921-1.92h0a1.921,1.921,0,0,0-1.92,1.922.905.905,0,0,1-.9.906Z" transform="translate(-120.405 -201.372)" fill="#4e5660" />
                        <Path id="Path_3168" data-name="Path 3168" d="M330.625,205.918a.905.905,0,0,1-.905-.9,3.736,3.736,0,0,1,3.729-3.733h0a3.735,3.735,0,0,1,3.731,3.729.905.905,0,0,1-.9.906h0a.905.905,0,0,1-.905-.9,1.923,1.923,0,0,0-1.921-1.92h0a1.923,1.923,0,0,0-1.92,1.922.905.905,0,0,1-.9.906Z" transform="translate(-304.458 -201.28)" fill="#4e5660" />
                    </G>
                </G>
            </G>
        </Svg>
    );
};

LaughingIcon.defaultProps = {
    width: 51.365,
    height: 50.25,
    color: colors.white,
};

export default memo(LaughingIcon);
