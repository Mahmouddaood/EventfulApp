import React from 'react'
import {
    ScrollView
} from 'react-native'
import EventInfoSection from './partails/EventInfoSection'
import registeredStyles from '../../../../utilities/registeredStyles'
import { NavigationProps } from '../../../../utilities/generalInterface'

const {
    flexStyle,
} = registeredStyles
const {
    memo
} = React

const EventSection: React.FC<NavigationProps> = ({
    navigation
}): JSX.Element =>
    <ScrollView
        style={flexStyle}
        scrollEnabled
        shouldRasterizeIOS
    >
        <EventInfoSection
            navigation={navigation}
        />
    </ScrollView>

export default memo(EventSection)