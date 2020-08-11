import React from 'react'
import {
    View
} from 'react-native'
import styles from './styles';
import TextComp from '../../../components/Text'
import Input from '../../../components/Input';
import Select from '../../../components/Select';
import Button from '../../../components/Button';
import RadioButton from '../../../components/RadioButton';
import registeredStyles from "../../../utilities/registeredStyles";
import MainContext from '../../../utilities/Context/context'
import useWalletRequest from '../../../utilities/LogicScreens/Wallet/hooks/useWalletRequest'
import colors from '../../../utilities/colors';
import { BankProps } from '../../../utilities/LogicScreens/Wallet/interfaces/index.interface';

const {
    memo,
    useCallback,
    useContext,
    useMemo,
    Fragment
} = React
const {
    flexStyle,
    fullWidth,
    selfCentered,
    rowStyle,
    horizontalCenteredFlex,
    verticalCenteredFlex,
    spaceBetweenItems,
} = registeredStyles




const AddAccount: React.FC = (): JSX.Element => {

    const { state: { token, langType, lang } } = useContext(MainContext)
    const isRtl = useMemo(() => langType === "ar", [langType])
    const {
        bankData,
        bankLoading,
        toastMsg,
        userData,
        setUserData,
        handleAddAccount,
        formError,
        radioVal,
        changeRadio,
        radioChanged,
        setBankId,
        setPrimaryAccount,
        bankId,
        account
    } = useWalletRequest(token)

    // console.log("user", userData)
    console.log("sschaj", radioVal)

    const onChange = useCallback((state: string) => (e: string) => setUserData({
        ...userData,
        [state]: e
    }), [
        userData,
        setUserData
    ])

    const sel = useMemo(() => userData.primary_account === 2 ? "account2" : "account1"
        , [
            userData.primary_account,
            radioChanged
        ])

    const RadioProps = {
        titleFound: false,
        onChange: (val: string) => {
            setPrimaryAccount(val === "account1" ? 1 : 2)
            // setUserData({
            //     ...userData,
            //     primary_account: val === "account1" ? 1 : 2
            // })
            changeRadio(val)
        }
    }
    console.log("bankId =>", radioVal)

    return (
        <Fragment >
            <View style={[
                styles.addTxtViewStyle,
                fullWidth
            ]}>
                <TextComp
                    children={lang.AddAccount}
                    fontSize={25}
                    color={colors.black} />
            </View>
            <Select
                multiSelect={false}
                selecteditems={lang.ChooseBank}
                items={bankData}
                isRtl={isRtl}
                onChangeSelected={(item: BankProps) => {
                    console.log("it", item)
                    setBankId(item.id)
                }}
            // selectStyle={{ marginBottom: 25 }}

            />
            <View style={{ bottom: 15 }}>

                <RadioButton
                    radioData={["account1"]}
                    {...RadioProps}
                    selected={radioVal}
                />
                <View style={{ bottom: 20 }}>
                    <Input
                        isRTL={isRtl}
                        placeholder={lang.NumberOfAccounts}
                        inputStyle={styles.inputStyle}
                        value={userData.account_number1}
                        onChange={onChange("account_number1")}
                        err={formError["account_number1"]}

                    />
                    <Input
                        isRTL={isRtl}
                        placeholder={lang.IBAN}
                        inputStyle={styles.inputStyle}
                        value={userData.iban1}
                        onChange={onChange("iban1")}
                        err={formError["iban1"]}
                    />
                </View>

            </View>
            <View style={{ bottom: 15 }}>
                <RadioButton
                    radioData={["account2"]}
                    {...RadioProps}
                    selected={radioVal}


                />
                <View style={{ bottom: 20 }}>
                    <Input
                        placeholder={lang.NumberOfAccounts}
                        inputStyle={styles.inputStyle}
                        value={userData.account_number2}
                        onChange={onChange("account_number2")}
                        err={formError["account_number2"]}
                        isRTL={isRtl}
                    />
                    <Input
                        isRTL={isRtl}
                        placeholder={lang.IBAN}
                        inputStyle={{
                            width: "93%"
                        }}
                        value={userData.iban2}
                        onChange={onChange("iban2")}
                        err={formError["iban2"]}

                    />
                </View>
            </View>
            <TextComp
                children={toastMsg}
                color={"green"}
                fontSize={18}
                center
            />
            <Button
                onPress={handleAddAccount}
                title={lang.Save}
                containerStyle={[styles.addAccountStyle, selfCentered]} />
        </Fragment>
    )
}

export default memo(AddAccount)