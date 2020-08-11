import React from 'react'
import {
    View,
} from 'react-native'
import TextComp from '../../../components/Text'
import registeredStyles from "../../../utilities/registeredStyles";
import Header from '../../../components/HeaderComp'
import { TermsProps } from '../index.interface'
import ArrowIcon from "../../../components/ArrowIcon";
import Icon from '../../../components/Icon';
import BottomGroupIcon from '../../../components/BottomGroupIcon';
import colors from '../../../utilities/colors';
import styles from '../About/styles';
import Context from '../../../utilities/Context/context'
import BackIcon from '../../../components/BackIcon';
import MoreGroupIcon from '../../../components/MoreGroupIcon'
import useAboutRequest from '../../../utilities/LogicScreens/About/hooks/useAboutRequest'
import { ScrollView } from 'react-native-gesture-handler';
const { memo, useContext } = React
const {
    flexStyle,
    horizontalCenteredFlex,
    shadow,
} = registeredStyles

const Terms: React.FC<TermsProps> = ({ navigation }): JSX.Element => {

    const { state: { lang } } = useContext(Context)
    const {
        data
    } = useAboutRequest("http://eventful.sa/api/v2/page/2")
    // console.log("data =")
    return <ScrollView style={flexStyle}>
        <Header
            navigation={navigation}
            screenTitle={lang.TermsAndCond}
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
            styles.aboutViewStyle,
            shadow,
            flexStyle,
            horizontalCenteredFlex
        ]}>

            <View style={[horizontalCenteredFlex]}>
                <TextComp children={data.body && data.body.replace(/<\/?[^>]+(>|$)/g, "")}
                    center
                    color={colors.black}
                    textStyle={styles.aboutTxtStyle}
                />
            </View>

        </View>
    </ScrollView>
}
export default memo(Terms)