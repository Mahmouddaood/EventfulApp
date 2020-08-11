import React, { Fragment, useMemo } from 'react'
import { View, Linking, ScrollView, Alert, Dimensions, FlatList, TouchableOpacity, Image } from 'react-native'
import Carousel from 'react-native-snap-carousel'
import styles from '../styles'
import Icon from '../../../components/Icon'
import WhatsIcon from '../../../components/WhatsIcon'
import InstgramIcon from '../../../components/InstagramIcon'
import AlarmIcon from '../../../components/AlarmIcon'
import FacebookIcon from '../../../components/FacebookIcon'
import registeredStyles from '../../../utilities/registeredStyles'
import { SocialProps } from '../../../utilities/LogicScreens/Profile/interfaces/index.interface'
import WebsiteIcon from '../../../components/WebsiteIcon'
import NoDataPlaceHolder from '../../../components/NoDataPlaceHolder'
import SmsIcon from '../../../components/SmsIcon'
import colors from '../../../utilities/colors'
import ChevronIcon from '../../../components/ChevronIcon'
import YoutubeIcon from '../../../components/YoutubeIcon'
import SocialInstgramIcon from '../../../components/SocialInstgramIcon'
import TextComp from "../../../components/Text";


const WhatsImg = require('../../../assests/eventfulAssests/images/whatsapp.png')
const youtubeImg = require('../../../assests/eventfulAssests/images/youtube.png')
const InsagramImg = require('../../../assests/eventfulAssests/images/instagram.png')
const WebsiteImg = require('../../../assests/eventfulAssests/images/internet.png')
const SmsImg = require('../../../assests/eventfulAssests/images/sms.png')
const SnapImg = require('../../../assests/eventfulAssests/images/snapchat.png')
const FacebookImg = require('../../../assests/eventfulAssests/images/facebook.png')



// import { screenWidth, screenHeight } from '../../../utilities/Context/responsive'
const {
    rowStyle,
    selfCentered,
    spaceBetweenItems,
    flexStyle,
    rtlRowStyle
} = registeredStyles
const { memo } = React
const { width: screenWidth } = Dimensions.get('window');
const { width: viewportWidth, height: viewportHeight } = Dimensions.get('window');
const wp = (percentage: any) => {
    const value = (percentage * viewportWidth) / 100;
    return Math.round(value);
}
const slideHeight = viewportHeight * 0.36;
const slideWidth = wp(0);
const itemHorizontalMargin = wp(2);
const sliderWidth = viewportWidth;
const itemWidth = slideWidth + itemHorizontalMargin * 2;

interface SocProps {
    loading: boolean,
    socialLinks: SocialProps
}


