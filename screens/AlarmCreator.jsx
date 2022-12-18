import { View, Text, StyleSheet, Dimensions, TouchableNativeFeedback } from 'react-native'
import CustomSquareButton2 from '../components/buttons/CustomSquareButton2';
import React from 'react'
import { Database } from '../api/Database';

const AlarmCreator = ({ route, navigation }) => {

    const addAlarm = () => {
        const newAlarm = { id: 0, hour: '00', minute: '00', active: false }
        navigation.goBack();
        Database.add(newAlarm.hour, newAlarm.minute, newAlarm.active ? 1 : 0)
        console.log(`added a new alarm at ${newAlarm.hour}:${newAlarm.minute}`)
    }

    return (
        <View style={theme.container}>

        

            <Text style={theme.text}>
                Add alarm at 00:00 AM
            </Text>

            <View style={theme.buttons} >
                <CustomSquareButton2 title={"Cancel"} onPress={() => navigation.goBack()} btnstylesheet={{ backgroundColor: '#fafafa' }} textstylesheet={{ color: '#00000060' }} />
                <CustomSquareButton2 title={"Add new"} onPress={() => addAlarm()} btnstylesheet={{ backgroundColor: 'black' }} textstylesheet={{ color: 'white' }} />
            </View >
        </View>
    )
}

export default AlarmCreator

const theme = StyleSheet.create({
    container: { flex: 1, backgroundColor: 'white', justifyContent: 'center', alignItems: 'center' },
    title: { fontSize: 32, textAlign: 'center' },
    text: { fontSize: 16, marginBottom: 50, textAlign: 'center' },
    button: { position: 'absolute', bottom: 70, left: Dimensions.get('window').width / 2 - 110 },
    buttons: { position: 'absolute', bottom: 70, flex: 1, flexDirection: 'row', justifyContent: 'center', alignItems: 'center' },
    colors: { primary: '#2673d0' }
})