import { useState } from "react"
import { View, Text } from "react-native"
import AlarmClock from "./AlarmClock"

const AlarmClocksList = (props) => {

    const [alarms, setAlarms] = useState([])

    return (
        <View>
            {alarms.map(alarm => <AlarmClock />)}
        </View>
    )
}
export default AlarmClocksList

