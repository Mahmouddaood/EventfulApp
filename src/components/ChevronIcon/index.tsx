import React from 'react';
import { Svg, Path } from 'react-native-svg';
import { IconProps } from '../../utilities/generalInterface';
import colors from '../../utilities/colors'
import styles from './styles';
const { memo } = React;

interface ChevronIconProps extends IconProps {
    initialDirection?: string
}

const ChevronIcon: React.FC<ChevronIconProps> = ({
    width,
    height,
    color,
    initialDirection,
    onPress
}): JSX.Element => {
    return (
        <Svg
            viewBox="0 0 6.202 10.097"
            style={[initialDirection === "left" ? styles.left : styles.right]}
            width={width}
            height={height}
            color={color}
            fill={color}
            onPress={onPress}>
            <Path
                id="Path_11"
                d="M5.167 4.52a.644.644 0 0 0-.2-.465L1.094.178a.646.646 0 1 0-.867.956l3.382 3.385L.181 7.947a.646.646 0 0 0 .913.913l3.875-3.874a.644.644 0 0 0 .2-.465z"
            />
        </Svg>
    );
};

ChevronIcon.defaultProps = {
    width: 10,
    height: 10,
    color: colors.black,
    initialDirection: 'right'
};

export default memo(ChevronIcon);
