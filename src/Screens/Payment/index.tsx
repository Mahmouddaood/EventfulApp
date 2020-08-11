import React from 'react'
import {
    View,
    ScrollView,
    TouchableOpacity,
    TextInput
} from 'react-native'
const PushNotification = require('react-native-push-notification')
import styles from './styles'
import PaymentProps from './index.interface'
import backImgStyles from '../CreateEvent/styles'
import BackImage from '../../components/BackImage'
import ArrowIcon from '../../components/ArrowIcon'
import RadioButton from '../../components/RadioButton'
import Input from '../../components/Input'
import Button from '../../components/Button'
import Icon from '../../components/Icon'
import BackIcon from '../../components/BackIcon'
import BottomGroupIcon from '../../components/BottomGroupIcon'
import TextComp from '../../components/Text'
import registeredStyles from '../../utilities/registeredStyles'
import MainContext from '../../utilities/Context/context'
import colors from '../../utilities/colors'
import usePaymentRequest from '../../utilities/LogicScreens/Payment/usePaymentRequest'
import MoreGroupIcon from '../../components/MoreGroupIcon'
import notify from '../Notification/partials/notify'
const {
    flexStyle,
    shadow,
    verticalCenteredFlex,
    horizontalCenteredFlex,
    selfCentered,
    rowStyle,
    spaceBetweenItems,
    rtlRowStyle,
    fullWidth
} = registeredStyles
const {
    memo,
    useCallback,
    useContext,
    useMemo,
    useEffect
} = React
const MEDWID = { width: "55%" }
const SMLWID = { width: "45%" }
const LARWID = { width: "90%", }


