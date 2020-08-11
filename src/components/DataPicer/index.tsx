import React from "react";
import {
    TouchableOpacity,
    View,
    DatePickerAndroid,
    DatePickerIOS,
    Platform,
    Modal,
    Button
} from 'react-native'
import DatePickerProps, { DateStateProps } from './index.interface'
import TextComp from '../Text'
import registeredStyles from "../../utilities/registeredStyles";
import colors from "../../utilities/colors";
import Avatar from "../Avatar";
import styles from "./styles";
const CalculaterImg = require('../../assests/eventfulAssests/images/calculator.png')

const isAndroid = Platform.OS === "android";
const {
    rowStyle,
    flexStyle,
    fullWidth,
    horizontalCenteredFlex,
    shadow,
    spaceBetweenItems,
    rtlRowStyle
} = registeredStyles
const {
    memo,
    Fragment,
    useState,
    useCallback,
    useMemo
} = React


const DatePicker: React.FC<DatePickerProps> = ({
    startDate,
    onDateChanged,
    err,
    onError,
    selected = "",
    maxDate,
    minDate,
    modalButtonText,
    isRtl,
    dateFT,
    dateInputStyle
}): JSX.Element => {

    const [state, updateState] = useState<DateStateProps>({
        showIOSModal: false,
        date: new Date(),
        selectedData: selected
    });

    const { showIOSModal, date, selectedData } = state;


    const handleDateChange = useCallback((date) => {
        updateState({
            ...state,
            date,
        });
    }, [state, updateState])



    const getDateObj = useCallback((d?: any) => {
        // console.log(date)
        return `${d?.day.toString()}-${d?.month + 1}-${d?.year.toString()}`
        // date,
        // year: date ? date.getFullYear().toString() : "",
        // day: date ? date.getDate().toString() : "",
        // month: date ? date.getMonth().toString() + 1 : ""

    }, [])
    const handlePressed = useCallback(async () => {
        if (isAndroid) {
            try {
                const { action, ...d } = await DatePickerAndroid.open({
                    date: date || startDate
                });

                if (action !== DatePickerAndroid.dismissedAction) {
                    updateState({
                        ...state,
                        date,
                        selectedData: getDateObj(d)
                    });
                    console.log("action", getDateObj(d))

                    if (onDateChanged) {
                        onDateChanged(getDateObj(d));
                    }
                }
            } catch (error) {
                onError && onError(error);
                return
            }
        } else {
            return updateState({
                ...state,
                showIOSModal: true
            });
        }
    }, [
        state,
        updateState,
        onDateChanged,
        date,
        getDateObj,
        startDate,
        onError
    ])
    const handleModalClose = useCallback(() => {
        updateState({
            ...state,
            showIOSModal: false
        });

        if (onDateChanged) {
            onDateChanged(getDateObj());
        }
    }
        , [updateState, state, onDateChanged, getDateObj])

    return (
        <View style={styles.contentStyle}>
            <TouchableOpacity style={[
                styles.dateInputStyle,
                rowStyle,
                horizontalCenteredFlex,
                spaceBetweenItems,
                shadow,
                isRtl && rtlRowStyle,
                dateInputStyle
            ]}
                onPress={handlePressed}
            >
                <TextComp children={selectedData ? selectedData : dateFT} fontSize={14} color={colors.lightPlacehold} />
                <Avatar source={CalculaterImg} imageStyle={styles.imageStyle} />
            </TouchableOpacity>
            <TextComp
                children={err || ""}
                color={colors.flowerColor}
                fontSize={16}
                center
                textStyle={{
                    magrinBottom: 6,
                    top: 5
                }} />
            <Modal
                animationType="slide"
                transparent
                visible={showIOSModal}
                onRequestClose={handleModalClose}
            >
                <View
                    style={[
                        styles.overlay,
                        flexStyle,
                        horizontalCenteredFlex,
                    ]}
                >
                    <View style={[styles.modal, fullWidth]}>
                        <View
                            style={[
                                styles.modalBtnContainer,
                                fullWidth,
                                horizontalCenteredFlex,
                                rowStyle
                            ]}
                        >
                            <Button
                                title={modalButtonText}
                                onPress={handleModalClose}
                            />
                        </View>
                        <DatePickerIOS
                            mode="date"
                            date={date || startDate}
                            onDateChange={handleDateChange}
                            maximumDate={maxDate}
                            minimumDate={minDate}
                        />
                    </View>
                </View>
            </Modal>


        </View>
    );
}

DatePicker.defaultProps = {
    startDate: new Date()
}

export default memo(DatePicker)