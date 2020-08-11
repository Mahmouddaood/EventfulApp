import React from 'react';
import { Svg, Path, G } from 'react-native-svg';
import { IconProps } from '../../utilities/generalInterface';
import colors from "../../utilities/colors";

const { memo } = React;

const SelectForwardIcon: React.FC<IconProps> = ({
    width,
    height,
    color,
    onPress,
    iconStyle
}): JSX.Element => {

    return (
        <Svg
            width={10}
            height={10}
            fill={colors.placeholder}
            style={iconStyle}
            onPress={onPress}
            viewBox="0 0 612.004 612.004" >
            <G>
                <G>
                    <Path d="M499.147,160.094L330.222,329.019c-6.472,6.472-15.075,10.035-24.223,10.035c-9.146,0-17.749-3.561-24.218-10.035
       L112.854,160.094c-25.822-25.817-67.674-25.817-93.491,0c-25.817,25.819-25.817,67.674,0,93.491L188.29,422.508
       c31.443,31.445,73.245,48.764,117.712,48.764s86.269-17.319,117.714-48.761l168.925-168.925c25.817-25.817,25.817-67.674,0-93.491
       C566.822,134.277,524.962,134.277,499.147,160.094z"/>
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

SelectForwardIcon.defaultProps = {
    width: 20,
    height: 20,
    color: colors.black,
    // iconStyle: { marginTop: 10 }
};

export default memo(SelectForwardIcon);
