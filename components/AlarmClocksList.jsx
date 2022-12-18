import { useState } from "react"
import { View, Text } from "react-native"
import AlarmClock from "./AlarmClock"

const AlarmClocksList = ({ alarms, remove }) => {
    return (
        <View>
            {alarms.map((alarm, i) => <AlarmClock key={alarm.id} id={alarm.id} hour={alarm.hour} minute={alarm.minute} active={alarm.active} remove={remove} />)}
        </View>
    )
}

export default AlarmClocksList

