import React, { useEffect, Fragment } from 'react'
import {
    TouchableOpacity,
    View,
    Text,
    TextInput
} from 'react-native'
import styles from './styles'
import AddItem from './partials/AddItem'
import SelectProps, { StateProps } from './index.interface'
import TextComp from '../../components/Text'
import SelectedItems from './partials/SelectedItems'
import registeredStyles from '../../utilities/registeredStyles'
import colors from '../../utilities/colors'
import Icon from '../Icon'
import CreateEventIcon from '../CreateEventIcon'
import SelectForwardIcon from '../SelectForwardIcon'
import { isArrayHasData } from '../../utilities/infastructure/validator/isThereData'
import { InterestProps, CData } from '../../utilities/LogicScreens/Profile/interfaces/index.interface'
import { CategoryProps, TagsProps } from '../../utilities/LogicScreens/CreateEvent/interfaces/index.interface'
import { BankProps } from '../../utilities/LogicScreens/Wallet/interfaces/index.interface'
import usePrevious from '../../utilities/infastructure/Hooks/usePrevious'
import Avatar from '../../components/Avatar'

const AddImg = require('../../assests/eventfulAssests/images/AddImg.png')

const {
    useState,
    useCallback,
    useMemo,
    memo
} = React

const {
    shadow,
    rowStyle,
    spaceBetweenItems,
    horizontalCenteredFlex,
    fullWidth,
    rtlRowStyle
} = registeredStyles



