import React, { Fragment } from "react";
import { TextInput } from "react-native";
import styles from "./style";
import TextComp from '../Text'
import colors from "../../utilities/colors";
import InputProps from './index.interface'
import registeredStyles from '../../utilities/registeredStyles'
const { shadow } = registeredStyles

const Input: React.FC<InputProps> = ({
  value,
  inputStyle,
  onChange,
  placeholder,
  isRTL,
  fontSize = 14,
  keyboardType,
  color,
  secure,
  multi,
  err,
  icon
}): JSX.Element =>
  <Fragment>
    <TextInput
      value={value}
      onChangeText={onChange}
      shouldRasterizeIOS
      autoCapitalize="none"
      allowFontScaling
      placeholderTextColor={colors.placeholder}
      autoCorrect={false}
      keyboardType={keyboardType}
      placeholder={placeholder}
      secureTextEntry={secure}
      multiline={multi}
      style={[
        styles.inputStyle,
        shadow,
        fontSize && fontSize,
        color && color,
        isRTL && styles.inputValueDirRtl,
        inputStyle
      ]}
    />
    {icon && icon}
    {err && <TextComp
      children={err ? err : ""}
      color={"red"}
      fontSize={18}
      center
      textStyle={styles.errStyle}
    />}
  </Fragment>

export default React.memo(Input)
