import React from 'react'
import {
    View,
    ImageBackground,
    TouchableOpacity
} from 'react-native'
import Icon from '../Icon'
import styles from './styles'
import BottomTabProps, { imageArrProps, imageArr } from './index.interface'
import Avatar from '../Avatar';
import registeredStyles from '../../utilities/registeredStyles'
import colors from '../../utilities/colors';
import MainContext from '../../utilities/Context/context'
import useGetProfileRequest from '../../utilities/LogicScreens/Profile/hooks/useGetProfileRequest'
const {
    selfCentered,
    rowStyle,
    fullWidth,
    horizontalCenteredFlex,
    spaceBetweenItems,
    verticalCenteredFlex
} = registeredStyles
const AssetImg = require('../../assests/eventfulAssests/images/Asset.png')
const IconImg = require('../../assests/eventfulAssests/images/Icon.png')

const {
    memo,
    useCallback,
    useMemo,
    useState,
    useContext
} = React

const BackGround = {
    backgroundColor: colors.black
}

const BottomTab: React.FC<BottomTabProps> = ({
    navigation,
    bottomViewStyle,
    selectedTab
}): JSX.Element => {

    const { navigate } = useMemo(() => navigation, [navigation])
    const [homeTab, setHome] = useState<string | any>(selectedTab)
    const { state: { langType, id, lang, photo_url } } = useContext(MainContext)
    const isRtl = useMemo(() => langType === "ar", [langType])
    const {
        data
    } = useGetProfileRequest(id)
    // const { state, setContext } = useContext(MainContext)
    const tabNavigate = useCallback((route: string,
        //  edit: boolean
    ) => () => {
        // setContext({
        //     ...state,
        //     bottomTab: route
        // })
        console.log("route =>", route)
        setHome(route)
        return navigate(route)
        // if (edit) {
        //     console.log("here =>")
        //     return navigate(route, { profileData: data })
        // } else {

        //     console.log("not here =>")
        //     return navigate(route)
        // }
    }, [
        navigate,
        setHome,
        // data
        // setContext,
        // state
    ])
    const tabMap = useCallback((item: imageArrProps, idx: number) => {
        // const selected = item.route === selectedTab && { backgroundColor: colors.mainBlueSky }

        //     return item.route === selectedTab ? <ImageBackground source={AssetImg} style={[
        //         styles.imgContentStyle,
        //         {
        //             left: item.route === "Notification" ? 0 : item.route === "MainProfile" ? -80 : item.route === "Wallet" ? 70 :
        //                 item.route === "ProfileEvents" ? -2 : -10
        //         }


        //     ]}   >

        //         <TouchableOpacity key={idx} onPress={tabNavigate(item.route)} style={[
        //             styles.tabItemStyle,
        //             // { left: item.route !== "MainProfile" ? -30 : 0 },
        //             // selected,
        //             verticalCenteredFlex,
        //             horizontalCenteredFlex
        //         ]}

        //         >
        //             {/* <Avatar source={item.image} imageStyle={idx == 4 ? styles.groupImgStyle : styles.imageStyle} /> */}
        //             <Icon children={<item.image onPress={tabNavigate(item.route)} color={colors.mainColor} />} />
        //         </TouchableOpacity>
        //     </ImageBackground>
        //         :
        //         <TouchableOpacity key={idx} onPress={tabNavigate(item.route)} style={[
        //             styles.tabItemStyle,
        //             // selected,
        //             verticalCenteredFlex,
        //             horizontalCenteredFlex
        //         ]}

        //         >
        //             <Icon children={<item.image onPress={tabNavigate(item.route)} />} />
        //         </TouchableOpacity>
        // }
        return <TouchableOpacity key={idx} onPress={tabNavigate(item.route,
            //  idx === 4 && true
        )} style={[
            {
                width: 47,
                height: 34,
                borderRadius: 12,
            },
            // selected,
            verticalCenteredFlex,
            horizontalCenteredFlex
        ]}

        >
            {item.route === "Profile" ?


                <ImageBackground source={AssetImg} style={{
                    width: 140, height: 140,
                    bottom: -41,
                    justifyContent: "center",
                    alignItems: "center",
                    position: "absolute",
                    // elevation: 1,

                    // backgroundColor: colors.black

                }} >
                    <TouchableOpacity style={{
                        width: 76, height: 76,
                        elevation: 5,
                        bottom: 3,
                        paddingLeft: 6,
                        paddingTop: 5,
                        backgroundColor: colors.main,
                        borderRadius: 45,
                        justifyContent: "center",
                        alignItems: "center",
                        alignSelf: "center",
                        right: 3

                    }}
                        onPress={tabNavigate(item.route)}
                    >


                        <Icon
                            children={<item.image
                                onPress={tabNavigate(item.route)}
                                color={colors.mainColor} />
                            }
                            onPress={tabNavigate(item.route)}

                        //  idx === 4 && true
                        />

                    </TouchableOpacity>
                </ImageBackground>

                :
                <Icon children={<item.image onPress={tabNavigate(item.route
                    //  idx === 4 && true
                )}
                    width={15}
                    height={25}
                    color={
                        item.route === selectedTab ?
                            colors.mainColor :
                            "#dfdede"
                    }
                    iconStyle={{
                        left: idx === 3 ? 6 : idx === 4 ? 7 : -2,
                    }
                    }
                />} />

            }
        </TouchableOpacity>

    }
        , [
            tabNavigate,
            homeTab,

        ])
    const tabView = useMemo(() => imageArr.map(tabMap), [
        tabMap,
        selectedTab


    ])
    // const navigateHome = useCallback(() => {
    //     setHome(!homeTab)
    //     navigate("Profile")
    // }, [
    //     navigate,
    //     setHome,
    //     homeTab
    // ])
    return <View style={[styles.shadowBottomStyle, fullWidth, horizontalCenteredFlex, verticalCenteredFlex]}>

        <View style={[
            rowStyle,
            fullWidth,
            spaceBetweenItems,
            horizontalCenteredFlex,
            styles.bottomViewStyle
        ]}>
            {/* <TouchableOpacity onPress={navigateHome}>
            <ImageBackground source={AssetImg} style={[homeTab ? styles.pressedBackImgStyle : styles.backImgStyle]}   >
                <Avatar source={IconImg} imageStyle={[styles.innerImgStyle, selfCentered]} />
            </ImageBackground>
        </TouchableOpacity> */}
            <View style={[
                {
                    width: "90%",
                    justifyContent: "space-between",
                    flexDirection: "row",
                    alignItems: "center",
                    left: 20
                }
                , rowStyle, horizontalCenteredFlex,
                //  !homeTab && {
                //     width: "78%",
                //     left: selectedTab === "MainProfile" ? 25 : 0

            ]}>
                {/* <View style={{ width: 65, height: 65, borderRadius: 35, backgroundColor: colors.white, alignSelf: "center", left: 20 }}></View> */}

                {tabView}
            </View>
        </View >
    </View>
}

