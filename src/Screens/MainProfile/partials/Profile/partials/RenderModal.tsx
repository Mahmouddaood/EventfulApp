import React from 'react'
import {
    View,
    TouchableOpacity,
    Modal,
    ViewStyle
} from 'react-native'
import styles from '../styles'
import Input from '../../../../../components/Input'
import Button from '../../../../../components/Button'
import TextComp from '../../../../../components/Text'
import Avatar from '../../../../../components/Avatar'
import colors from '../../../../../utilities/colors'
import registeredStyles from '../../../../../utilities/registeredStyles'
import useChangePassRequest from '../../../../../utilities/LogicScreens/Profile/hooks/useChangePassRequest'

const CloseImg = require('../../../../../assests/eventfulAssests/images/close.png')

const {
    flexStyle,
    spaceBetweenItems,
    rowStyle,
    selfCentered,
    horizontalCenteredFlex,
    verticalCenteredFlex,
    shadow,
    fullWidth,
    rtlRowStyle
} = registeredStyles
const {
    useMemo,
    memo,
    useCallback,
    useContext,
    useState
} = React

interface ModalProps {
    headTitle: string,
    modalFlag: boolean,
    setModal: (g: boolean) => void,
    modalStyle?: ViewStyle,
    token: string
}

const RenderModal: React.FC<ModalProps> = ({
    headTitle,
    modalFlag,
    setModal,
    modalStyle,
    token
}): JSX.Element => {

    const {
        toastMsg,
        userData,
        setUserData,
        handleChangePass,
        modalVisible,
        setVisible,
    } = useChangePassRequest(token)

    console.log("user=>", userData)
    return <Modal transparent >
        <View style={[
            selfCentered,
            styles.modalViewStyle,
            modalStyle
        ]}>
            <View style={
                [
                    styles.headPassStyle,
                    rowStyle,
                    selfCentered,
                    spaceBetweenItems,
                    horizontalCenteredFlex,
                ]
            }>
                <TextComp
                    children={headTitle
                        // "Change Your Password"
                    }
                    color={colors.black}
                    fontSize={18}
                    center
                    textStyle={styles.passTxtStyle}

                />
                <TouchableOpacity onPress={() => setModal(false)}>
                    <Avatar
                        source={CloseImg}
                        imageStyle={styles.iconImgStyle}
                    />
                </TouchableOpacity>

            </View>

            <Input
                placeholder={"Old Pass"}
                value={userData.current_password}
                onChange={(e: any) => setUserData({
                    ...userData,
                    current_password: e
                })}
            />
            <Input
                placeholder={"new Pass"}
                value={userData.new_password}
                onChange={(e: any) => setUserData({
                    ...userData,
                    new_password: e
                })}
            />
            <Input
                placeholder={"repeated Pass"}
                value={userData.confirm_password}
                onChange={(e: any) => setUserData({
                    ...userData,
                    confirm_password: e
                })}
            />

            <TextComp
                children={toastMsg}
                color={colors.flowerColor}
                fontSize={14}
                center
            />
            <Button
                title={"Save New Password"}
                onPress={handleChangePass}
                center
                textStyle={{ fontSize: 13 }}
                containerStyle={[
                    styles.savePassButStyle,
                    horizontalCenteredFlex,
                    verticalCenteredFlex,
                    selfCentered,
                ]}
            />
        </View>
    </Modal>


}



export default memo(RenderModal)