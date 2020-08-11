import React from 'react'
import { View, TouchableOpacity } from 'react-native'
import RadioProps, { radioData } from './index.interface'
import styles from './styles'
import registeredStyles from '../../utilities/registeredStyles'
import TextComp from '../Text'
import colors from '../../utilities/colors'
const {
    horizontalCenteredFlex,
    verticalCenteredFlex,
    spaceBetweenItems,
    rowStyle,
    flexStartStyle,
    rtlRowStyle
} = registeredStyles
const {
    memo,
    useState,
    useCallback
} = React

const RadioButton: React.FC<RadioProps> = ({
    selected,
    radioData,
    isRtl,
    onChange,
    titleFound = true,
    radioStyle,
    radioTextStyle,
    multiRadio = false
}): JSX.Element => {

    const [radioValue, changeRadio] = useState<string | any>(selected || "")
    const handleChange = useCallback((val: string) => () => {
        const newValue = radioValue !== val && val
        if (onChange) {
            onChange(multiRadio ? (newValue && radioValue !== "" && !Array.isArray(radioValue)) ? [radioValue, newValue] : val : val)
        }
        // console.log("newValye", newValue)

        changeRadio(multiRadio ? (newValue && radioValue !== "" && !Array.isArray(radioValue)) ? [radioValue, newValue] : val : val)

    }, [changeRadio, radioValue])
    console.log("radioValye", radioValue)
    return (
        <View style={[styles.radioContentStyle, flexStartStyle]}>
            {titleFound && <TextComp children={isRtl ? "طريقة الدفع" : "Payment Type"} color={colors.placeholder} fontSize={16} />}
            <View style={[
                styles.radioStyle,
                rowStyle,
                spaceBetweenItems,
                horizontalCenteredFlex,
                radioStyle
            ]}>
                {radioData?.map((item: string, idx) =>
                    <View key={idx} style={[
                        styles.radioTextStyle,
                        rowStyle,
                        spaceBetweenItems,
                        horizontalCenteredFlex,
                        radioTextStyle
                    ]}>
                        <TouchableOpacity onPress={handleChange(item)} style={[rowStyle, styles.radioItemStyle, verticalCenteredFlex, horizontalCenteredFlex]}>
                            {(Array.isArray(radioValue) ? radioValue.find((val: string) => val === item) : radioValue === item) && <View style={styles.selectedRadioItem} />}
                        </TouchableOpacity>
                        <TextComp children={item} color={colors.black} fontSize={14} />
                    </View>
                )}
            </View>
        </View>

    );
}
RadioButton.defaultProps = {
    radioData: radioData
}
export default memo(RadioButton)