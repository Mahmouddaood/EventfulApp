import React from 'react'
import {
    View,
    KeyboardAvoidingView,
    TouchableWithoutFeedback,
    Keyboard
} from 'react-native'
import CommonView from '../CommonView'
import Input from '../../../components/Input'
import TextComp from '../../../components/Text'
import { NavigationProps } from '../../../utilities/generalInterface'
import colors from '../../../utilities/colors'
import { styles } from '../styles'
import registeredStyles from '../../../utilities/registeredStyles'
import MainContext from '../../../utilities/Context/context'
import useRegisterRequest from '../../../utilities/LogicScreens/Auth/register/useRegisterRequest'
import RadioButton from '../../../components/RadioButton'
import { saveToStorage } from '../../../utilities/infastructure/validator/localStorage'


const {
    memo,
    useMemo,
    useCallback,
    useContext,
    Fragment
} = React
const {
    flexStyle,
    selfCentered
} = registeredStyles

const Register: React.FC<NavigationProps> = ({ navigation }): JSX.Element => {

    const { navigate } = navigation
    const { state, setContext } = useContext(MainContext)
    const { lang, langType, first_name } = useMemo(() => state, [state])
    const isRtl = useMemo(() => langType === "ar", [langType])
    const linkPress = useCallback(() => {
        if (first_name !== "") {
            console.log("first_name", first_name)
            return navigate("Profile")
        }
        return navigate("Login")
    }, [navigate])
    const successFn = useCallback(async (response: any) => {
        console.log("signRes =>", response, userData.company_name)

        console.log("state=>", state)
        return navigate("Profile")
    }, [navigate, setContext, state])

    const {
        userData,
        setUserData,
        toastMsg,
        handleRegister,
        disabled,
        formError,
        radioVal,
        changeRadio,
        setError
    } = useRegisterRequest(successFn)




    const changeInput = useCallback((stateName: string) => (val: string | any) => {
        setUserData({
            ...userData,
            [stateName]: val
        })
        // setError({
        //     ...formError,
        //     [stateName]: ""
        // })
    }, [setUserData, userData])

    const changeUserType = useCallback((item: string) => changeRadio(item), [changeRadio,
    ])

    const extraStyle = useMemo(() => radioVal === "person" ? { minHeight: 580 } : radioVal === "company" && {
        minHeight: 520,
        maxHeight: 520
    }
        ,
        [
            radioVal
        ])

    console.log("user => ", userData)

    return <CommonView
        navigation={navigation}
        screenName={lang.SignUp}
        // 'Sign up'
        logoText={lang.CreateNewAcc}
        // 'Create a New account'
        buttonTitle={lang.SignUp}
        // 'Sign up'
        checkStartText={lang.YuHaveAccount}
        // {`You have an account! `}
        checkEndText={lang.LoginNow}

        // {`Login now`}
        onLinkPress={linkPress}
        onButtonPress={handleRegister}
        buttonDisabled={disabled}
    >
        <View style={[
            styles.registerInputStyle,
            {
                marginBottom: Object.keys(formError).length > 1 ? -50 : -90
            }
            // extraStyle
        ]}>
            <TouchableWithoutFeedback onPress={Keyboard.dismiss} style={flexStyle}>
                <KeyboardAvoidingView
                    enabled
                    style={flexStyle}>
                    <RadioButton radioData={[
                        isRtl ? "افراد" : "person",
                        isRtl ? "منظومة" : "company"
                    ]}
                        radioStyle={[styles.radioStyle, selfCentered]}
                        selected={radioVal}
                        titleFound={false}
                        multiRadio={false}
                        onChange={changeUserType
                        }

                    />
                    {radioVal === "person" || radioVal === "افراد" || radioVal === "" ?
                        <Fragment>
                            <Input
                                isRTL={isRtl}
                                placeholder={lang.FirstName}
                                multi
                                // 'Your name'
                                color={colors.placeholder}
                                value={userData.first_name}
                                onChange={changeInput("first_name")}
                                err={userData.first_name === "" && formError["first_name"]}
                            />
                            <Input
                                isRTL={isRtl}
                                multi
                                placeholder={lang.LastName}
                                color={colors.placeholder}
                                value={userData.last_name}
                                onChange={changeInput("last_name")}
                                err={userData.last_name === "" && formError["last_name"]}
                            />
                        </Fragment>
                        : radioVal === "company" || radioVal === "منظومة" &&
                        < Input
                            isRTL={isRtl}
                            placeholder={lang.Company}
                            multi
                            color={colors.placeholder}
                            value={userData.company_name}
                            onChange={changeInput("company_name")}
                            err={userData.company_name === "" && formError["company_name"]}
                        />
                    }

                    <Input
                        isRTL={isRtl}
                        multi
                        placeholder={lang.EmailAddress}
                        color={colors.placeholder}
                        keyboardType='email-address'
                        value={userData.email}
                        onChange={changeInput("email")}
                        err={userData.email === "" && formError["email"]}

                    />
                    <Input
                        isRTL={isRtl}
                        multi
                        placeholder={lang.Phone}
                        // 'Phone number'
                        color={colors.placeholder}
                        value={userData.mobile}
                        keyboardType="phone-pad"
                        onChange={changeInput("mobile")}
                        err={userData.mobile === "" && formError["mobile"]}
                    />
                    <Input
                        isRTL={isRtl}
                        multi
                        secure
                        placeholder={lang.Pass}
                        // 'Password'
                        color={colors.placeholder}
                        value={userData.password}
                        onChange={changeInput("password")}
                        err={userData.password === "" && formError["password"]}

                    />
                    <Input
                        isRTL={isRtl}
                        secure
                        multi
                        placeholder={lang.RewritePassword}
                        // 'Rewrite Password'
                        color={colors.placeholder}
                        value={userData.repeatedPassword}
                        onChange={changeInput("c_password")}
                        err={userData.repeatedPassword === "" && formError["c_password"]}

                    />


                    {/* <Select
                        isRtl={isRtl}
                        items={data}
                        selecteditems={[userData.gender || lang.Male]}
                        multiSelect={false}
                        onChangeSelected={changeSelected}
                        err={formError["gender"]}

                    /> */}


                    <TextComp
                        children={toastMsg}
                        color={(toastMsg !== "" || Object.keys(formError).length > 2) ? "red" : "green"}
                        fontSize={18}
                        center
                        textStyle={{
                            // bottom: 50,
                            marginBottom: 20
                        }}
                    />

                </KeyboardAvoidingView>
            </TouchableWithoutFeedback>
        </View>
    </CommonView>

}
export default memo(Register)