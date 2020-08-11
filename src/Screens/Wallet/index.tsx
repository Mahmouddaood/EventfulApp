import React from 'react'
import {
    View,
    ImageBackground,
    ScrollView,
} from 'react-native'
import styles from './styles';
import WalletProps, { buttonList, walletData, WalletDataProps } from './index.interface'
import TextComp from '../../components/Text'
import Header from '../../components/HeaderComp'
import BackIcon from '../../components/BackIcon'
import WalletIcon from '../../components/WalletIcon'
import Icon from '../../components/Icon'
import List from '../../components/List';
import ViewItem from '../../components/ViewItem'
import registeredStyles from "../../utilities/registeredStyles";
import BottomTab from '../../components/BottomTab';
import MainContext from '../../utilities/Context/context'
import useWalletRequest from '../../utilities/LogicScreens/Wallet/hooks/useWalletRequest'
const WalletImg = require('../../assests/eventfulAssests/images/Wallet.png')

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
    verticalCenteredFlex,
    spaceBetweenItems,
} = registeredStyles

const Wallet: React.FC<WalletProps> = ({ navigation, walletData }): JSX.Element => {

    const {
        data,
        loading
    } = useWalletRequest("")
    const { state: { lang, langType } } = useContext(MainContext)
    const isRtl = useMemo(() => langType === "ar", [langType])

    const walletItemRenderer = useCallback((item: WalletDataProps) => <ViewItem
        isRtl={isRtl}
        image={item.image}
        value={item.value}
        key={item.key}
        itemStyle={styles.itemStyle}
        detailView={<TextComp children={item.name} center textStyle={styles.nameStyle} />}
        firstContentStyle={{ width: "46%" }}
        valueStyle={styles.valueStyle}
    />, [isRtl])

    return <Fragment>
        <ScrollView
            style={flexStyle}
            scrollEnabled
            shouldRasterizeIOS
        >
            <Header
                navigation={navigation}
                screenTitle='Wallet'
                leftIcon={<BackIcon />}
            />
            <ImageBackground
                source={WalletImg}
                style={[
                    styles.walletBackImgStyle,
                    verticalCenteredFlex,
                    selfCentered
                ]}>
                <View style={[styles.imgContentStyle, rowStyle, spaceBetweenItems]}>
                    <Icon children={<WalletIcon />} />
                    <View >
                        <TextComp children={lang.YuHave}
                            // 'you have'
                            center
                            fontSize={14} />
                        <TextComp children={`200 ${lang.Currency}`} fontSize={24} />
                    </View>
                </View>
            </ImageBackground>
            <View style={[styles.underLineStyle, fullWidth]} />
            <List
                items={buttonList(isRtl)}
                flatViewStyle={styles.flatStyle}
            />
            <ScrollView scrollEnabled style={[styles.walletViewStyle, flexStyle]}>
                {walletData.map(walletItemRenderer)}
            </ScrollView>
        </ScrollView>
        <BottomTab navigation={navigation} />
    </Fragment>

}

Wallet.defaultProps = {
    walletData: walletData
}

export default memo(Wallet)