const Payment: React.FC<PaymentProps> = ({ navigation }): JSX.Element => {

    const navigateBack = useCallback(() => navigation.goBack(), [navigation])
    const { navigate } = useMemo(() => navigation, [navigation])
    const { state: { lang, token, langType } } = useContext(MainContext)
    const isRtl = useMemo(() => langType === "ar", [langType])
    const payment_type = useMemo(() => navigation.getParam("payment"), [navigation.getParam])
    const eventId = useMemo(() => navigation.getParam("eventId"), [navigation.getParam])
    const eventCost = useMemo(() => navigation.getParam("eventCost"), [navigation.getParam])
    const attendenceNo = useMemo(() => navigation.getParam("attendenceNo"), [navigation.getParam])
    const {
        handlePayment,
        toastMsg,
        payment,
        setCode,
        promoCode,
        setPay
    } = usePaymentRequest(token, eventId, payment_type)
    console.log("lang =>", payment_type, payment)

    useEffect(() => {
        PushNotification.configure({
            // (optional) Called when Token is generated (iOS and Android)

            // (required) Called when a remote or local notification is opened or received
            onNotification: (notification: any) => {
                console.log("paymaa")
                notify(
                    notification.event_id,
                    isRtl,
                    token,
                    navigation
                )

            },
            smallIcon: "eventful",
            largeIcon: "eventful"

        })
    }, [navigation])

    return (
        <ScrollView
            style={[flexStyle, { paddingBottom: 25, marginBottom: -120 }]}
            scrollEnabled
            shouldRasterizeIOS
        >
            <BackImage
                onPressBack={navigateBack}
                // textViewStyle={!isRtl && { marginRight: "50%" }}
                loginImgStyle={backImgStyles.loginImgStyle}
                logoStyle={[backImgStyles.logoStyle, {
                    alignItems: isRtl ? "flex-end" : "flex-start",

                    // flexDirection: isRtl ? "row-reverse" : "row"
                }]}
                logoTxtStyle={[backImgStyles.screenNameStyle, { textAlign: isRtl ? "right" : "left" }]}
                txtStyle={[backImgStyles.secondTxtStyle, { textAlign: isRtl ? "right" : "left" }]}
                screenName={lang.Payment}
                logoText={lang.PaymentMethod}
                leftIcon={
                    <View style={{
                        height: "80%",
                        bottom: "31%",
                        width: "21%",
                        alignSelf: "flex-start",
                        // // right: isRtl ? 130 : 0,
                        // // rotation: 0,
                        justifyContent: "space-between",
                        flexDirection: "row",
                    }}>
                        <Icon children={
                            <BackIcon
                                height={22}
                                width={23}
                                iconStyle={{

                                    // marginHorizontal: 10,
                                }}
                                onPress={navigateBack}
                            />}
                            containerStyle={{
                                top: 10,
                            }}
                            // containerStyle={isRtl ? styles.rtlIconStyle : styles.iconStyle}
                            onPress={navigateBack}

                        />
                        <Icon
                            containerStyle={[
                                {
                                    top: 10,


                                },

                                // left: 15,
                                // rotation: 0


                            ]}
                            children={<MoreGroupIcon iconStyle={{
                                bottom: 4,

                            }} onPress={navigation.openDrawer} height={22} width={20}
                            />} onPress={navigation.openDrawer} />
                    </View>
                }
            />
            <View style={[
                styles.payViewStyle,
                shadow,
                selfCentered
            ]}>
                <TextComp
                    children={lang.ChoosePayMethod}
                    fontSize={17}
                    color={colors.placeholder}
                    textStyle={[{
                        marginTop: 18,
                        marginBottom: 10,
                        textAlign: isRtl ? "right" : "left"
                    }]}
                />
                <RadioButton
                    selected={payment}
                    onChange={(item: string) => setPay(item)}
                    // multiRadio
                    titleFound={false}
                    radioStyle={MEDWID}
                    radioTextStyle={SMLWID}
                    isRtl={isRtl}
                    // selected={"online"}
                    radioData={[
                        "online",
                        "offline"
                    ]}
                />
            </View>
            <View style={[
                styles.PromoCodeStyle,
                shadow,
                // selfCentered,
            ]}>
                <TextComp
                    children={isRtl ? "هل لديك كود ؟" : "Have Promo Code"}
                    fontSize={17}
                    color={colors.placeholder}
                    textStyle={{
                        marginBottom: 15,
                        textAlign: isRtl ? "right" : "left"
                        // styles.chooseTxtStyle,
                    }}
                />
                <View style={[
                    fullWidth,
                    rowStyle,
                    selfCentered,
                    isRtl && rtlRowStyle,
                    spaceBetweenItems,
                ]}>
                    <TextInput
                        style={[
                            fullWidth,
                            styles.inputStyle
                        ]}
                        value={promoCode}
                        onChangeText={(e: string) => setCode(e)}
                        placeholder={lang.PromoCode}
                    />
                    <TouchableOpacity style={[
                        styles.applyButStyle,
                        horizontalCenteredFlex,
                        verticalCenteredFlex,
                    ]}>
                        <TextComp children={isRtl ? "ادخل" : "apply"} center fontSize={18} />
                    </TouchableOpacity>
                </View>
            </View>
            <View style={[
                styles.lastViewStyle,
                selfCentered
            ]}>
                <View style={[
                    styles.itemStyle,
                    rowStyle,
                    isRtl && rtlRowStyle,
                    spaceBetweenItems,
                    selfCentered,
                ]}>
                    <TextComp children={isRtl ? "المناسبه " : "event :"} fontSize={17} color={colors.black} />
                    <TextComp children={attendenceNo} fontSize={17} color={colors.black} />
                </View>
                <View style={[
                    styles.itemStyle,
                    rowStyle,
                    isRtl && rtlRowStyle,
                    spaceBetweenItems,
                    selfCentered
                ]}>
                    <TextComp children={lang.Total} fontSize={17} color={colors.black} />
                    <TextComp children={`${eventCost}Rs`} fontSize={17} color={colors.black} />
                </View>

            </View>
            <Button
                onPress={handlePayment}
                title={lang.Payment}
                containerStyle={[styles.payButStyle, selfCentered]}

            />
            <TextComp
                children={toastMsg}
                fontSize={18}
                center
                textStyle={{
                    bottom: 45
                }}
                color={"green"}
            />
        </ScrollView>
    )
}


export default memo(Payment)