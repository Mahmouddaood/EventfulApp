import React, { useMemo, useState } from 'react'
import {
    View,
    ImageBackground,
    Dimensions,
    ScrollView
} from 'react-native'
import TextComp from '../../../components/Text'
import BackIcon from '../../../components/BackIcon'
import registeredStyles from "../../../utilities/registeredStyles";
import Header from '../../../components/HeaderComp'
import AboutProps from '../index.interface'
import ArrowIcon from "../../../components/ArrowIcon";
import colors from '../../../utilities/colors';
import styles from './styles';
import Avatar from '../../../components/Avatar';
import Icon from '../../../components/Icon';
import BottomGroupIcon from '../../../components/BottomGroupIcon';
import EventListSvg from '../../../components/EventListSvg'
import Carousel, { Pagination } from 'react-native-snap-carousel'
import Context from '../../../utilities/Context/context'
import MoreGroupIcon from '../../../components/MoreGroupIcon';
import LogoIcon from '../../../components/LogoIcon';
import { moderateScale } from '../../../utilities/Context/responsive';
import useAboutRequest from '../../../utilities/LogicScreens/About/hooks/useAboutRequest'
// const AboutLogo = require('../../../assests/eventfulAssests/images/Logo.png')
const image = require('../../../assests/eventfulAssests/images/DjNight.png')
const screenWidth = Dimensions.get("window").width

const { memo, useContext, useRef } = React
const {
    flexStyle,
    horizontalCenteredFlex,
    shadow,
} = registeredStyles

const { width: viewportWidth, height: viewportHeight } = Dimensions.get('window');

const wp = (percentage: any) => {
    const value = (percentage * viewportWidth) / 100;
    return Math.round(value);
}

const slideHeight = viewportHeight * 0.36;
const slideWidth = wp(75);
const itemHorizontalMargin = wp(2);

export const sliderWidth = viewportWidth;
export const itemWidth = slideWidth + itemHorizontalMargin * 2;


const About: React.FC<AboutProps> = ({ navigation }): JSX.Element => {

    const { state: { lang } } = useContext(Context)
    const { data } = useAboutRequest("http://eventful.sa/api/v2/page/1")
    console.log("data => ", data)
    return <ScrollView style={flexStyle}>
        <Header
            navigation={navigation}
            screenTitle={lang.AboutApp}
            leftView={
                <View style={{
                    flexDirection: "row",
                    justifyContent: "space-around",
                    width: 60,
                    top: -5,
                    height: 30,
                    // backgroundColor: "#000"
                }}>

                    <Icon children={<BackIcon
                        // width={25}
                        // height={25}
                        iconStyle={{ top: 10 }}
                    />}
                        onPress={() => navigation.goBack()} />
                    <Icon children={<MoreGroupIcon
                        width={22}
                        height={20}
                        onPress={navigation.openDrawer}
                        iconStyle={{ top: 4 }}
                    />} onPress={navigation.openDrawer} />


                </View>


            }

        />


        <View style={[
            styles.aboutViewStyle,
            shadow,
            flexStyle,
            horizontalCenteredFlex
        ]}>
            {/* <Avatar source={AboutLogo} imageStyle={styles.aboutImgStyle} /> */}
            <LogoIcon iconStyle={{
                bottom: moderateScale(6, 1),
                alignSelf: "center"
            }} />
            <View style={[horizontalCenteredFlex]}>
                <TextComp children={data.body && data.body.replace(/<\/?[^>]+(>|$)/g, "")}
                    center
                    numberOfLines={10}
                    color={colors.black}
                    textStyle={styles.aboutTxtStyle}
                />
            </View>

        </View>
    </ScrollView>
}
export default memo(About)


const data = [
    {
        id: 1,
        title: "title 1",
        img: image
    },
    {
        id: 2,
        title: "title 2",
        img: image
    },
    {
        id: 3,
        title: "title 3",
        img: image
    },
    {
        id: 4,
        title: "title 4",
        img: image
    }
]