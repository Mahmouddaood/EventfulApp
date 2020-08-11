import React from 'react'
import {
    View,
    Animated
} from 'react-native'
import styles from './styles'
import TextComp from '../../../../../components/Text'
import Avatar from '../../../../../components/Avatar'
import colors from '../../../../../utilities/colors'
import DateIcon from '../../../../../components/DateIcon'
import Icon from '../../../../../components/Icon'
import LocationMapIcon from '../../../../../components/LocationMapIcon'

import registeredStyles from '../../../../../utilities/registeredStyles'
import { UserEvent } from '../../../../../utilities/LogicScreens/Profile/interfaces/index.interface'
const LocImg = require("../../../../../assests/eventfulAssests/images/LocImg.png")
const CalculaterImg = require('../../../../../assests/eventfulAssests/images/calendar.png')

const {
    rowStyle,
    spaceBetweenItems,
    shadow,
    horizontalCenteredFlex,
    selfCentered,
    fullHeight,
    fullWidth,
    rtlRowStyle,
    selfEnd,
    selfStart
} = registeredStyles
const {
    memo
} = React

interface AnimatedProps {
    item?: UserEvent | any,
    fade: any,
    editFade?: any,
    showEditView?: (i: number) => void,
    showKey?: number,
    id?: number | string | any,
    isRtl?: boolean
}

const AnimatedSection: React.FC<AnimatedProps> = ({
    item,
    fade,
    // editFade,
    // showEditView,
    showKey,
    id,
    isRtl
}): JSX.Element => {
    // const EditView = useMemo(() =>
    //     item.id === showKey && editFade &&
    //     <Animated.View style={[
    //         styles.edtNStyle,
    //         selfCentered,
    //         shadow,
    //         {
    //             opacity: editFade,
    //         }
    //     ]}>
    //         <TextComp
    //             textStyle={styles.editTxtStyle}
    //             children={"Edit Event Info"}
    //             fontSize={20}
    //             color={colors.black}
    //         />
    //         <TextComp
    //             textStyle={styles.delTxtStyle}
    //             children={"Delete Event"}
    //             fontSize={19}
    //             color={colors.black}
    //         />
    //     </Animated.View>

    //     , [
    //         showKey,
    //         item.id,
    //         editFade
    //     ])
    return (
        <Animated.View style={[
            styles.fadeVStyle,
            shadow,
            {
                opacity: fade
            }
        ]}>
            <View style={[selfCentered,
                fullHeight,
                fullWidth,
            ]}>
                {/* {(showKey === id) && fade &&  */}
                <TextComp
                    children={item?.formatted_date_time}
                    fontSize={10.5}
                    color={colors.placeholder}
                    textStyle={{
                        textAlign: isRtl ? "right" : "left",
                        marginBottom: 5,
                        width: isRtl ? "100%" : "112%",
                        // right: 0,
                        bottom: 5
                    }}
                    center
                />
                <TextComp
                    children={item?.name}
                    fontSize={15}
                    color={colors.black}
                    textStyle={{ fontWeight: "bold", textAlign: isRtl ? "right" : "left" }}
                    center
                />
                {/* {(showKey === id) && fade && */}
                {/* <View style={[
                    styles.timeDescStyle,
                    spaceBetweenItems
                ]}>
                    <TextComp
                        children={item?.formatted_time}
                        fontSize={15}
                        color={"green"}
                        textStyle={[fullWidth, { textAlign: isRtl ? "right" : "left" }]}
                    />
                    <TextComp
                        children={item?.description && item?.description.replace(/<\/?[^>]+(>|$)/g, "")}
                        fontSize={item?.description.length > 20 ? 12.5 : 15}
                        color={colors.black}
                        textStyle={{ textAlign: isRtl ? "right" : "left" }}
                    />
                </View> */}
                {/* {(showKey === id) && fade &&  */}
                <View style={[
                    styles.locAddressStyle,
                    isRtl ? rtlRowStyle : rowStyle,
                    isRtl ? selfEnd : selfStart,
                    spaceBetweenItems,
                    horizontalCenteredFlex,

                    {
                        // right: isRtl ? -15 : 12,
                        bottom: 8,
                        marginHorizontal: isRtl ? -20 : -15

                    }
                ]}>
                    {/* <Avatar source={LocImg}
                        imageStyle={styles.locStyle}
                    /> */}
                    <Icon children={<LocationMapIcon iconStyle={{
                        top: 10
                    }} />} />
                    <TextComp
                        textStyle={{
                            // marginRight: isRtl ? 10 : 0,
                            marginHorizontal: isRtl ? 10 : 0,
                            textAlign: isRtl ? "right" : "left", minWidth: "50%", top: 3
                        }}
                        children={item.address}
                        color={colors.placeholder}
                        fontSize={item.address.length > 20 ? 10 : 13}
                        center
                    />
                </View>
                <View style={[
                    styles.locAddressStyle,
                    isRtl ? rtlRowStyle : rowStyle,
                    isRtl ? selfEnd : selfStart,
                    spaceBetweenItems,
                    horizontalCenteredFlex,
                    {
                        bottom: 25,
                        // right: isRtl ? -15 : 12,
                        marginHorizontal: isRtl ? -20 : -15


                    }
                ]}>
                    {/* <Avatar source={CalculaterImg} imageStyle={{
                        width: 18,
                        height: 16,
                        marginEnd: 5
                    }} /> */}
                    <Icon children={<DateIcon color={colors.placeholder} width={15} height={15} iconStyle={{
                        marginTop: 5
                    }} />} />
                    <View style={{ minWidth: 150, marginHorizontal: 10, right: isRtl ? 3 : 10 }}>
                        <TextComp
                            children={`${item.formatted_date}`}
                            color={colors.black}
                            fontSize={item.address.length > 20 ? 10 : 12}
                            textStyle={{
                                textAlign: isRtl ? "right" : "left",
                                width: "100%",
                                top: 3,
                                fontWeight: "bold"
                            }}
                        // center
                        />
                        <TextComp
                            children={`${item.formatted_time}`}
                            color={"#333"}
                            fontSize={item.address.length > 20 ? 10 : 12}
                            textStyle={{
                                textAlign: isRtl ? "right" : "left",
                                width: "100%",
                                top: 3,
                            }}
                        // center
                        />
                    </View>
                </View>
                {/* 
                <View style={[
                    isRtl ? rtlRowStyle : rowStyle,
                    spaceBetweenItems,
                    horizontalCenteredFlex,
                    isRtl ? selfEnd : selfStart,
                    { top: -4, width: "95%" },
                    isRtl && { left: 10 }
                ]}>
                    <Avatar source={LocImg}
                        imageStyle={styles.locStyle}
                    />
                    <TextComp
                        fontSize={15}
                        color={colors.purple}
                        center
                        children={item?.address}
                    />
                </View> */}
            </View>
        </Animated.View>
    );
}
export default memo(AnimatedSection)