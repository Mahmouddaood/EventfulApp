import React from 'react'
import {
    View,
    TouchableOpacity,
    ScrollView
} from 'react-native'
import styles from './styles';
import SettingsProps, { ArrData, ArrProps } from './index.interface'
import DeleteModal from '../MainProfile/partials/Events/partails/DeleteModal';
import TextComp from '../../components/Text'
import Avatar from '../../components/Avatar'
import MainContext from '../../utilities/Context/context'
import colors from '../../utilities/colors';
import registeredStyles from "../../utilities/registeredStyles";
import ArbLang from '../../utilities/Context/arbLang.json'
import EngLang from '../../utilities/Context/lang.json'
import { removeFromStorage } from '../../utilities/infastructure/validator/localStorage'
import Icon from '../../components/Icon';
import BottomUnionIcon from '../../components/BottomUnionIcon';
import AboutIcon from '../../components/AboutIcon'
import TermsIcon from '../../components/TermsIcon'
import LogoutIcon from '../../components/LogoutIcon'
import CallIcon from '../../components/CallIcon'
import BottomWalletIcon from '../../components/BottomWalletIcon';


const {
    useMemo,
    memo,
    useCallback,
    useContext,
    useState,
    Fragment
} = React
const {
    flexStyle,
    rowStyle,
    spaceBetweenItems,
    horizontalCenteredFlex,
    verticalCenteredFlex,
    rtlRowStyle
} = registeredStyles

const Settings: React.FC<SettingsProps> = ({ navigation, value, props }): JSX.Element => {

    const [modalVisible, setModal] = useState(false)
    const { navigate } = navigation
    const forwardRoute = useCallback((routeName: string) => () => {
        if (routeName === "Login") {
            setModal(true)
        } else {

            navigate(routeName)
        }
    }, [navigate, setModal])
    const { state, setContext } = useContext(MainContext)
    const { langType, lang, name, photo_url, isGuest } = useMemo(() => state, [state])
    const isRtl = useMemo(() => langType === "ar", [langType])
    const changeLanguage = useCallback(() => {
        setContext({
            ...state,
            lang: langType === "en" ? ArbLang : EngLang,
            langType: langType === "en" ? "ar" : "en",
            isRtl: langType !== "en" && true

        })
        return navigate("Profile", { language: langType === "ar" })

    }, [setContext, navigate, langType, state])
    const itemMap = useCallback((item: ArrProps, idx: number) =>
        <Fragment>
            <TouchableOpacity
                style={[
                    styles.DetailViewSytle,
                    rowStyle,
                    spaceBetweenItems,
                    isRtl && rtlRowStyle
                ]}>
                <TouchableOpacity onPress={forwardRoute(item.route)}>
                    <TextComp children={item.name} color={colors.black} />
                </TouchableOpacity>
                {value && !idx ? <TouchableOpacity onPress={changeLanguage} style={[horizontalCenteredFlex, styles.resViewStyle]}>
                    <TextComp children={langType === "ar" ? "Arabic" : "English"} center textStyle={styles.resTextStyle} />
                </TouchableOpacity> : idx === 1 ?
                        <Icon children={<AboutIcon />} />
                        : idx === 2 ? <Icon children={<TermsIcon />} containerStyle={{
                            paddingTop: 5,


                        }} />
                            : idx === 3 ? <Icon children={<CallIcon />} containerStyle={{
                                paddingTop: 4,

                            }} /> :
                                idx === 4 ? <Icon children={<BottomWalletIcon width={15} height={15} />} containerStyle={{
                                    paddingTop: 4,

                                }} /> :
                                    idx === 5 ? <Icon children={<BottomUnionIcon width={15} height={15} />} containerStyle={{
                                        paddingTop: 4,

                                    }} /> :
                                        idx === 6 && <Icon children={<LogoutIcon />} containerStyle={{
                                            paddingTop: 4,
                                            paddingLeft: 3
                                        }} />
                }
            </TouchableOpacity>
            {/* <View style={styles.underLineStyle} /> */}
        </Fragment>
        , [
            forwardRoute,
            isRtl,
            value
        ])

    const DetailView = useMemo(() => ArrData(isRtl, isGuest).map(itemMap), [isRtl, itemMap, isGuest])


    return <ScrollView
        style={[flexStyle]}
        scrollEnabled
        shouldRasterizeIOS
    >
        <View style={[
            styles.profViewStyle,
            horizontalCenteredFlex,
            verticalCenteredFlex
        ]}>
            <Avatar
                source={{ uri: photo_url }}
                imageStyle={styles.profImageStyle} />
            <TextComp children={name} color={colors.black} />
        </View>
        <View style={{ padding: 15 }}>
            {DetailView}
        </View>

        <TouchableOpacity onPress={() => navigation.goBack()} style={{
            width: 60,
            height: 30,
            borderRadius: 10,
            alignItems: "center",
            backgroundColor: colors.grey,
            alignSelf: "center",
            justifyContent: "center"
        }}>
            <TextComp children={"Back"} fontSize={15} color={colors.white} textStyle={{
                fontWeight: "bold"
            }} />
        </TouchableOpacity>
        <DeleteModal
            modalVisible={modalVisible}
            message={isRtl ? "هل تريد الخروج" : "do you want to logout ?"}
            handleClosePress={() => setModal(false)}
            modalStyle={{
                height: 140
            }}
            handleOkPress={async () => {
                setModal(false)
                setContext({
                    ...state,
                    id: undefined,
                    first_name: undefined,
                    token: undefined,
                    company_name: undefined,
                    name: undefined
                })
                await removeFromStorage("currentUser")
                navigate("SignUp")
            }}
        />
    </ScrollView>


}

Settings.defaultProps = {
    value: true
}

export default memo(Settings)