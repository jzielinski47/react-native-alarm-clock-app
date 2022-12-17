import { View, Text, StyleSheet, Dimensions } from 'react-native'
import CustomSquareButton2 from '../components/CustomSquareButton2';
import React from 'react'

const AddAlarm = ({ navigation }) => {
    return (
        <View style={theme.container}>
            <Text>AddAlarm</Text>


            <View style={theme.buttons} >
                <CustomSquareButton2 title={"Cancel"} onPress={() => navigation.navigate('list')} btnstylesheet={{ backgroundColor: '#fafafa' }} textstylesheet={{ color: '#00000060' }} />
                <CustomSquareButton2 title={"Add new"} onPress={() => navigation.navigate('list')} btnstylesheet={{ backgroundColor: 'black' }} textstylesheet={{ color: 'white' }} />
            </View >
        </View>
    )
}

export default AddAlarm

const theme = StyleSheet.create({
    container: { flex: 1, backgroundColor: 'white', justifyContent: 'center', alignItems: 'center' },
    title: { fontSize: 32, textAlign: 'center' },
    text: { fontSize: 16, marginBottom: 50, textAlign: 'center' },
    button: { position: 'absolute', bottom: 70, left: Dimensions.get('window').width / 2 - 110 },
    buttons: { position: 'absolute', bottom: 70, flex: 1, flexDirection: 'row', justifyContent: 'center', alignItems: 'center' },
    colors: { primary: '#2673d0' }
})