import React, { useState, useEffect, memo, Fragment } from "react";
import {
    View,
    ImageBackground,
    Animated,
    Dimensions,
    Image
} from 'react-native'
import BackImgProps from './index.interface'
import styles from './styles'
import TextComp from '../Text'
import registeredStyles from '../../utilities/registeredStyles'
import SearchSection from "./partials/SearchSection";
import {
    // screenWidth,
    responsiveWidth, screenHeight
} from '../../utilities/Context/responsive'
const LoginImage = require('../../assests/eventfulAssests/images/CurveOut.png')

const { width: screenWidth } = Dimensions.get('window');
const BackImage: React.FC<BackImgProps> = ({
    screenName,
    logoText,
    logoStyle,
    center,
    logoTxtStyle,
    leftIcon,
    rightIcon,
    txtStyle,
    loginImgStyle,
    anthorView,
    source,
    // searching,
    categories,
    onPressBack,
    textViewStyle
    // filterData,
    // selectedValue,
    // isRtl
}): JSX.Element => {
    // const [animated] = useState(new Animated.Value(0.3))
    // // const [itemVisible, setVisible] = useState(false)

    // useEffect(() => {
    //     console.log("sea", categories)
    //     Animated.spring(animated, {
    //         toValue: 1,
    //         friction: 1000
    //     })
    // }, [animated])


    return <View style={{ width: "100%", height: screenHeight }}>
        <Image
            source={source || LoginImage}
            style={[
                {
                    width: "100%",
                    resizeMode: "stretch",
                    height: "34%",
                    // bottom: "2%"
                    position: "absolute",
                    // marginBottom: "-60%"
                    // backgroundColor: "red"
                    // bottom: "35%",
                    // alignSelf: "center",
                    // rotation: 4,
                    // marginLeft: "2%",
                    // marginRight: "5%",
                    // marginBottom: 50,
                }
                , loginImgStyle]}
        >
        </Image>
        {anthorView && anthorView}
        {rightIcon && rightIcon}
        {(logoText || screenName || leftIcon) &&
            <View style={[logoStyle]}>
                {/* {!searching ? */}
                <View style={textViewStyle}>
                    <TextComp
                        children={screenName}
                        center={center}
                        textStyle={[logoTxtStyle]}
                    />
                    <TextComp
                        children={logoText}
                        center={center}
                        textStyle={[txtStyle]}
                    />
                </View>

                {/* : <SearchSection
isRtl={isRtl}
categories={categories}
itemVisible={itemVisible}
selectedValue={selectedValue || ""}
setVisible={setVisible}
filterData={filterData}
/>
} */}
                {leftIcon && leftIcon}
            </View>
        }

    </View>

}

BackImage.defaultProps = {
    source: LoginImage
}

export default memo(BackImage)



