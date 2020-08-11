import React, { Fragment, useState, useEffect } from 'react'
import {
    View,
    ImageBackground,
    TouchableOpacity,
    Image,
    Text,
    Linking
} from 'react-native'
import styles from '../styles'
import TextComp from '../../../components/Text'
import Icon from '../../../components/Icon'
import registeredStyles from '../../../utilities/registeredStyles'
import colors from '../../../utilities/colors';
import { NavigationProps } from '../../../utilities/generalInterface';
import BottomGroupIcon from '../../../components/BottomGroupIcon';
import LeftArrowIcon from '../../../components/LeftArrowIcon';
import { screenWidth } from '../../../utilities/Context/responsive';

const { memo } = React
const {

    rowStyle,
    selfCentered,
    spaceBetweenItems,
    rtlRowStyle
} = registeredStyles
const CurveImg = require('../../../assests/eventfulAssests/images/curve2.png')

interface EventImgProps extends NavigationProps {
    onNavigateBack: () => void,
    onNavigateProfile: () => void,
    isRtl?: boolean,
    eventImage?: string | any,
    setImageModal?: ((b: boolean) => void) | any,
    onLine: boolean,
    eventId?: number
}

const EventImgView: React.FC<EventImgProps> = ({
    isRtl,
    onNavigateBack,
    onNavigateProfile,
    eventImage,
    setImageModal,
    navigation,
    onLine,
    eventId
}): JSX.Element => {

    return <TouchableOpacity onPress={() => setImageModal(true)} style={{
        // bottom: 0,
        width: screenWidth,
        marginBottom: 200,
        // position: "absolute",
        height: 280,
    }}>
        <Image source={eventImage} style={{
            width: "100%",
            height: 250,
            position: "absolute",
            opacity: 0.9

            // resizeMode: "stretch"
        }} />
        <Image source={CurveImg} style={{
            width: "100%",
            bottom: 0,
            position: "absolute",
            height: "40%",
            resizeMode: "stretch"

        }} />
        {/* <MaskShape /> */}
        <View
            style={[
                styles.iconContentStyle,
                rowStyle,
                selfCentered,
                spaceBetweenItems,
                isRtl && rtlRowStyle,
            ]}
        >
            <Icon children={<LeftArrowIcon
                width={23} height={20}
                iconStyle={{
                    bottom: 5,
                    marginEnd: 10
                }}
                color={colors.white} onPress={onNavigateBack} />} />
            <Icon children={<BottomGroupIcon
                width={19} height={19}
                iconStyle={{
                    rotation: -0.5
                }}
                color={colors.white} onPress={navigation.openDrawer} />} />
        </View>
        {onLine && <TouchableOpacity style={{
            width: 50,
            height: 25,
            paddingBottom: 2,
            alignSelf: "flex-end",
            right: 15,
            justifyContent: "center",
            alignItems: "center",
            top: 48,
            backgroundColor: "#5cb85c",
            borderRadius: 7
        }}
            onPress={() => Linking.openURL("http://www.eventful.sa/event/" + eventId)}
        >
            <TextComp children={"online"} fontSize={15} />

        </TouchableOpacity>
        }
    </TouchableOpacity>

    /* </ImageBackground> */


    /* <ImageBackground style={{
            width: 430,
            height: 300,
            marginBottom: 150,
            borderBottomRightRadius: 180,
            rotation: 12,
            bottom: 60,
            right: 33,
            opacity: 0.8
        }} source={EventShadow}>
            <Image source={eventImage} style={{
                backfaceVisibility: "hidden",
                overflow: "hidden",
                flex: 1,
                resizeMode: "stretch",
                borderBottomRightRadius: imgHeight > 500 ? 120 : 80,
                aspectRatio: 1.35,
                rotation: 9,
                bottom: 30,
                // top: 95,
                // alignSelf: "center",
                marginTop: 2
            }}></Image>
            <View
                style={[
                    styles.iconContentStyle,
                    rowStyle,
                    selfCentered,
                    spaceBetweenItems,
                    isRtl && rtlRowStyle,
                ]}
            >
                <Icon children={<BackIcon
                    width={23} height={20}
                    color={colors.white} onPress={onNavigateBack} />} />
                <Icon children={<BottomGroupIcon
                    width={19} height={19}
                    iconStyle={{
                        rotation: -0.5
                    }}
                    color={colors.white} onPress={navigation.openDrawer} />} />
                {/* <Icon children={<ProfileIcon width={22} height={24} onPress={onNavigateProfile} />} /> */
    /* </View> */
    /* // </ImageBackground> */
    // </TouchableOpacity>
}
export default memo(EventImgView)








