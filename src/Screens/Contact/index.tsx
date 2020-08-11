import React, { useContext } from 'react'
import {
    View,
    ScrollView
} from 'react-native'
import styles from './styles';
import ContactProps from './index.interface'
import ButtonComp from '../Auth/SignUpScreen/ButtonComp';
import TextComp from '../../components/Text'
import Header from '../../components/HeaderComp'
import ArrowIcon from "../../components/ArrowIcon";
import BackIcon from '../../components/BackIcon'
import Avatar from '../../components/Avatar';
import Input from '../../components/Input';
import colors from '../../utilities/colors';
import Icon from '../../components/Icon'
import MoreGroupIcon from '../../components/MoreGroupIcon'
import registeredStyles from "../../utilities/registeredStyles";
import MainContext from '../../utilities/Context/context'
import useContactRequest from '../../utilities/LogicScreens/ContactUs/useContactRequest'

const ContactImage = require('../../assests/eventfulAssests/images/ContactImage.png')

const { memo, useCallback, useMemo } = React
const {
    flexStyle,
    horizontalCenteredFlex,
    shadow,
    selfCentered
} = registeredStyles

const Contact: React.FC<ContactProps> = ({ navigation }): JSX.Element => {


    const {
        toastMsg,
        // setDisabled,
        disabled,
        // setMsg,
        userData,
        setUserData,
        handleContact,
        formError
    } = useContactRequest()
    const { state: { lang, langType } } = useContext(MainContext)
    const isRtl = useMemo(() => langType === "ar", [langType])
    const contactTextArr: string[] = [
        isRtl ? lang.ContactBreif : 'Stay in touch with us and let us know your',
        !isRtl && 'comments and complaints'
    ]
    const itemMap = useCallback((item: string) =>
        <TextComp key={item} center children={item}
            color={colors.placeholder}
            textStyle={styles.contactTxtStyle}
        />, [])
    const ContactMap = useMemo(() => contactTextArr.map(itemMap), [itemMap, contactTextArr])

    const onChangeInput = useCallback((stateName: string) => (e: any) => setUserData({
        ...userData,
        [stateName]: e
    }), [
        setUserData,
        userData
    ])

    return <ScrollView
        style={flexStyle}
        scrollEnabled
        shouldRasterizeIOS
    >
        <Header
            navigation={navigation}
            screenTitle={lang.Contact}
            titleStyle={styles.titleStyle}
            leftIcon={
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
            styles.imgTxtViewStyle,
            shadow,
            horizontalCenteredFlex
        ]}>
            <Avatar source={ContactImage} imageStyle={[
                styles.conImgStyle,
                selfCentered
            ]} />
            {ContactMap}
        </View>
        {/* <View style={styles.inputViewStyle}> */}
        <Input
            isRTL={isRtl}
            placeholder={lang.YourName}
            // 'Name'
            color={colors.placeholder}
            value={userData.name}
            onChange={onChangeInput("name")}
            err={formError["name"]}
        />
        <Input
            isRTL={isRtl}
            placeholder={lang.Phone}
            // 'Mobile'
            color={colors.placeholder}
            value={userData.mobile}
            onChange={onChangeInput("mobile")}
            err={formError["mobile"]}
        />
        <Input
            isRTL={isRtl}
            placeholder={lang.EmailAddress}
            // 'Email'
            color={colors.placeholder}
            keyboardType='email-address'
            value={userData.email}
            onChange={onChangeInput("email")}
            err={formError["email"]}

        />
        <Input
            isRTL={isRtl}
            placeholder={lang.Msg}
            // 'Message'
            color={colors.placeholder}
            value={userData.msg}
            onChange={onChangeInput("msg")}
            err={formError["msg"]}
        />
        <TextComp
            children={toastMsg}
            color={!Object.keys(formError).length ? "green" : "red"}
            fontSize={18}
            // textStyle={{ marginTop: 25 }}
            center
        />
        {/* </View> */}
        <ButtonComp
            disabled={disabled}
            title={lang.Submit}
            // 'Submit'
            style={styles.logButStyle}
            onPress={handleContact}
        />
    </ScrollView>

}

export default memo(Contact)