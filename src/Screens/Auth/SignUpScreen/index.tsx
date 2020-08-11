import React, { useMemo } from 'react'
import { View, ScrollView } from 'react-native'
import { styles } from './styles'
import TextView from './TextView'
import Avatar from '../../../components/Avatar'
import Button from '../../../components/Button'
import LogoIcon from '../../../components/LogoIcon'
import Icon from '../../../components/Icon'
import registeredStyles from '../../../utilities/registeredStyles'
import { NavigationProps } from '../../../utilities/generalInterface'
import { getFromStorage } from '../../../utilities/infastructure/validator/localStorage'
import MainContext from '../../../utilities/Context/context'
// const Logo = require('../../../assests/eventfulAssests/images/Logo.png')
const MarkGroup = require('../../../assests/eventfulAssests/images/MaskGroup.png')
const {
    memo,
    useCallback,
    useContext
} = React
const {
    shadow,
    flexStyle,
    horizontalCenteredFlex,
    fullWidth,
    selfCentered
} = registeredStyles

const SignUp: React.FC<NavigationProps> = ({ navigation }): JSX.Element => {
    const { navigate } = navigation
    const { state, setContext } = useContext(MainContext)
    const { lang, langType } = useMemo(() => state, [state])
    const isRtl = useMemo(() => langType === "ar", [langType])
    const handleNavigate = useCallback((routeName: string, login: boolean) => async () => {
        if (!login) {
            return navigate(routeName)
        } else {
            const userData: any = await getFromStorage("currentUser")
            const currentUser = await JSON.parse(userData)
            console.log("currentUserData =>", currentUser)
            if (Boolean(userData)) {
                setContext({
                    ...state,
                    ...currentUser,
                    isGuest: false
                })
                return navigate("Profile")
            } else {
                return navigate(routeName)
            }
        }
    }, [navigate, setContext, state])


    const navigateAsGuest = useCallback(() => {
        setContext({
            ...state,
            isGuest: true
        })
        return navigate("Profile")
    }, [navigate, setContext])
    // const navigateRegister = useCallback(() => navigate("Register"), [navigate])

    return <ScrollView
        style={flexStyle}
        scrollEnabled
        shouldRasterizeIOS
    >

        <View style={[
            flexStyle,
            shadow,
            horizontalCenteredFlex
        ]}>
            {/* <Avatar
                source={Logo}
                imageStyle={[
                    // shadow,
                    styles.imageStyle
                ]} /> */}
            <LogoIcon iconStyle={{ marginTop: 75 }} />
            <View style={[
                styles.ButtonViewStyle,
                fullWidth,
                selfCentered,
                horizontalCenteredFlex
            ]}>
                <Button
                    title={lang.Login}
                    onPress={handleNavigate("Login", true)}
                    containerStyle={styles.loginStyle}
                />
                <Button
                    title={lang.SignUp}
                    onPress={handleNavigate("Register", false)}
                    containerStyle={styles.signStyle}
                />

                <TextView
                    isRtl={isRtl}
                    containerStyle={styles.joinStyle}
                    startText={lang.Enjoy}
                    // {`Enjoy as`}
                    endText={lang.Guest}
                    // {`Guest`}
                    linkPress={navigateAsGuest}
                    underLineStyle={{
                        minWidth: "90%"
                    }}
                />
            </View>

            <Avatar
                source={MarkGroup}
                imageStyle={[
                    styles.MarkImageStyle,
                    shadow,
                    fullWidth]}
            />
        </View>
    </ScrollView>
}


export default memo(SignUp)