import React from 'react'
import {
    View,
    TouchableOpacity
} from 'react-native'
import { WantedModalProps } from '../index.interface'
import TextComp from '../../../components/Text'
import registeredStyles from '../../../utilities/registeredStyles'
import colors from '../../../utilities/colors'
import { styles } from '../../../Screens/Auth/SignUpScreen/styles'

const {
    memo
} = React
const {
    rowStyle,
    rtlRowStyle,
    fullWidth,
    verticalCenteredFlex,
    horizontalCenteredFlex,
    spaceBetweenItems,
    selfCentered
} = registeredStyles
const RenderWantedModal: React.FC<WantedModalProps> = ({
    name,
    id,
    handleSelectItem,
    selected,
    isRtl
}): JSX.Element => <View
    key={id}
    style={{
        height: 50
    }}>
        <TouchableOpacity style={[
            styles.modalItemStyle,
            isRtl ? rtlRowStyle : rowStyle,
            fullWidth,
            spaceBetweenItems,
            horizontalCenteredFlex,
        ]}
            onPress={() => handleSelectItem(id, name)}
        >
            <TextComp children={name} color={colors.black} />
            <View style={[
                styles.radioViewStyle,
                horizontalCenteredFlex, verticalCenteredFlex,
                {
                    borderColor: selected ? "blue" : colors.black
                }
            ]}>
                {selected && <View style={styles.selectedModalStyle} />}
            </View>
        </TouchableOpacity>
        <View style={[
            styles.lineStyle,
            fullWidth,
            selfCentered,
        ]}
        />
    </View>


export default memo(RenderWantedModal)