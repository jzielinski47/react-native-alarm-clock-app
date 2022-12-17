import { useState } from "react"
import { View, Text } from "react-native"
import AlarmClock from "./AlarmClock"

const AlarmClocksList = (props) => {

    const [alarms, setAlarms] = useState([
        { id: 0, hour: "22", minutes: "00", active: false }
    ])

    return (
        <View>
            {alarms.map(alarm => <AlarmClock details={alarm} key={alarm.id} />)}
        </View>
    )
}

export default AlarmClocksList

