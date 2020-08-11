import React from 'react'
import {
    View,
    KeyboardAvoidingView,
    TouchableWithoutFeedback,
    Keyboard,
    TouchableOpacity
} from 'react-native'

const PushNotification = require('react-native-push-notification')
import { styles } from '../styles';
import CommonView from '../CommonView'
import Input from '../../../components/Input'
import TextComp from '../../../components/Text'
import { NavigationProps } from '../../../utilities/generalInterface'
import colors from '../../../utilities/colors'
import registeredStyles from '../../../utilities/registeredStyles'
import useLoginRequest from '../../../utilities/LogicScreens/Auth/login/useLoginRequest'
import MainContext from '../../../utilities/Context/context';
import { saveToStorage } from '../../../utilities/infastructure/validator/localStorage'
import RenderModal from '../../../Screens/MainProfile/partials/Profile/partials/RenderModal';
const {
    memo,
    useCallback,
    useContext,
    useMemo,
    Fragment
} = React
const {
    flexStyle,
    horizontalCenteredFlex,
    verticalCenteredFlex,
    fullWidth,
    rowStyle,
    rtlRowStyle
} = registeredStyles

const Login: React.FC<NavigationProps> = ({ navigation }): JSX.Element => {
    const { navigate } = navigation
    const linkPress = useCallback(() => navigate("Register"), [navigate])
    const { state, setContext } = useContext(MainContext)
    // const ButtonPress = useCallback(() => navigate("Profile"), [navigate])
    const { lang, langType, api_token, token } = useMemo(() => state, [state])
    const isRtl = useMemo(() => langType === "ar", [langType])
    const successFn = useCallback(async response => {
        console.log("res", response.data)
        setContext({
            ...state,
            ...response.data,
            isGuest: false,
        })
        await saveToStorage("currentUser", JSON.stringify(response.data)).then(() => {
            navigate("Profile")
        })
        // console.log("contextState =>", state)
        // return navigate("Profile", {
        //     name: state.first_name
        // })
        // PushNotification.configure({
        //     // (optional) Called when Token is generated (iOS and Android)

        //     // (required) Called when a remote or local notification is opened or received
        //     onNotification: (notification: any) => {
        //         console.log("NOTIFICATION:", notification);
        //     }
        // })

    }, [
        navigate,
        setContext,
        state,
        // saveToStorage
    ])

    const {
        toastMsg,
        disabled,
        userData,
        setUserData,
        handleLogin,
        modalFlag,
        setModal
    } = useLoginRequest(successFn)


    return <CommonView
        navigation={navigation}
        screenName={lang.LogIn}
        // 'Log in'
        logoText={lang.LoginToEnjoy}
        // 'Login To enjoy'
        buttonTitle={lang.Login}
        // 'login'
        checkStartText={lang.DonthvAccount}
        // {`Don't have an account! `}
        checkEndText={lang.SignUpNow}
        // {`Sign up now`}
        onLinkPress={linkPress}
        onButtonPress={handleLogin}
        buttonDisabled={disabled}
        underLineStyle={{
            minWidth: "80%"
        }}
    >
        <View style={styles.inputViewStyle}>
            <TouchableWithoutFeedback onPress={Keyboard.dismiss} style={flexStyle}>
                <KeyboardAvoidingView
                    enabled
                    style={flexStyle}>
                    {modalFlag ? <RenderModal
                        token={token}
                        modalStyle={{
                            top: 60
                        }}
                        headTitle={"Set Your new Pass"}
                        modalFlag={modalFlag}
                        setModal={setModal}
                    /> :
                        <Fragment>
                            <Input
                                isRTL={isRtl}
                                placeholder={lang.EmailAddress}
                                // 'Email address'
                                keyboardType='email-address'
                                color={colors.placeholder}
                                value={userData.email}
                                onChange={e => setUserData({ ...userData, email: e })}
                            />
                            <Input
                                isRTL={isRtl}
                                secure
                                placeholder={lang.Pass}
                                // 'Password'
                                color={colors.placeholder}
                                value={userData.password}
                                onChange={e => setUserData({ ...userData, password: e })}
                            />
                        </Fragment>
                    }
                    <TouchableOpacity
                        onPress={() => {
                            // setModal(!modalFlag)
                            navigation.navigate("ForgotPassword")

                        }}
                        style={[isRtl ? [rowStyle, styles.rtlForgotStyle] : rtlRowStyle]}>

                        <TextComp
                            children={lang.ForgotPass}
                            // 'Forgot password!'
                            textStyle={styles.fgPassStyle}
                        />
                    </TouchableOpacity>
                    <View style={[
                        fullWidth,
                        horizontalCenteredFlex,
                        verticalCenteredFlex
                    ]}>
                        <TextComp
                            children={toastMsg}
                            color={"red"}
                            fontSize={18}
                            center
                        />
                    </View>
                </KeyboardAvoidingView>
            </TouchableWithoutFeedback>
        </View>
    </CommonView >


}


export default memo(Login)