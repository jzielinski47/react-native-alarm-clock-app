import { View, Text, StyleSheet, Dimensions, TouchableNativeFeedback, TouchableOpacity } from 'react-native'
import CustomSquareButton2 from '../components/buttons/CustomSquareButton2';
import React, { useState, useEffect } from 'react'
import { Database } from '../../api/Database';
import CircuralTimeSelector from '../components/CircuralTimeSelector';
import { formatNumber } from '../../api/Utils';

const AlarmCreator = ({ route, navigation }) => {

    const [hour, setHour] = useState(new Date().getHours());
    const [minute, setMinute] = useState(new Date().getMinutes());
    const [isHoursSelected, setIsHoursSelected] = useState(true)

    const addAlarm = () => {
        const newAlarm = { id: 0, hour: hour, minute: minute, active: false }
        navigation.goBack();
        Database.add(newAlarm.hour, newAlarm.minute, newAlarm.active ? 1 : 0)
        console.log(`added a new alarm at ${newAlarm.hour}:${newAlarm.minute}`)
    }

    return (
        <View style={theme.container}>

            <View style={{ flex: 1, flexDirection: 'column' }}>
                <View style={{ flex: 1, flexDirection: 'row', marginTop: 20 }}>
                    <TouchableOpacity onPress={() => setIsHoursSelected(true)}>
                        <Text style={[theme.title, isHoursSelected ? theme.selected : null]}>{formatNumber(hour)}</Text>
                    </TouchableOpacity>
                    <Text style={theme.title}>:</Text>
                    <TouchableOpacity onPress={() => setIsHoursSelected(false)}>
                        <Text style={[theme.title, !isHoursSelected ? theme.selected : null]}>{formatNumber(minute)}</Text>
                    </TouchableOpacity>
                </View>
                <View style={{ flex: 6, position: 'relative', margin: 20 }}>
                    <CircuralTimeSelector setHour={setHour} setMinute={setMinute} isHoursSelected={isHoursSelected} />
                </View>
            </View>

            {/* <Text style={theme.text}>Add alarm at 00:00 AM</Text> */}

            <View style={theme.buttons} >
                <CustomSquareButton2 title={"Cancel"} onPress={() => navigation.goBack()} btnstylesheet={{ backgroundColor: '#fafafa' }} textstylesheet={{ color: '#00000060' }} />
                <CustomSquareButton2 title={"Add new"} onPress={() => addAlarm()} btnstylesheet={{ backgroundColor: 'black' }} textstylesheet={{ color: 'white' }} />
            </View >
        </View>
    )
}

export default AlarmCreator

const theme = StyleSheet.create({
    container: { flex: 1, backgroundColor: '#f0f2f5', justifyContent: 'center', alignItems: 'center' },
    panel: {},
    title: { fontSize: 80, textAlign: 'center' },
    selected: { color: '#2673d0' },
    text: { fontSize: 16, marginBottom: 50, textAlign: 'center' },
    button: { position: 'absolute', bottom: 70, left: Dimensions.get('window').width / 2 - 110 },
    buttons: { position: 'absolute', bottom: 70, flex: 1, flexDirection: 'row', justifyContent: 'center', alignItems: 'center' },
    colors: { primary: '#2673d0' }
})