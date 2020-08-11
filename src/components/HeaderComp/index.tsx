import React from 'react'
import { View, SafeAreaView, ImageBackground, StatusBar, TouchableOpacity } from "react-native";
import HeaderProps from './index.interface'
import TextComp from '../Text'
import Icon from '../Icon'
import registeredStyles from '../../utilities/registeredStyles'
import styles from './styles';

const HeaderLogo = require("../../assests/eventfulAssests/images/HeaderLogo.png")

const { useCallback, memo } = React
const {
    rowStyle,
    horizontalCenteredFlex,
    verticalCenteredFlex,
    spaceBetweenItems,
    fullWidth,
    fullHeight
} = registeredStyles


const HeaderComp: React.FC<HeaderProps> = ({
    navigation: { goBack, openDrawer, navigate },
    screenTitle,
    rightIcon,
    leftIcon,
    tabView,
    headerStyle,
    titleStyle,
    pressDrawer,
    rightView,
    leftView,
    leftContainerStyle
}): JSX.Element => {

    const handleBack = useCallback(() => {
        if (!pressDrawer) {
            goBack()
        } else {
            openDrawer()
        }
    }, [goBack, pressDrawer])

    return (
        <SafeAreaView>
            <ImageBackground source={HeaderLogo} style={[
                styles.HeaderStyle,
                // fullWidth,
                verticalCenteredFlex,
                headerStyle
            ]}>
                <View style={[
                    rowStyle,
                    horizontalCenteredFlex,
                    spaceBetweenItems,
                    // fullHeight,
                    styles.viewHeadStyle
                ]}>
                    {leftIcon ? <Icon containerStyle={leftContainerStyle} children={leftIcon} onPress={handleBack} /> : leftView ? leftView : <View />}
                    <TextComp
                        children={screenTitle}
                        textStyle={[styles.titleStyle, titleStyle]}
                    />
                    {rightIcon ? <Icon children={rightIcon} /> : <View />}
                </View>
                {tabView && tabView}
            </ImageBackground>
        </SafeAreaView>
    )

}

export default memo(HeaderComp)