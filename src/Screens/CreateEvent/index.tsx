import React from 'react'
import { ScrollView, View } from 'react-native'
import InputScrollView from 'react-native-input-scroll-view'
import CreateEventProps from './index.interface'
import styles from './styles'
import InputCreateView from './partials/InputCreateView'
import BackImage from '../../components/BackImage'
import ArrowIcon from '../../components/ArrowIcon'
import Icon from '../../components/Icon'
import registeredStyles from '../../utilities/registeredStyles'
import MainContext from '../../utilities/Context/context'
import CreateEvent from '../../utilities/infastructure/apis/CreateEvent'
import EditEvent from '../../utilities/infastructure/apis/EditEvent'
import BackIcon from '../../components/BackIcon'
import BottomGroupIcon from '../../components/BottomGroupIcon'
import MoreGroupIcon from '../../components/MoreGroupIcon'
import { moderateScale } from '../../utilities/Context/responsive'
import LeftArrowIcon from '../../components/LeftArrowIcon'
const {
    registerEvent
} = CreateEvent
const {
    editEvent
} = EditEvent

const {
    flexStyle
} = registeredStyles
const {
    memo,
    useCallback,
    useContext,
    useMemo
} = React


const CEvent: React.FC<CreateEventProps> = ({ navigation }): JSX.Element => {

    const navigateBack = useCallback(() => {
        navigation.goBack()
    }, [navigation])
    const { state: { lang, langType } } = useContext(MainContext)
    const isRtl = useMemo(() => langType === "ar", [langType])
    const { getParam } = useMemo(() => navigation, [navigation])
    const evData = getParam("eventData")

    return (
        <InputScrollView

            style={[flexStyle, { marginBottom: -260, paddingBottom: 25 }]}
            scrollEnabled
            shouldRasterizeIOS
        >
            <BackImage
                onPressBack={navigateBack}
                // textViewStyle={!isRtl && { marginRight: "50%" }}
                loginImgStyle={styles.loginImgStyle}
                logoStyle={[styles.logoStyle, {
                    alignItems: isRtl ? "flex-end" : "flex-start",

                    // flexDirection: isRtl ? "row-reverse" : "row"
                }]}
                logoTxtStyle={[styles.screenNameStyle, { textAlign: isRtl ? "right" : "left" }]}
                txtStyle={[styles.secondTxtStyle, { textAlign: isRtl ? "right" : "left" }]}
                screenName={evData ? "Update Event" : lang.CreateEvent}
                logoText={lang.LetCreateOne}
                leftIcon={
                    <View style={{
                        height: "80%",
                        bottom: isRtl ? "22%" : "31%",
                        width: "18%",
                        alignSelf: "flex-start",
                        // // right: isRtl ? 130 : 0,
                        // // rotation: 0,
                        justifyContent: "space-between",
                        flexDirection: "row",
                    }}>
                        <Icon children={
                            <LeftArrowIcon
                                height={20}
                                width={25}
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
                                // bottom: 4,

                            }} onPress={navigation.openDrawer} height={20} width={20}
                            />} onPress={navigation.openDrawer} />
                    </View>
                }
            />
            <InputCreateView
                eventApi={evData ? editEvent : registerEvent}
                eventData={evData && evData}
                navigation={navigation}

            />
        </InputScrollView>


    )
}

export default memo(CEvent)