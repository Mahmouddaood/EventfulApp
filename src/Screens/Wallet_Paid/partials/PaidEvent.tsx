import React from 'react'
import {
    View,
    TouchableOpacity,
    TextInput,
    Platform,
} from 'react-native'
import styles from './styles';
import TextComp from '../../../components/Text'
import Button from '../../../components/Button';
import NoDataPlaceHolder from '../../../components/NoDataPlaceHolder';
import Icon from '../../../components/Icon'
import SearchIcon from '../../../components/SearchIcon'
import colors from '../../../utilities/colors';
import registeredStyles from "../../../utilities/registeredStyles";
import MainContext from '../../../utilities/Context/context'
import useWalletRequest from '../../../utilities/LogicScreens/Wallet/hooks/useWalletRequest'
import { RegistPaidData } from '../../../utilities/LogicScreens/Wallet/interfaces/index.interface';
import { isArrayHasData } from '../../../utilities/infastructure/validator/isThereData';

const {
    memo,
    useContext,
    useMemo
} = React
const {
    selfCentered,
    rowStyle,
    horizontalCenteredFlex,
    verticalCenteredFlex,
    spaceBetweenItems,
    rtlRowStyle
} = registeredStyles




const PaidEvent: React.FC = (): JSX.Element => {
    const { state: { token, langType, lang } } = useContext(MainContext)
    const isRtl = useMemo(() => langType === "ar", [langType])

    const {
        registerationData,
        registPaidLoading,
        searchValue,
        setSearch,
        searchForData
    } = useWalletRequest(token)

    console.log("regiData =>", registerationData)

    return (

        <View style={styles.paidViewStyle}>
            <View style={[
                styles.searchViewStyle,
                rowStyle,
                horizontalCenteredFlex,
                verticalCenteredFlex,
            ]}>

                <TextInput
                    placeholder={"Search"}
                    style={styles.searchInputStyle}
                    value={searchValue}
                    onChangeText={(e) => setSearch(e)}

                />
                <Icon

                    children={

                        <SearchIcon
                            onPress={searchForData}
                            width={15}
                            height={16}
                            color={colors.black}
                            iconStyle={styles.searchIconStyle}
                        />}
                />
                {/* <TouchableOpacity style={[styles.offerStyle,
                    rowStyle,
                isRtl && rtlRowStyle,
                    horizontalCenteredFlex]}>
                    <TextComp
                        children={"offer"}
                        fontSize={16}
                        color={colors.black}
                    />

                    <Icon children={<ForwardIcon
                        transform={`translate(0 6) rotate(-90)`}
                        width={12}
                        height={10}
                        iconStyle={isRtl ? { right: 10, top: 10 } : styles.forwardIconStyle}
                    />} />
                </TouchableOpacity> */}
                {/* <Select
        selectStyle={{
            width: "33%",
            right: 33,
            bottom: 3,
            height: 46
        }}
        items={[
            "offer",
            "uio",
            "sss"
        ]}

    /> */}
                {/* <Select
                multiSelect={false}
                selecteditems={"offer"}
                items={[
                    "offer",
                    "uio",
                    "sss"
                ]}
                selectStyle={{
                    width: "33%",
                    right: 33,
                    bottom: 3,
                    height: 46
                }}

            /> */}
            </View>
            <View style={[styles.recordStyle, verticalCenteredFlex]}>
                <TextComp
                    children={`${registerationData.length - 1 && registerationData.length - 1}  ${lang.NumberOfRecords}`}
                    color={colors.black}
                    fontSize={20}
                />
            </View>

            {isArrayHasData(registerationData) ? registerationData.map((item: RegistPaidData, idx: number) =>
                <TouchableOpacity style={styles.itemStyle}>
                    <View style={styles.paidItemStyle}>
                        <View style={[
                            styles.firstSecStyle,
                            rowStyle,
                            !isRtl && { right: 10 },
                            isRtl && rtlRowStyle,
                            // spaceBetweenItems,
                        ]}>
                            <View style={[
                                styles.titleViewStyle,
                                rowStyle,
                                isRtl && rtlRowStyle,
                                horizontalCenteredFlex,
                                verticalCenteredFlex,
                            ]}
                            >
                                <TextComp children={lang.Id} color={colors.placeholder} fontSize={15} textStyle={
                                    // Platform.OS === "ios" &&
                                    // isRtl ?
                                    // styles.rtlIdStyle
                                    // :
                                    styles.idStyle
                                }
                                />
                                <NoDataPlaceHolder loading={registPaidLoading} containerStyle={styles.indicatorStyle}>
                                    <TextComp children={item.title} color={colors.black} fontSize={15}
                                        textStyle={[{
                                            textAlign: isRtl ? "right" : "left",
                                        },
                                        // styles.rtlTitleStyle :
                                        styles.titleStyle
                                        ]} />
                                </NoDataPlaceHolder>
                            </View>

                            <View style={[
                                styles.secondSectionStyle,
                                rowStyle,
                                isRtl && rtlRowStyle,
                                // spaceBetweenItems,
                                horizontalCenteredFlex,
                                verticalCenteredFlex,
                                !isRtl && {
                                    width: "20%",
                                }
                            ]}
                            >
                                <TextComp children={lang.Cost} color={colors.placeholder} fontSize={14}
                                    textStyle={[
                                        // isRtl ?
                                        // styles.rtlCostStyle
                                        // :
                                        styles.costStyle,
                                        !isRtl && {
                                            marginStart: 25
                                        }

                                    ]} />
                                <NoDataPlaceHolder loading={registPaidLoading} >
                                    <TextComp children={`${item.total}$`} color={colors.black} fontSize={17}
                                        textStyle={
                                            // isRtl ?
                                            // styles.rtlTotalStyle
                                            // :
                                            styles.totalStyle
                                        } />
                                </NoDataPlaceHolder>
                            </View>
                        </View>
                        <View style={[styles.lineStyle, selfCentered]} />
                        <View style={[
                            styles.anthorItemStyle,
                            rowStyle,
                            isRtl && rtlRowStyle,
                            selfCentered,
                            spaceBetweenItems,
                        ]}
                        >
                            <TextComp children={lang.RegisteredNumber} color={colors.placeholder} fontSize={15} />
                            <NoDataPlaceHolder
                                loading={registPaidLoading}
                                containerStyle={{ alignItems: isRtl ? "flex-start" : "flex-end" }}>
                                <TextComp children={item.count} color={colors.black} fontSize={17} />
                            </NoDataPlaceHolder>
                        </View>
                        {/* <View style={[rowStyle,
                        spaceBetweenItems,
                        isRtl && rtlRowStyle,
                        selfCentered,
                        {
                            width: "95%",
                            marginTop: 15,
                            height: 40
                        }]}
                    > */}
                        {/* 
                        <Button onPress={() => Linking.openURL(item.export_link)} title={lang.Export} center containerStyle={[fullHeight, styles.buttonStyle]}
                            textStyle={{ fontSize: 15 }} /> */}
                    </View>
                    {/* <Button
                        title={lang.PaymentRequest}
                        center
                        containerStyle={[selfCentered, styles.buttonStyle]}
                        textStyle={styles.payTextStyle} />
                    </View> */}
                </TouchableOpacity>
            ) : <TextComp children={"There is No Data"} color={colors.flowerColor} center />}



        </View>
    );
}

export default memo(PaidEvent)