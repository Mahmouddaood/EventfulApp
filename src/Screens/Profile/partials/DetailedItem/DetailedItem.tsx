import React from 'react'
import {
    View,
    TouchableOpacity,
    Image
} from 'react-native'
// import Image from 'react-native-scalable-image';
import styles from './DetailedStyles'
import { ItemProps } from '../../index.interface'
import TextComp from "../../../../components/Text";
import Avatar from '../../../../components/Avatar';
import LocationMapIcon from '../../../../components/LocationMapIcon'
import NoDataPlaceHolder from '../../../../components/NoDataPlaceHolder'
import colors from '../../../../utilities/colors';
import { IMAGE_BASE_URL } from '../../../../utilities/infastructure/config';
import registeredStyles from '../../../../utilities/registeredStyles'
import Icon from '../../../../components/Icon';
import DateIcon from '../../../../components/DateIcon';
const LocImg = require("../../../../assests/eventfulAssests/images/LocImg.png")
const CalculaterImg = require('../../../../assests/eventfulAssests/images/calendar.png')
// const Messi = require('../../../../assests/eventfulAssests/images/messi.jpg')
const { memo, useEffect, useState } = React
const {
    rowStyle,
    selfCentered,
    horizontalCenteredFlex,
    verticalCenteredFlex,
    fullWidth,
    rtlRowStyle
} = registeredStyles
const DetailedItem: React.FC<ItemProps> = ({ onPress, item, loading, isRtl, image }): JSX.Element => {
    const [imgHeight, setHeight] = useState<number | any>(undefined)
    const [imgWidth, setWidth] = useState<number | any>(undefined)

    useEffect(() => {
        // if (eventImage) {
        Image.getSize(item.photo_url, (width: number, height: number) => {
            // console.log("imghei=>", height)
            setHeight(height)
            setWidth(width)

        }, (error: any) => console.log("err", error))

    }, [])

    return <NoDataPlaceHolder loading={loading}>
        {/* <TouchableOpacity onPress={onPress} style={[styles.shadowContainStyle]} key={item.id} >
            <View style={styles.shadowUpperStyle}>
                <View style={styles.shadowBoxStyle}> */}
        <TouchableOpacity onPress={onPress} style={styles.ImageContentStyle}>
            <Image source={{

                uri: IMAGE_BASE_URL + item.img
            }}
                width={180}
                height={70}
                style={[styles.scaleImgStyle, {
                    borderRadius:
                        (imgHeight > 500 && imgHeight < 680) ? 19 : (imgHeight > 680 && imgHeight < 1000) ? 26 : imgHeight > 1000 ? 38 : 14
                }
                ]}
            />
            {item.event_subscription === "online" && <View style={[
                styles.timeViewStyle,
                verticalCenteredFlex,
                horizontalCenteredFlex,
                isRtl && styles.rtlDetailEventStyle]}>
                <TextComp children={item.event_subscription}
                    textStyle={styles.timeStyle}
                    center
                />
            </View>
            }

        </TouchableOpacity>

        {/* style={{
        //     width: 20,
        //     height: 100,
        //     borderRadius: 15
        // }}
        //  imageStyle={{
        //     width: 200,
        //     height: 140,
        //     backfaceVisibility: "hidden",
        //     // marginTop: 20,

        //     // transform: [{ scale: 0 }],
        //     borderRadius: 15,
        //     marginHorizontal: 5,
        //     // transform: [{ scale: 1 }],
        //     // overflow: "hidden"
        // }} 
        
        {/* </View> */}

        {/* </View>
            </View>

        </TouchableOpacity > */}
        <View style={[styles.detailEventStyle, isRtl && styles.rtlDetailEventStyle]}>
            <TextComp
                children={
                    item.name
                }
                fontSize={
                    item.name.length > 20 ? 14 : 18
                }
                textStyle={[
                    styles.nameTxtStyle,
                    isRtl && styles.rtlNameTxtStyle
                ]}
                color={colors.purple}
            />
            <View style={[{ right: 7 }, isRtl ? [rtlRowStyle, { right: -12 }] : rowStyle]}>
                <View
                    style={[
                        styles.locViewStyle,
                        isRtl ? rtlRowStyle : rowStyle,
                        horizontalCenteredFlex,
                        selfCentered,
                        { width: "60%", marginEnd: isRtl ? 10 : -5 },

                    ]}>
                    {/* <Avatar
                        source={LocImg}
                        imageStyle={styles.locImgStyle}
                    /> */}
                    <Icon children={<LocationMapIcon iconStyle={{
                        top: 3,
                        marginStart: isRtl ? -2 : 5

                    }} />} />
                    <TextComp
                        center
                        children={
                            item.address.length > 22 ? item.address.slice(0, 19) : item.address
                        }
                        textStyle={[fullWidth,
                            {
                                textAlign: "left",
                                paddingRight: 30,
                                right: 3
                                // marginRight: 10
                            },

                            isRtl &&
                            styles.rtlAdressStyle]}
                        fontSize={10
                            // item.address.length > 20 ? 10 : 11
                        }
                        color={colors.darkPlaceHolder} />
                </View>
                <View
                    style={[
                        styles.locViewStyle,
                        isRtl ? rtlRowStyle : rowStyle,
                        horizontalCenteredFlex,
                        selfCentered,
                        { right: 3 }

                    ]}>
                    {/* <Avatar
                        source={CalculaterImg}
                        imageStyle={styles.calendarStyle}
                    /> */}
                    <Icon children={<DateIcon color={colors.placeholder} width={15} height={15} iconStyle={{
                        marginTop: 5,
                        marginStart: 5
                    }} />} />
                    <TextComp
                        center
                        children={
                            item.formatted_date
                        }
                        textStyle={[fullWidth,
                            styles.addressStyle,
                            isRtl &&
                            styles.rtlDateStyle,

                            {
                                fontWeight: "bold",
                                fontSize: item.formatted_date && item.formatted_date.length > 22 ? 7 : 10,
                                // paddingRight: item.formatted_date && item.formatted_date.length > 22 ? 22 : 0
                            }]}
                        fontSize={10}
                        color={colors.black} />
                </View>
            </View>
        </View>

        {/* <View style={[styles.eventDetailStyle, selfCentered]}>
            <TextComp children={item.name} textStyle={[styles.nameStyle, { textAlign: isRtl ? "right" : "left" }, fullWidth]} color={colors.purple} />
            <View style={[rowStyle, horizontalCenteredFlex, fullWidth]}>
                <Avatar source={LocImg} imageStyle={styles.locImgStyle} />
                <TextComp center children={item.address} textStyle={[styles.locationStyle, { textAlign: isRtl ? "center" : "left" }, fullWidth]} color={colors.grey} />
            </View>
        </View>
        <View style={[verticalCenteredFlex, horizontalCenteredFlex, styles.timeViewStyle]}>
            <TextComp children={item.formatted_date} textStyle={styles.timeStyle} />
        </View> */}
    </NoDataPlaceHolder >
}
export default memo(DetailedItem)