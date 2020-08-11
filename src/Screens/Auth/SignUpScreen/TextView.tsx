import React, { memo } from 'react'
import { View } from 'react-native'
import { styles } from './styles'
import { TVProps } from '../index.interface'
import TextComp from '../../../components/Text'
import registeredStyles from '../../../utilities/registeredStyles'
import colors from '../../../utilities/colors'
const {
    verticalCenteredFlex,
    rowStyle,
    rtlRowStyle,
    selfCentered
} = registeredStyles

const TextView: React.FC<TVProps> = ({
    endText,
    startText,
    containerStyle,
    textStyle,
    linkPress,
    isRtl,
    underLineStyle
}): JSX.Element =>
    <View style={[
        rowStyle,
        isRtl && rtlRowStyle,
        styles.textViewStyle,
        containerStyle
    ]}>
        <TextComp
            children={startText}
            textStyle={[styles.textStyle, textStyle]}
        />
        <View style={[
            styles.guestStyle,
            verticalCenteredFlex
        ]}>
            <TextComp
                onPress={linkPress}
                children={endText}
                color={colors.flowerColor}
                center
                textStyle={textStyle}
            />
            <View
                style={[
                    styles.underLineStyle,
                    underLineStyle
                    // selfCentered
                ]}
            />
        </View>
    </View>
export default memo(TextView)