import React, { Fragment } from 'react'
import {
    View
} from 'react-native'
import TextComp from '../../../components/Text'
import Input from '../../../components/Input'
import Avatar from '../../../components/Avatar'
import Icon from '../../../components/Icon'
import colors from '../../../utilities/colors';
import registeredStyles from "../../../utilities/registeredStyles";
import PhoneView from './PhoneView'
import { NavigationProps } from '../../../utilities/generalInterface'
import MainContext from '../../../utilities/Context/context'



const shieldImage = require('../../../assests/eventfulAssests/images/shield.png')

const { memo, useCallback, useMemo, useContext } = React
const {
    flexStyle,
    horizontalCenteredFlex,
    shadow,
    selfCentered
} = registeredStyles

const NewPassView: React.FC<NavigationProps> = ({ navigation }): JSX.Element => {
    const { state: { lang, langType } } = useContext(MainContext)
    const isRtl = useMemo(() => langType === "ar", [langType])
    return <PhoneView
        navigation={navigation}
        firstText={lang.NewPass
            // "New Password"
        }
        secondText={lang.enterNewPass
            // "Please Enter Your New Password "
        }
        buttonTitle={lang.Save}
        image={shieldImage}
        medView={
            <Fragment>
                <Input
                    // isRTL={isRtl}
                    inputStyle={{ elevatin: 1, zIndex: 100 }}
                    placeholder={lang.newPass}
                    color={colors.placeholder}
                />
                <Input
                    // isRTL={isRtl}
                    inputStyle={{ elevatin: 1, zIndex: 100 }}
                    placeholder={lang.rewritePass}
                    color={colors.placeholder}

                />
            </Fragment>
        }
        imageStyle={{
            width: 72,
            height: 77
        }}
    />
}

export default memo(NewPassView)