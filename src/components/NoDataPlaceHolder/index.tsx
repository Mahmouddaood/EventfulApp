import React from 'react'
import {
    View,
    ActivityIndicator
} from 'react-native'
import NoDataPlaceHolderProps from './index.interface'
import TextComp from '../Text'
import registeredStyles from "../../utilities/registeredStyles";

const {
    useMemo,
    memo
} = React

const {
    flexStyle,
    horizontalCenteredFlex,
    verticalCenteredFlex
} = registeredStyles

const NoDataPlaceHolder: React.FC<NoDataPlaceHolderProps> = ({
    noData,
    loading,
    children,
    containerStyle
}): JSX.Element => {

    const ViewRenderer = useMemo(() => {
        let component: any
        if (loading) {
            component = <ActivityIndicator size="small" />
        } else if (noData || !children) {
            component = <TextComp children="No Data Found" />
        }
        return component
    }, [loading, children])




    return (
        <View style={[
            flexStyle,
            verticalCenteredFlex,
            horizontalCenteredFlex,
            containerStyle
        ]}>
            {ViewRenderer ? ViewRenderer : children}
        </View>
    )
}


export default memo(NoDataPlaceHolder)