import React from 'react';
import { Svg, Path, G, Ellipse } from 'react-native-svg';
import { IconProps } from '../../utilities/generalInterface';
import colors from "../../utilities/colors";

const { memo } = React;

const AngryIcon: React.FC<IconProps> = ({
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
            viewBox="0 0 52.65 50.25">
            <G id="laughing_1_" data-name="laughing (1)" transform="translate(-3.929 -47.82)">
                <Ellipse id="Ellipse_164" data-name="Ellipse 164" cx="25.682" cy="25.125" rx="25.682" ry="25.125" transform="translate(5.214 47.82)" fill="#f6ee86" />
                <Path id="Path_3163" data-name="Path 3163" d="M86.128,98.445c-35.657,2.177-38.756-25.421-24.241-42.8A25.225,25.225,0,0,0,43.2,79.824c0,13.876,11.5,25.125,25.682,25.125a25.909,25.909,0,0,0,17.242-6.5Z" transform="translate(-37.989 -6.879)" fill="#eed076" />
                <G id="Group_1218" data-name="Group 1218" transform="translate(8.868 66.341)">
                    <G id="Group_1216" data-name="Group 1216" transform="translate(0 2.81)">
                        <Path id="Path_3164" data-name="Path 3164" d="M85.35,240.5c0,2.611-2.656,4.73-5.935,4.731s-5.939-2.114-5.94-4.725,2.656-4.73,5.935-4.731S85.349,237.885,85.35,240.5Z" transform="translate(-73.475 -234.419)" fill="#e7889d" />
                        <Path id="Path_3165" data-name="Path 3165" d="M340.133,240.367c0,2.611,2.661,4.727,5.94,4.725s5.936-2.12,5.935-4.731-2.661-4.727-5.94-4.725-5.936,2.12-5.935,4.731Z" transform="translate(-307.95 -234.3)" fill="#e7889d" />
                    </G>
                    <G id="Group_1217" data-name="Group 1217" transform="translate(5.664 2)">
                        <Path id="Path_3167" data-name="Path 3167" d="M126.962,201.385a.905.905,0,0,1,.905.9,3.731,3.731,0,0,1-3.729,3.733h0a3.735,3.735,0,0,1-3.731-3.729.905.905,0,0,1,.9-.906h0a.905.905,0,0,1,.905.9,1.923,1.923,0,0,0,1.921,1.92h0a1.921,1.921,0,0,0,1.92-1.922.905.905,0,0,1,.9-.906Z" transform="translate(-95.143 -201.385)" fill="#4e5660" />
                        <Path id="Path_3168" data-name="Path 3168" d="M336.277,201.28a.905.905,0,0,1,.905.9,3.736,3.736,0,0,1-3.729,3.733h0a3.735,3.735,0,0,1-3.731-3.729.905.905,0,0,1,.9-.906h0a.905.905,0,0,1,.905.9,1.923,1.923,0,0,0,1.921,1.92h0a1.923,1.923,0,0,0,1.92-1.922.905.905,0,0,1,.9-.906Z" transform="translate(-329.72 -201.267)" fill="#4e5660" />
                        <Path id="Path_3175" data-name="Path 3175" d="M336.148,201.28a.887.887,0,0,1,.887.887,3.662,3.662,0,0,1-3.656,3.66h0a3.662,3.662,0,0,1-3.658-3.656.887.887,0,0,1,.887-.888h0a.887.887,0,0,1,.887.887,1.885,1.885,0,0,0,1.883,1.882h0a1.885,1.885,0,0,0,1.882-1.884.887.887,0,0,1,.887-.888Z" transform="translate(350.037 214.839) rotate(180)" fill="#4e5660" />
                    </G>
                </G>
                <Path id="Path_3171" data-name="Path 3171" d="M13.754,275.72c-.191-4.241-2.918-5.944-3.175-10.006a1.544,1.544,0,0,0-2.309-1.24C4.528,266.623,0,271.266,0,276.194a6.882,6.882,0,0,0,6.865,6.882A6.974,6.974,0,0,0,13.754,275.72Z" transform="translate(-60.003 -180.531) rotate(-14)" fill="#a2ddfd" />
                <Path id="Path_3172" data-name="Path 3172" d="M13.315,307.954C4.231,309.045,2.623,302,3.563,297.728,1.539,299.969,0,302.743,0,305.616a6.858,6.858,0,0,0,13.315,2.338Z" transform="translate(-67.121 -209.079) rotate(-14)" fill="#7acdf9" />
            </G>
        </Svg >
    );
};

AngryIcon.defaultProps = {
    width: 50.65,
    height: 50.25,
    color: colors.white,
};

export default memo(AngryIcon);
