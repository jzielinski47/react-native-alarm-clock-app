import { useState } from "react"
import { View, Text } from "react-native"
import AlarmClock from "./AlarmClock"

const AlarmClocksList = (props) => {

    const [alarms, setAlarms] = useState([
        { id: 0, hour: 22, minutes: 0, active: false }
    ])

    return (
        <View>
            {alarms.map(alarm => <AlarmClock details={alarm} />)}
        </View>
    )
}

export default AlarmClocksList

