import React, { useContext, useState } from 'react'
import {
    View,
    ScrollView
} from 'react-native'
import styles from './styles';
import ForgotPasswordProps from './index.interface'
import ButtonComp from '../Auth/SignUpScreen/ButtonComp';
import TextComp from '../../components/Text'
import Header from '../../components/HeaderComp'
import ArrowIcon from "../../components/ArrowIcon";
import BackIcon from "../../components/BackIcon";
import Avatar from '../../components/Avatar';
import Input from '../../components/Input';
import colors from '../../utilities/colors';
import registeredStyles from "../../utilities/registeredStyles";
import MainContext from '../../utilities/Context/context'
import Button from '../../components/Button'
import useContactRequest from '../../utilities/LogicScreens/ContactUs/useContactRequest'
import PhoneView from './partials/PhoneView';
import VertificationView from './partials/VertificationView';
import NewPassView from './partials/NewPassView';
import useForgotPasswordRequest from '../../utilities/LogicScreens/ForgotPassword/useForgotPasswordRequest'
const padlock = require('../../assests/eventfulAssests/images/padlock.png')

const ContactImage = require('../../assests/eventfulAssests/images/ContactImage.png')

const { memo, useCallback, useMemo } = React
const {
    flexStyle,
    horizontalCenteredFlex,
    shadow,
    selfCentered
} = registeredStyles

const ForgotPassword: React.FC<ForgotPasswordProps> = ({ navigation }): JSX.Element => {


    const [viewType, setType] = useState("phone")
    const { navigate } = useMemo(() => navigation, [navigation])
    const { state: { lang, langType } } = useContext(MainContext)
    const isRtl = useMemo(() => langType === "ar", [langType])
    const onButtonNavigate = useCallback((route: string) => () => navigate(route), [navigate])

    const {
        handleRecover,
        toastMsg,
        setEmail,
        email,
    } = useForgotPasswordRequest()

    return <ScrollView
        style={flexStyle}
        scrollEnabled
        shouldRasterizeIOS
    >

        <Header
            navigation={navigation}
            screenTitle={lang.ForgotPassword}
            titleStyle={styles.titleStyle}
            leftIcon={
                <BackIcon
                // width={25}
                // height={25}
                />
            }
        />
        <View style={{ marginTop: 50 }}  >

            <Avatar source={padlock} imageStyle={[{
                width: 72,
                height: 85,
                alignSelf: "center",
                marginBottom: 50

            }]} />

            <View style={{ width: "90%", height: 48, marginBottom: 35, justifyContent: "space-between", alignSelf: "center" }}>
                <TextComp
                    fontSize={20}
                    color={colors.black}
                    children={lang.enterMobile} />
                <TextComp
                    fontSize={16}
                    color={colors.lightGrey}
                    children={lang.sendCode
                        // "to Send You a Confirmation Code to Your mobile"
                    } />
            </View>
            <Input
                isRTL={isRtl}
                inputStyle={{
                    elevatin: 1, zIndex: 100
                }}
                value={email}
                onChange={(e: any) => setEmail(e)}
                placeholder={lang.EmailAddress}
                color={colors.placeholder}

            />
            <TextComp
                children={toastMsg}
                color={"green"}
                fontSize={18}
                // textStyle={{ marginTop: 25 }}
                center
            />
            <Button
                title={lang.send
                }
                onPress={handleRecover}
                containerStyle={{
                    width: "90%",
                    height: 53,
                    marginTop: 45,
                    backgroundColor: colors.purple,
                    alignSelf: "center"
                }}

            />
        </View>
    </ScrollView>


}

export default memo(ForgotPassword)

{/* <PhoneView medView={<Input
        isRTL={isRtl}
        inputStyle={{
            elevatin: 1, zIndex: 100
        }}
        placeholder={lang.PhoneNumber}
        color={colors.placeholder}

    />}
        navigation={navigation}
        route={"Vertification"}
    /> */}


// const contactTextArr: string[] = [
    //     isRtl ? lang.ContactBreif : 'Stay in touch with us and let us know your',
    //     !isRtl && 'comments and complaints'
    // ]
    // const itemMap = useCallback((item: string) =>
    //     <TextComp key={item} center children={item}
    //         color={colors.placeholder}
    //         textStyle={styles.contactTxtStyle}
    //     />, [])
    // const ContactMap = useMemo(() => contactTextArr.map(itemMap), [itemMap, contactTextArr])

    // const onChangeInput = useCallback((stateName: string) => (e: any) => setUserData({
    //     ...userData,
    //     [stateName]: e
    // }), [
    //     setUserData,
    //     userData
    // ])

     // const {
    //     toastMsg,
    //     // setDisabled,
    //     disabled,
    //     // setMsg,
    //     userData,
    //     setUserData,
    //     handleContact,
    //     formError
    // } = useContactRequest()