import { View, Text, ScrollView, StyleSheet, Button, SafeAreaView, Dimensions } from 'react-native'
import CustomSquareButton from '../components/buttons/CustomSquareButton';
import AlarmClocksList from '../components/AlarmClocksList';
import { React, useEffect, useState } from 'react'
import { Database } from "../api/Database";

const List = ({ navigation }) => {

    const [alarms, setAlarms] = useState([])

    useEffect(() => {
        navigation.addListener('focus', () => {
            setAlarms([])
            Database.getAll().then((all) => {
                console.log(JSON.parse(all));

                const storedAlarms = JSON.parse(all)
                storedAlarms.rows._array.forEach(alarm => setAlarms(prevState => [...prevState, alarm]))
            });
        });
    }, []);

    useEffect(() => console.log(alarms), [alarms])

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