import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import AlarmClocksList from './AlarmClocksList'

const ScrollContentContainer = (props) => {
    return (
        <ScrollView style={[props.styles]}>
            <View style={{ justifyContent: 'center', alignItems: 'center' }} >
                <AlarmClocksList />
            </View>
        </ScrollView>
    )
}

export default ScrollContentContainer