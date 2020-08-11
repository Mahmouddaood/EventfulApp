import React from 'react'
import { ScrollView } from 'react-native'
import { styles } from './styles';
import { HocProps } from './index.interface'
import TextView from "./SignUpScreen/TextView";
import ButtonComp from './SignUpScreen/ButtonComp'
import BackImage from '../../components/BackImage'
import registeredStyles from '../../utilities/registeredStyles'
import { responsiveHeight, responsiveWidth } from '../../utilities/Context/responsive';
const { memo,
    // lazy, Suspense 
} = React
// const BackImage = lazy(() => import('../../components/BackImage'))

const { flexStyle, selfCentered } = registeredStyles

const CommonView: React.FC<HocProps> = ({
    navigation,
    children,
    screenName,
    buttonTitle,
    logoText,
    checkStartText,
    checkEndText,
    onButtonPress,
    onLinkPress,
    buttonDisabled,
    underLineStyle
}): JSX.Element => (
        <ScrollView style={[flexStyle, { marginBottom: -200 }]}>
            {/* <Suspense fallback={null}> */}
            <BackImage
                screenName={screenName}
                logoText={logoText}
                // loginImgStyle={{ height: responsiveHeight(29) }}
                center
                logoStyle={{
                    // backgroundColor: "#000",
                    height: "20%",
                    justifyContent: "flex-end"
                }}
                logoTxtStyle={{
                    fontSize: 40
                }}
                txtStyle={{
                    fontSize: 18
                }}
                loginImgStyle={{
                    height: responsiveHeight(36),
                    width: responsiveWidth(104),
                }}
            />
            {/* </Suspense> */}

            {children}
            <ButtonComp
                title={buttonTitle}
                style={styles.buttonStyle}
                onPress={onButtonPress}
                disabled={buttonDisabled}
            />
            <TextView
                linkPress={onLinkPress}
                startText={checkStartText}
                endText={checkEndText}
                textStyle={{ fontSize: 16 }}
                underLineStyle={underLineStyle}

                containerStyle={[
                    styles.lastTxtStyle,
                    selfCentered
                ]}
            />
        </ScrollView>
    )

CommonView.defaultProps = {
    buttonDisabled: true
}

export default memo(CommonView)