let ScrollRef: any
const SocialSection: React.FC<SocProps> = ({
    socialLinks,
    loading,


}): JSX.Element => {
    const {
        facebook,
        tiktok,
        twitter,
        instagram,
        website,
        whatsapp,
        youtube
    } = useMemo(() => socialLinks || {}, [socialLinks])

    const noIcons = socialLinks && !Object.keys(socialLinks).length


    return <View style={{
        height: 65, paddingTop: 10,
        marginBottom: 10
        // backgroundColor: "#000"
        // flexDirection: "row",
        // justifyContent: "space-between",
        // alignItems: "center"
        // backgroundColor: colors.black
    }}>
        {/* <Icon containerStyle={{
            // position: "absolute",
            width: "19%",
            // backgroundColor: "#000",
            paddingLeft: 45,
            bottom: 9
        }} children={<ChevronIcon width={11} height={30} initialDirection={"right"} />}></Icon> */}
        {/* <ScrollView ref={(c: any) => ScrollRef = c}
            contentContainerStyle={{ flexGrow: 1 }}
            automaticallyAdjustContentInsets={false}

            // accessibilityViewIsModal={false}
            scrollEnabled horizontal
            style={{ width: "48.5%", flexGrow: 1, paddingTop: 5, alignSelf: "center", height: "100%" }} > */}
        <View style={{
            width: "100%",
            height: 50,
            alignSelf: "flex-start",
            // backgroundColor: "#000",
            alignItems: "center",
            flex: 1,
            // zIndex: 100

        }}>
            {!noIcons ? <FlatList
                horizontal
                ref={(c: any) => ScrollRef = c}
                contentContainerStyle={{
                    flexGrow: 1,
                    justifyContent: "center"
                }}
                centerContent
                style={{
                    // backgroundColor: "#000",
                    minWidth: "46%",
                    maxWidth: "48%",
                    paddingTop: 17,
                    paddingHorizontal: 3,
                    flex: 1,
                    // marginRight: 50
                    alignSelf: "center"
                    // backgroundColor: "#000",
                    // right: 500
                }}



                renderItem={({ item }: { item: any }) => {
                    const ItemIcon =
                        (
                            item === "twitter" ? SnapImg :
                                item === "instagram" ? InsagramImg :
                                    item === "facebook" ? FacebookImg :
                                        item === "whatsapp" ? WhatsImg :
                                            item === "website" ? WebsiteImg :
                                                item === "tiktok" ? SmsImg :
                                                    item === "youtube" && youtubeImg)
                    const itemVal = item === "twitter" ? socialLinks.twitter :
                        item === "instagram" ? socialLinks.instagram :
                            item === "facebook" ? socialLinks.facebook :
                                item === "whatsapp" ? socialLinks.whatsapp :
                                    item === "website" ? socialLinks.website :
                                        item === "tiktok" ? socialLinks.tiktok :
                                            item === "youtube" && socialLinks.youtube

                    return <TouchableOpacity key={item} onPress={() => {
                        // if (itemVal) {
                        Linking.openURL(
                            item === "twitter" ? socialLinks.twitter :
                                item === "instagram" ? socialLinks.instagram :
                                    item === "facebook" ? socialLinks.facebook :
                                        item === "whatsapp" ? socialLinks.whatsapp :
                                            item === "website" ? socialLinks.website :
                                                item === "tiktok" ? socialLinks.tiktok :
                                                    item === "youtube" && socialLinks.youtube
                        ).catch((error: any) => Alert.alert(`This Profile dosen't have ${[item]}`))
                        // } else {
                        //     Alert.alert(`This Profile dosen't have ${[item]}`)
                        // }
                    }} style={flexStyle}>
                        {/* <Icon onPress={() => {
                                // if (itemVal) {
                                Linking.openURL(
                                    item === "twitter" ? socialLinks.twitter :
                                        item === "instagram" ? socialLinks.instagram :
                                            item === "facebook" ? socialLinks.facebook :
                                                item === "whatsapp" ? socialLinks.whatsapp :
                                                    item === "website" ? socialLinks.website :
                                                        item === "tiktok" ? socialLinks.tiktok :
                                                            item === "youtube" && socialLinks.youtube
                                ).catch((error: any) => Alert.alert(`This Profile dosen't have ${[item]}`))
                                // } else {
                                //     Alert.alert(`This Profile dosen't have ${[item]}`)
                                // }
                            }} children={ */}
                        {ItemIcon &&
                            <Image source={ItemIcon}
                                style={[
                                    { alignSelf: "center", marginEnd: 8 },
                                    (item === "facebook" || item === "twitter") ? {
                                        width: 32,
                                        height: 32
                                    } :
                                        //     (item === "instagram" && item === "youtube") && {
                                        //     top: 15
                                        // },
                                        {
                                            height: 30, marginEnd: 8, width: 30,
                                            alignSelf: "center"

                                        }]}>

                            </Image>}


                    </TouchableOpacity>
                    //         onPress={() => {
                    //             // if (itemVal) {
                    //             Linking.openURL(
                    //                 item === "twitter" ? socialLinks.twitter :
                    //                     item === "instagram" ? socialLinks.instagram :
                    //                         item === "facebook" ? socialLinks.facebook :
                    //                             item === "whatsapp" ? socialLinks.whatsapp :
                    //                                 item === "website" ? socialLinks.website :
                    //                                     item === "tiktok" ? socialLinks.tiktok :
                    //                                         item === "youtube" && socialLinks.youtube
                    //             ).catch((error: any) => Alert.alert(`This Profile dosen't have ${[item]}`))
                    //             // } else {
                    //             //     Alert.alert(`This Profile dosen't have ${[item]}`)
                    //             // }
                    //         }} />}
                    // {/* containerStyle={{ flexGrow: 1, height: "100%", marginEnd: 8, width: "12%" }} /> */}



                }}
                data={socialLinks && Object.keys(socialLinks)}>
            </FlatList>
                : <View style={{ height: 50, width: "65%", justifyContent: "flex-end" }} >
                    <TextComp children={"No Social links for this Profile"} color={"green"} fontSize={17} center />
                </View>
            }
        </View>



        {/* <Icon children={<SmsIcon color={colors.main} onPress={() => Linking.openURL(tiktok)} />}
                containerStyle={{ marginLeft: 7, height: 50, width: "10%" }} />
 */}

        {/* <Icon children={<WebsiteIcon color={colors.main} onPress={() => Linking.openURL(tiktok)} />}
                containerStyle={{ marginLeft: 0, height: 50, width: "16%" }} />
            <Icon children={<WebsiteIcon color={colors.main} onPress={() => Linking.openURL(tiktok)} />}
                containerStyle={{ marginLeft: 0, height: 50, width: "16%" }} />
            <Icon children={<WebsiteIcon color={colors.main} onPress={() => Linking.openURL(tiktok)} />}
                containerStyle={{ marginLeft: 0, height: 50, width: "16%" }} />
            <Icon children={<WebsiteIcon color={colors.main} onPress={() => Linking.openURL(tiktok)} />}
                containerStyle={{ marginLeft: 0, height: 50, width: "16%" }} /> */}




        {/* <Icon children={<WebsiteIcon color={colors.main} onPress={() => Linking.openURL(whatsapp)} />}
                containerStyle={{ marginLeft: 0, height: 50, width: "16%" }} /> */}
        {/* <Icon children={<WebsiteIcon color={colors.main} onPress={() => Linking.openURL(whatsapp)} />}
                containerStyle={{ marginLeft: 0, height: 50, width: "16%" }} /> */}

        {/* </Carousel> */}
        {/* </ScrollView> */}
        {socialLinks && Object.keys(socialLinks).length > 4 && <Icon containerStyle={{
            position: "absolute",
            width: "23%",
            paddingLeft: 13,
            bottom: 17,
            right: 0
        }} children={<ChevronIcon onPress={() => ScrollRef.scrollToEnd({ animated: true })} color={colors.placeholder} width={11} height={30} initialDirection={"left"} />}></Icon>
        }
    </View >
    // <View style={[rowStyle, styles.iconContainerStyle, selfCentered, spaceBetweenItems]}>
    //     {/* <ScrollView horizontal style={{ flex: 1, height: 52, width: 200, }}> */}

    //     {/* </View> */}
    //     {/* </ScrollView> */}
    // </View >
}

export default memo(SocialSection)   