const Select: React.FC<SelectProps> = ({
    tagAdded,
    items,
    selectStyle,
    onAddTag,
    selecteditems,
    color,
    multiSelect,
    onChangeSelected,
    isRtl,
    onUpcomindDeleteItem,
    err,
    selectContentStyle
}): JSX.Element => {



    const [state, updateState] = useState<StateProps>({
        visible: false,
        data: items,
        selected: selecteditems,
        style: {},
        newItem: {}
    })



    const {
        visible,
        selected,
        style,
        data
    } = state



    useEffect(() => {
        // if (data === []) {
        console.log("items", selecteditems)
        updateState({
            ...state,
            data: items,
            selected: selecteditems
        })
        // }
    }, [items])
    const onPress = useCallback((item: string | InterestProps | CData | CategoryProps | TagsProps | any) => () => {
        if (onChangeSelected) {
            // console.log("itemsel => ", item)
            onChangeSelected(item)
        }
        const multiSelectState = typeof selected[0] !== "string" ? [...selected] : [...selected, item]
        const selectedState = multiSelect ? (
            selected.includes(item) ?
                multiSelectState :
                (typeof selected[0] !== "string" ? [...selected, item] : [item])
        ) : (isRtl ?
            (item.name ? item.name : item.name_ar ? item.name_ar : item.title_ar ? item.title_ar : item) :
            (item.name ? item.name : item.name_en ? item.name_en : item.title_en ? item.title_en : item)
            )
        // console.log("selectedState => ", selectedState)
        updateState({
            ...state,
            selected: selectedState,
            visible: multiSelect ? false : !visible
        })

    }, [
        updateState,
        state,
        onChangeSelected,
        multiSelect,
        selected,
        visible
    ])
    console.log("sele", selected)

    const onShow = useCallback(() => updateState({
        ...state,
        visible: !visible
    }), [
        updateState,
        state,
        visible
    ])
    const changeTags = useCallback((item: any) => {
        console.log("itemAdded =>", item)

        updateState({
            ...state,
            newItem: { title_en: item, title_ar: item },
            // selected: [...selected, state.newItem]
        })
    }, [
        updateState,
        state
    ])
    console.log("newItem", state.newItem)

    const onFocus = useCallback(() => {
        updateState({
            ...state,
            style: {
                elevation: 1,
                backgroundColor: colors.blueSky
            }
        })
    }, [
        updateState,
        state
    ])
    const onDeleteItem = useCallback((item: InterestProps | CategoryProps | TagsProps) => {
        if (onUpcomindDeleteItem) {
            onUpcomindDeleteItem(item)
        }
        updateState({
            ...state,
            selected: selected.filter((i: string | InterestProps | CategoryProps | TagsProps) => item !== i)
        })

    }
        , [
            state,
            selected,
            onUpcomindDeleteItem
        ])
    // console.log("datasele =>", data)


    const addNewItem = useCallback(() => {
        if (state.newItem.title_en && state.newItem.title_en.length > 0) {
            if (onAddTag) {
                onAddTag(state.newItem.title_en)
            }
            updateState({
                ...state,
                selected: typeof selected[0] !== "string" ? [...selected, state.newItem] : [state.newItem],
                newItem: {}
                //  [...selected, state.newItem]

            })
        }
    }, [updateState, onAddTag, state])

    const dataMap = useCallback(
        (item: CData | string | InterestProps | CategoryProps | BankProps | TagsProps | any, idx: number) => {
            // console.log("item", item)
            if (item !== undefined && (!isRtl ? (item.title_en ? item.title_en : item.name_en ? item.name_en : item.name ? item.name : item) :
                (item.title_ar ? item.title_ar : item.name_ar ? item.name_ar : item.name ? item.name : item)
            )) {
                let lastIndex = data.length - 1 === idx
                return <Fragment>
                    <TouchableOpacity
                        key={idx}
                        style={[
                            styles.itemStyle,
                            fullWidth,
                            style
                        ]}
                        onPress={onPress(item)}>
                        <Text
                            children={!isRtl ? (item?.title_en ?
                                (!item.title_en ? "" : `${item.title_en}  `)
                                : item?.name ?
                                    item?.name :
                                    item.name_en ?
                                        item.name_en
                                        : typeof item === "string" && item) : (
                                    item?.title_ar ?
                                        item?.title_ar :
                                        item.name_ar ?
                                            item.name_ar : item.name ? item.name : typeof item === "string" && item
                                )
                            }
                            style={{
                                textAlign: "center",
                                fontSize: 18,
                                color: colors.placeholder
                            }}
                        />
                    </TouchableOpacity>
                    {lastIndex && tagAdded &&
                        // <View style={{ flexDirection: isRtl ? "row-reverse" : "row" }}>
                        //     <TextInput style={[
                        //         isRtl && {
                        //             writingDirection: "rtl",
                        //             textAlign: "right"
                        //         },
                        //         {
                        //             borderWidth: 0.1,
                        //             width: "85%",
                        //             alignSelf: "center",
                        //             borderColor: "#ced4e2",
                        //             borderRadius: 12,
                        //             paddingHorizontal: 8,
                        //             elevation: 1
                        //         }]}
                        //         onChangeText={changeTags}
                        //         placeholder={isRtl ? "اضف تاج" : "You can add you tag"}
                        //     >

                        //     </TextInput>
                        //     {/* <TouchableOpacity onPress={() => {
                        //         if (onAddTag) {
                        //             onAddTag(state.newItem.title_en)
                        //         }
                        //         updateState({
                        //             ...state,
                        //             selected: [...selected, state.newItem]

                        //         })
                        //     }} style={{ width: 50, right: 35 }}> */}
                        //     <Icon
                        //         onPress={() => {
                        //             if (onAddTag) {
                        //                 onAddTag(state.newItem.title_en)
                        //             }
                        //             updateState({
                        //                 ...state,
                        //                 selected: [...selected, state.newItem]

                        //             })
                        //         }}
                        //         children={<CreateEventIcon
                        //             onPress={() => {
                        //                 if (onAddTag) {
                        //                     onAddTag(state.newItem.title_en)
                        //                 }
                        //                 updateState({
                        //                     ...state,
                        //                     selected: [...selected, state.newItem]

                        //                 })
                        //             }}
                        //             color={colors.black} height={13} width={18} iconStyle={{
                        //                 // right: isRtl ? 270 : -5,
                        //                 top: 20
                        //             }} />} containerStyle={{ right: isRtl ? 10 : -20, height: 50, width: 50 }} />

                        //     {/* <Avatar source={AddImg} imageStyle={{
                        //             width: 15,
                        //             height: 15,
                        //             left: 10,
                        //             // right: 15,
                        //             top: 17
                        //         }} /> */}
                        //     {/* </TouchableOpacity> */}

                        // </View>
                        <AddItem
                            item={state.newItem}
                            isRtl={isRtl}
                            addNewItem={addNewItem}
                            changeTags={changeTags}
                        />
                    }
                </Fragment >
            }
        }
        , [
            onPress,
            onFocus,
            style,
        ])

    return (
        <View style={styles.contentStyle}>
            <TouchableOpacity style={[
                styles.selectViewStyle,
                shadow,
                rowStyle,
                spaceBetweenItems,
                horizontalCenteredFlex,
                isRtl && rtlRowStyle,
                selectStyle
            ]}
                onPress={onShow}
            >
                <TextComp children={isArrayHasData(selected) ? selected.map(
                    (item: InterestProps | CData | BankProps | CategoryProps | TagsProps | any) => {
                        if (item !== undefined && (!isRtl ? (item.title_en ? item.title_en : item.name_en ? item.name_en : item.name ? item.name : item) :
                            (item.title_ar ? item.title_ar : item.name_ar ? item.name_ar : item.name ? item.name : item)
                        )) {
                            return !isRtl ? (item?.name ?
                                `${item?.name}     ` :
                                item?.title_en ?
                                    (!item?.title_en ? "" : `${item?.title_en}  `) :
                                    item.name_en ?
                                        `${item.name_en}   `
                                        : typeof item === "string" && item)
                                :
                                (item?.name ?
                                    `${item?.name}   ` :
                                    item?.title_ar ?
                                        `${item.title_ar}   ` :
                                        item.name_ar ?
                                            `${item.name_ar}   `
                                            : typeof item === "string" && item)
                        }
                    }) :
                    selected
                } color={color || colors.black} fontSize={16} textStyle={styles.selectedTextStyle} />
                <Icon children={<SelectForwardIcon
                    // transform={`translate(0 10) rotate(-90)`}
                    width={10}
                    height={10}
                    iconStyle={styles.iconStyle}
                    onPress={onShow}
                />} />
            </TouchableOpacity>
            {visible && <View style={[styles.selectContentStyle, shadow, fullWidth, selectContentStyle]} >
                {isArrayHasData(data) ? data.map(dataMap) : <AddItem
                    item={state.newItem}
                    isRtl={isRtl}
                    addNewItem={addNewItem}
                    changeTags={changeTags}
                />}
            </View>}

            {multiSelect &&
                Array.isArray(selected)
                &&
                isArrayHasData(selected)
                &&
                <SelectedItems
                    isRtl={isRtl}
                    selectedItems={selected}
                    onDeleteItem={onDeleteItem}
                />
            }
            {err && <TextComp
                children={err || ""}
                color={"red"}
                fontSize={18}
                center
                textStyle={{
                    magrinBottom: 6
                }}
            />}
        </View >
    )

}


export default memo(Select)