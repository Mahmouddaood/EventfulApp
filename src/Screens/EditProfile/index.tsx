import React from 'react'
import {
    ScrollView,
    View
} from 'react-native'
import EditProfileProps from './index.interface'
import styles from './styles';
import EditSection from './partials/EditSection';
import Header from '../../components/HeaderComp'
import ArrowIcon from "../../components/ArrowIcon";
import BottomTab from '../../components/BottomTab';
import registeredStyles from "../../utilities/registeredStyles";
import MainContext from '../../utilities/Context/context'
import BackIcon from '../../components/BackIcon'
import Icon from '../../components/Icon'
import BottomGroupIcon from '../../components/BottomGroupIcon'


const {
    memo,
    useContext,
    useMemo,
    useCallback,
    Fragment,
} = React
const { flexStyle } = registeredStyles

const EditProfile: React.FC<EditProfileProps> = ({ navigation }): JSX.Element => {
    const { getParam, navigate } = useMemo(() => navigation, [navigation])
    const userLoginedProfile = useMemo(() => getParam("profileData"), [getParam])
    const { state } = useContext(MainContext)
    const {
        lang
    } = useMemo(() => state, [state])
    console.log("userProfile =>", userLoginedProfile)
    const handleBack = useCallback(() => navigate("MainProfile"), [
        navigate
    ])

    return <Fragment>
        <ScrollView
            style={[flexStyle, { marginBottom: 50 }]}
            scrollEnabled
            shouldRasterizeIOS
        >
            <Header
                navigation={navigation}
                screenTitle={lang.EditProfile}
                titleStyle={styles.titleStyle}
                leftView={
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
                        <Icon children={<BottomGroupIcon
                            width={22}
                            height={20}
                            onPress={navigation.openDrawer}
                            iconStyle={{ top: 8 }}
                        />} onPress={navigation.openDrawer} />


                    </View>


                }
            />
            <ScrollView
                style={[flexStyle, styles.scrollStyle]}
                scrollEnabled
                shouldRasterizeIOS
            >
                <EditSection dataParams={userLoginedProfile} />
            </ScrollView>
        </ScrollView>
        <BottomTab navigation={navigation} bottomViewStyle={styles.bottomViewStyle} selectedTab={"MainProfile"} />
    </Fragment>
}
export default memo(EditProfile)