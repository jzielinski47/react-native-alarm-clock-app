import { useState } from "react"
import { View, Text } from "react-native"
import AlarmClock from "./AlarmClock"

const AlarmClocksList = ({ alarms }) => {
    return (
        <View>
            {alarms.map(alarm => <AlarmClock key={alarm.id} id={alarm.id} hour={alarm.hour} minutes={alarm.minutes} active={alarm.active} />)}
        </View>
    )
}

export default AlarmClocksList