export default memo(BottomTab)


// {imageArr.map((item: imageArrProps, idx: number) =>
//     <TouchableOpacity key={idx} onPress={tabNavigate(item.route)} style={[
//         {
//             width: 47,
//             height: 34,
//             borderRadius: 12,
//         },
//         // selected,
//         verticalCenteredFlex,
//         horizontalCenteredFlex
//     ]}

//     >
//         {item.route === homeTab ?
//             <View style={{
//                 width: 85, height: 83,
//                 elevation: 5,
//                 bottom: 38,
//                 // backgroundColor: "#000",
//                 borderRadius: 45,
//                 justifyContent: "center",
//                 alignItems: "center",
//                 alignSelf: "center"

//             }}>


//                 <ImageBackground source={AssetImg} style={{
//                     width: 160, height: 150,
//                     // bottom: -12,
//                     justifyContent: "center",
//                     alignItems: "center",
//                     position: "absolute",
//                     // elevation: 1,
//                     paddingLeft: 3,
//                     paddingTop: 5

//                 }} >


//                     <Icon children={<item.image onPress={tabNavigate(item.route)} />} />

//                 </ImageBackground>
//             </View>
//             :
//             <Icon children={<item.image onPress={tabNavigate(item.route)} />} />

//         }
//     </TouchableOpacity>
// )}