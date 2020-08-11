import React, { memo, Fragment } from 'react'
import {
    Modal,
    View,
    ViewStyle,
} from 'react-native'
import styles from './styles'
import TextComp from '../../../../../components/Text'
import registeredStyles from '../../../../../utilities/registeredStyles'
import colors from '../../../../../utilities/colors'
import Button from "../../../../../components/Button";


const {
    rowStyle,
    spaceBetweenItems,
    selfCentered
} = registeredStyles

interface DeleteModalProps {
    handleOkPress?: () => void,
    handleClosePress: () => void,
    modalVisible: boolean,
    modalStyle?: ViewStyle,
    message?: string
}
const DeleteModal: React.FC<DeleteModalProps> = ({
    handleOkPress,
    handleClosePress,
    modalVisible,
    modalStyle,
    message
}): JSX.Element => modalVisible ? <Modal transparent>
    <View style={[{
        width: "80%",
        height: 120,
        backgroundColor: colors.whitee7,
        alignSelf: "center",
        marginTop: 150,
        borderRadius: 25,
        padding: 25,
        zIndex: 1000,
        elevation: 1,

    }, modalStyle]}>
        <View>
            <TextComp
                color={colors.mainColor}
                fontSize={16}
                children={message || "are you sure to delete this event"}
                center
            />
            <View style={[
                styles.chooseStyle,
                rowStyle,
                spaceBetweenItems,
                selfCentered
            ]}>
                <Button title={"Yes"}
                    onPress={handleOkPress}
                    containerStyle={[
                        styles.chooseButStyle
                        , {
                            backgroundColor: colors.purple
                        }
                    ]}></Button>

                <Button
                    onPress={handleClosePress}
                    title={"No"}
                    containerStyle={[
                        styles.chooseButStyle
                        , {
                            backgroundColor: colors.error
                        }
                    ]}></Button>

            </View>

        </View>

    </View>
</Modal> : <Fragment />

export default memo(DeleteModal)