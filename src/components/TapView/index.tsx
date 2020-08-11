import React, { useMemo } from 'react'
import {
    View,
    TouchableOpacity
} from 'react-native'
import TextComp from '../Text'
import registeredStyles from '../../utilities/registeredStyles'
import styles from './styles'
import TapProps, { tapData, TapDataProps } from './index.interface'

const {
    rowStyle,
    spaceBetweenItems,
    fullWidth,
    horizontalCenteredFlex,
    verticalCenteredFlex,
    selfCentered,
    flexStyle,
    fullHeight
} = registeredStyles

const {
    useCallback,
    memo,
    useState
} = React

const TapView: React.FC<TapProps> = ({
    handlePress,
    selected,
    isRtl,
    taps,
    tabItemStyle,
    tabStyle
}): JSX.Element => {

    console.log("isRt", isRtl)

    const onPress = useCallback((type: string) => () => {
        if (handlePress) {
            console.log("Ahooo")
            handlePress(type)
        }
    }, [handlePress])

    const BottomLine = useMemo(() => <View style={[fullWidth, styles.bottomLineStyle]} />
        , [])

    const tapRenderer = useCallback((tap: TapDataProps, idx: number): JSX.Element =>
        <TouchableOpacity
            key={idx}
            onPress={onPress(tap.view)}
            style={[
                styles.tabItemStyle,
                fullHeight,
                verticalCenteredFlex,
                horizontalCenteredFlex,
                tabItemStyle
            ]}>
            <TextComp center children={tap.title} fontSize={16} />
            {selected === tap.view && BottomLine}
        </TouchableOpacity>
        , [
            selected,
            BottomLine,
            onPress
        ])

    return (
        <View style={[
            styles.tabStyle,
            rowStyle,
            fullWidth,
            tabStyle
        ]}>

            {taps(isRtl).map(tapRenderer)}

            {/* <TouchableOpacity
                onPress={onPress("Profile")}
                style={[
                    styles.tabItemStyle,
                    fullHeight,
                    verticalCenteredFlex,
                    horizontalCenteredFlex
                ]}>
                <TextComp center children="Profile" fontSize={16} />
            </TouchableOpacity>
            <TouchableOpacity
                onPress={onPress("Events")}
                style={[
                    styles.tabItemStyle,
                    fullHeight,
                    verticalCenteredFlex,
                    horizontalCenteredFlex
                ]}>
                <TextComp center children="Events" fontSize={16} />

            </TouchableOpacity>
            <TouchableOpacity
                onPress={onPress("Follow")}
                style={[
                    styles.tabItemStyle,
                    fullHeight,
                    verticalCenteredFlex,
                    horizontalCenteredFlex
                ]}>
                <TextComp center children="Follow" fontSize={16} />

            </TouchableOpacity> */}


        </View>


    );
}

export default memo(TapView)
