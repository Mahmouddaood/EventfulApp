import React from 'react'
import {
    View,
    TextInput,
    ImageURISource,
    ViewStyle,
    ScrollView
} from 'react-native'
import TextComp from '../../../components/Text'
import Input from '../../../components/Input'
import styles from '../styles'
import Avatar from '../../../components/Avatar'
import Icon from '../../../components/Icon'
import colors from '../../../utilities/colors';
import registeredStyles from "../../../utilities/registeredStyles";
import Button from '../../../components/Button'
import Header from '../../../components/HeaderComp'
import ArrowIcon from '../../../components/ArrowIcon'
import { NavigationProps } from '../../../utilities/generalInterface'
import MainContext from '../../../utilities/Context/context'

const padlock = require('../../../assests/eventfulAssests/images/padlock.png')
const helpImg = require('../../../assests/eventfulAssests/images/help.png')

const { memo, useCallback, useMemo, useContext } = React
const {
    flexStyle,
    horizontalCenteredFlex,
    shadow,
    selfCentered
} = registeredStyles

interface ForgotProps extends NavigationProps {
    firstText?: string,
    secondText?: string,
    image?: string | ImageURISource | any,
    medView?: React.ReactNode,
    buttonTitle?: string,
    lastView?: React.ReactNode,
    imageStyle?: ViewStyle | any,
    onButtonPress?: ((s: string) => void) | any,
    route?: string | any,
}

const PhoneView: React.FC<ForgotProps> = ({
    firstText,
    secondText,
    image,
    medView,
    buttonTitle,
    lastView,
    imageStyle,
    onButtonPress,
    route,
    navigation,
}): JSX.Element => {

    const { state: { lang, langType } } = useContext(MainContext)
    const isRtl = useMemo(() => langType === "ar", [langType])
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
                <ArrowIcon
                    width={25}
                    height={25}
                />
            }
        />
        <View style={{ marginTop: 50 }}  >

            <Avatar source={image || padlock} imageStyle={[{
                width: 72,
                height: 85,
                alignSelf: "center",
                marginBottom: 50

            }, imageStyle]} />

            <View style={{ width: "90%", height: 48, marginBottom: 35, justifyContent: "space-between", alignSelf: "center" }}>
                <TextComp
                    fontSize={20}
                    color={colors.black}
                    children={firstText || lang.enterMobile} />
                <TextComp
                    fontSize={16}
                    color={colors.lightGrey}
                    children={secondText || lang.sendCode
                        // "to Send You a Confirmation Code to Your mobile"
                    } />
            </View>
            {medView}
            {/* <Button
            title={"send"}
            containerStyle={{
                width: "90%",
                height: 53,
                marginTop: 45,
                backgroundColor: colors.purple,
                alignSelf: "center"
            }}
        /> */}

            <Button
                title={buttonTitle || lang.send
                    // "send"
                }
                onPress={() => navigation.navigate(route)}
                containerStyle={{
                    width: "90%",
                    height: 53,
                    marginTop: 45,
                    backgroundColor: colors.purple,
                    alignSelf: "center"
                }}

            />
            {lastView && lastView}
        </View>
    </ScrollView>
}

export default memo(PhoneView)