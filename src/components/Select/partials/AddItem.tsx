import React from 'react'
import {
    View,
    TouchableOpacity,
    TextInput
} from 'react-native'
import { AddItemProps } from "../index.interface";
import Avatar from "../../../components/Avatar";
import Icon from '../../../components/Icon'
import TextComp from '../../../components/Text'
import CreateEventIcon from '../../../components/CreateEventIcon'
import registeredStyles from '../../../utilities/registeredStyles'
import colors from '../../../utilities/colors'
import { itemWidth } from 'src/Screens/About&Terms/About';

const AddImg = require('../../../assests/eventfulAssests/images/AddImg.png')

const {
    memo
} = React

const AddItem: React.FC<AddItemProps> = ({
    addNewItem,
    changeTags,
    isRtl,
    item
}) => <View style={{ flexDirection: isRtl ? "row-reverse" : "row", justifyContent: "space-between", alignItems: "center" }}>
        <TextInput style={[
            isRtl && {
                writingDirection: "rtl",
                textAlign: "right"
            }, {
                borderWidth: 0.1,
                width: "73%",
                alignSelf: "center",
                borderColor: "#ced4e2",
                borderRadius: 12,
                paddingHorizontal: 8,
                elevation: 1
            }]}
            onChangeText={changeTags}
            placeholder={isRtl ? "اضف تاج" : "You can add you tag"}
            value={item.title_en}
        >

        </TextInput>
        <TouchableOpacity onPress={addNewItem} style={{
            paddingHorizontal: 3,
            flexDirection: "row", justifyContent: "space-between",
            width: 70, height: 35, borderRadius: 10, borderWidth: 1, borderColor: colors.mainColor, alignItems: "center"
        }}>
            <TextComp children={isRtl ? "ادخل" : "add"} fontSize={17} color={colors.mainColor} textStyle={{ fontWeight: "bold" }} />
            <Icon onPress={addNewItem} children={<CreateEventIcon onPress={addNewItem} color={colors.mainColor} height={13} width={18} iconStyle={{
                top: 7
            }} />} />
        </TouchableOpacity>

    </View>


export default memo(AddItem)