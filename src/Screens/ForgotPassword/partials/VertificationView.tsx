import React from 'react'
import {
    View,
    TextInput
} from 'react-native'
import TextComp from '../../../components/Text'
import Input from '../../../components/Input'
import Avatar from '../../../components/Avatar'
import Icon from '../../../components/Icon'
import colors from '../../../utilities/colors';
import registeredStyles from "../../../utilities/registeredStyles";
import PhoneView from './PhoneView'
import MainContext from '../../../utilities/Context/context'

import { NavigationProps } from 'src/utilities/generalInterface'
const mailImage = require('../../../assests/eventfulAssests/images/mail.png')
const helpImg = require('../../../assests/eventfulAssests/images/help.png')

const { memo, useCallback, useMemo, useContext } = React
const {
    flexStyle,
    horizontalCenteredFlex,
    shadow,
    selfCentered
} = registeredStyles

const VertificationView: React.FC<NavigationProps> = ({ navigation }): JSX.Element => {
    const { state: { lang, langType } } = useContext(MainContext)
    const isRtl = useMemo(() => langType === "ar", [langType])
    return <PhoneView
        firstText={lang.Verification
            // "Verification Code"
        }
        secondText={lang.enterDigital}
        // "Enter 4 Digital Number That Sent to +012 3456 789 "}
        buttonTitle={lang.Next}
        // "Next"}
        image={mailImage}
        medView={
            <View style={{
                height: 80,
                // backgroundColor: colors.black,
                width: "100%",
                alignSelf: "center",
                justifyContent: "center",
                flexDirection: "row"
            }}>
                <View style={{
                    width: "60%",
                    // backgroundColor: colors.black,
                    alignSelf: "center",
                    justifyContent: "space-between",
                    flexDirection: "row",
                    alignItems: "center"

                }}>
                    {[0, 1, 2, 3].map((idx: number) => {
                        return <TextInput style={{
                            width: "22%",
                            borderWidth: 0.5,
                            elevation: 1,
                            zIndex: 100,
                            height: 55,
                            borderColor: colors.purple,
                            borderRadius: 8,
                            transform: [{
                                scale: 0
                            }],
                            paddingLeft: 15,
                            color: colors.purple,
                            fontSize: 25
                        }} />
                    })}

                </View>

            </View>

        }
        lastView={
            <View style={{ width: "40%", alignItems: "center", alignSelf: "center", marginBottom: 55, flexDirection: "row", marginTop: 45 }}>
                <Avatar source={helpImg} imageStyle={{
                    width: 15.5,
                    height: 15.5,
                    marginRight: 5
                }} />
                <TextComp children={lang.sendCodeAgain
                    // "Send Code Again"
                } fontSize={16} color={colors.lightGrey} />

            </View>
        }
        imageStyle={{
            width: 72,
            height: 78
        }}
        navigation={navigation}
        route={"SetNewPass"}
    />
}

export default memo(VertificationView)