import { View, Text, ScrollView, StyleSheet, Button, SafeAreaView, Dimensions } from 'react-native'
import CustomSquareButton from '../components/buttons/CustomSquareButton';
import AlarmClocksList from '../components/AlarmClocksList';
import { React, useState } from 'react'

const List = ({ navigation }) => {

    const [alarms, setAlarms] = useState([
        { id: 0, hour: '00', minutes: '00', active: false },
        { id: 1, hour: '00', minutes: '00', active: false },
        { id: 2, hour: '00', minutes: '00', active: false },
        { id: 3, hour: '00', minutes: '00', active: false },
    ])

    return (
        <View style={theme.container}>
            <ScrollView style={{ flexGrow: 1, width: '100%', height: '100%' }}>

                <AlarmClocksList alarms={alarms} />

            </ScrollView>
            <View style={theme.button} >
                <CustomSquareButton title={"Add alarm clock"} onPress={() => navigation.navigate('creator')} />
            </View >
        </View>
    )
}

const theme = StyleSheet.create({
    safeArea: { flex: 1 },
    container: { flex: 1, flexDirection: 'column', alignItems: 'center' },
    panel: { flex: 1, justifyContent: 'center', alignItems: 'center' },
    button: { position: 'absolute', bottom: 70, left: Dimensions.get('window').width / 2 - 110 },
    colors: { black: '#000', white: 'white' },

});

export default List;