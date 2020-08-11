import React from 'react'
import { DrawerNavigatorItems } from 'react-navigation-drawer'
import { ScrollView, View, TouchableOpacity } from 'react-native'
import TextComp from '../Text'
import { NavigationProps } from '../../utilities/generalInterface'
import Avatar from '../Avatar'
import colors from '../../utilities/colors'
// import { TouchableOpacity } from 'react-native-gesture-handler'
const ProfImg = require('../../assests/eventfulAssests/images/ProfileImg.png')
interface SideProps {
    props: any
}
const SideBar: React.FC<SideProps> = ({
    props
}): JSX.Element => {

    // type TintColor = {
    //     tintColor: any
    // }

    // const { state, setContext } = useContext(MainContext)
    // const { langType, lang } = useMemo(() => state, [state])
    // const isRtl = useMemo(() => langType === "ar", [langType])




    return <ScrollView>

        <View style={{ height: 160, justifyContent: "center", alignItems: "center", marginRight: 20 }}>
            <Avatar source={ProfImg} imageStyle={{ width: 65, height: 65, marginBottom: 12, borderRadius: 20, marginRight: 20 }} />
            <TextComp children={"Mohammed Abdallah"} color={colors.black} />
        </View>

        <View style={{ marginTop: 25, padding: 15 }}>

            <TouchableOpacity onPress={() => console.log("ases")}>
                <TextComp children={"Language"} color={colors.black} />
            </TouchableOpacity>

            {/* <DrawerNavigatorItems {...props} /> */}
        </View>


    </ScrollView>
}
export default SideBar