// <TouchableOpacity onPress={() => setImageModal(true)}>
//         <View style={{
//             width: "120%",
//             height: 280,
//             right: 60,
//             // backgroundColor: "#000",
//             marginBottom: 300,
//             borderBottomRightRadius: 100,
//             borderBottomLeftRadius: 150,
//             rotation: 18,
//             bottom: 60,
//             borderWidth: 1,
//             // overflow: "hidden"


//         }}>




// <BackImage
//             source={eventImage || EventShadow}
//             loginImgStyle={styles.shadowImgStyle}
//             anthorView={
//                 <View
//                     style={[
//                         styles.iconContentStyle,
//                         rowStyle,
//                         selfCentered,
//                         spaceBetweenItems,
//                         isRtl && rtlRowStyle,
//                     ]}
//                 >
//                     <Icon children={<BackIcon
//                         width={23} height={20}
//                         color={colors.white} onPress={onNavigateBack} />} />
//                     <Icon children={<BottomGroupIcon
//                         width={19} height={19}
//                         color={colors.white} onPress={navigation.openDrawer} />} />
//                     {/* <Icon children={<ProfileIcon width={22} height={24} onPress={onNavigateProfile} />} /> */}
//                 </View>
//             }
//         />


/* <View
            //  onPress={() => setImageModal(true)}
            style={{
                width: "100%",
                height: 285,
                paddingTop: 25,
                // backgroundColor: colors.black,
                marginBottom: 250
            }}>
            <Image source={{ uri: img_url }} style={{
                backfaceVisibility: "hidden",
                overflow: "hidden",
                flex: 1,
                borderRadius: 8,
                // width: 300,
                resizeMode: "stretch",
                aspectRatio: 1.4,
                alignSelf: "center",
                top: -25
                // marginBottom: 250
            }}>

            </Image>


        </View > */

//     !!eventImage ? <View
//     //  onPress={() => setImageModal(true)}
//     style={{
//         width: "100%",
//         height: 285,
//         paddingTop: 25,
//         // backgroundColor: colors.black,
//         marginBottom: 250
//     }}>
//     <Image source={eventImage} style={{
//         backfaceVisibility: "hidden",
//         overflow: "hidden",
//         flex: 1,
//         // width: 300,
//         resizeMode: "stretch",
//         aspectRatio: 1.4,
//         alignSelf: "center",
//         top: -25
//         // marginBottom: 250
//     }}>

//     </Image>


// </View > :
//     <Fragment />







{/* <ImageBackground style={{
            width: 430,
            height: 300,
            marginBottom: 150,
            borderBottomRightRadius: 180,
            rotation: 12,
            bottom: 65,
            right: 30
        }} source={EventShadow}>
            <Avatar source={eventImage} imageStyle={{
                // top: -190,
                width: 520,
                alignSelf: "center",
                height: 380,
                marginBottom: 50,
                opacity: 0.8,
                borderBottomRightRadius: 400,
                borderBottomLeftRadius: 1300,
                overflow: "hidden",

                left: -55,
                rotation: -3,
                // flexWrap: "nowrap",
                // flexShrink: 1,
                backfaceVisibility: "hidden",


                // paddingBottom: 20,
                // borderRadius: 7,


                // top: 80,
                // alignSelf: "center",
                // marginTop: 2
            }} />
            {/* </View> */
    // </ImageBackground >
}
