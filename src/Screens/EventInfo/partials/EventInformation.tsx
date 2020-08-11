
import React, { Fragment } from 'react'
import {
    View,
    TouchableOpacity,
    Linking,
    Alert
} from 'react-native'
import styles from '../styles'
import { EventDataProps } from '../../Notification/index.interface'
import Icon from '../../../components/Icon'
import ViewItem from '../../../components/ViewItem'
import ShareIcon from '../../../components/ShareIcon'
import CheckIcon from '../../../components/CheckIcon'
import TextComp from '../../../components/Text'
import registeredStyles from '../../../utilities/registeredStyles'
import colors from '../../../utilities/colors'
import { IMAGE_BASE_URL } from '../../../utilities/infastructure/config'
import Avatar from '../../../components/Avatar'
import VideoCameraIcon from '../../../components/VideoCameraIcon'
const { memo } = React
const {

    rowStyle,
    horizontalCenteredFlex,
    verticalCenteredFlex,
    rtlRowStyle
} = registeredStyles




const EventInformation: React.FC<EventDataProps> = ({
    desc = true,
    eventName,
    youtube,
    eventDescription,
    image,
    key,
    onPressContact,
    isRtl,
    loading,
    onPressShare,
    onPressDetail,
    eventInfo
}): JSX.Element =>
    <Fragment>
        <ViewItem
            eventInfo={true}
            isRtl={isRtl}
            loading={loading}
            name={eventName}
            description={eventDescription}
            image={image}
            key={key}
            detailStyle={{
                width: "80%",
                padding: 5,
                paddingHorizontal: 10
                // marginHorizontal: 15,
                // backgroundColor: colors.black
            }}
            itemStyle={styles.itemStyle}
            nameStyle={[styles.nameStyle, {
                textAlign: isRtl ? "right" : "left",
                fontSize: eventName && eventName.length > 22 ? 18 : 24
            }
                // {
                //     textAlign: "center", width: eventName && (
                //         Object.keys(eventName).length < 6 ? (isRtl ? "150%" : "40%") : Object.keys(eventName).length < 12 ? (isRtl ? "130%" : "70%") : "100%"
                //     ), marginTop: isRtl ? 40 : 0
                // }
            ]}
            firstContentStyle={styles.firstContentStyle}
            descStyle={[styles.descStyle, { textAlign: isRtl ? "right" : "left" }]}
            onPressDetail={onPressDetail}
            leftView={
                <View style={[
                    rowStyle,
                    isRtl && rtlRowStyle,
                    horizontalCenteredFlex,
                    { justifyContent: "space-between" },
                    styles.leftViewStyle
                ]}>
                    {youtube && <Icon onPress={() => youtube && Linking.openURL(youtube).catch((error: any) => Alert.alert(isRtl ?
                        "الرابط غير صحيح" : "Link is not correct"))}
                        children={<VideoCameraIcon iconStyle={{ marginHorizontal: 5 }}
                            onPress={() => youtube && Linking.openURL(youtube).catch((error: any) => Alert.alert(isRtl ?
                                "الرابط غير صحيح" : "Link is not correct"))}
                        />} />}
                    <Icon children={<ShareIcon />} onPress={onPressShare} />
                </View>
            }
            avatarStyle={styles.avatarStyle}
        />
        {desc ? <TextComp
            children={isRtl ? "كيف تبدع" : 'How to be creative'}
            color={colors.black}
            fontSize={27}
            textStyle={[{ bottom: 10 }, isRtl ? { marginRight: 30 } : { marginLeft: 30 }]}
        /> : <Fragment />}
    </Fragment>

export default memo(EventInformation)       