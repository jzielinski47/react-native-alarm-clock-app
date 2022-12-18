import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

const DaySelector = ({ id, name, selected }) => {
    return (
        <View style={selected ? theme.selected : theme.container}>
            <Text style={selected ? theme.textSelected : theme.text}>DaySelector</Text>
        </View>
    )
}

export default DaySelector

const theme = StyleSheet.create({
    container: { flex: 1 },
    selected: { flex: 1, backgroundColor: 'black' },
    text: { color: '#000' },
    textSelected: { color: '#fff' },
    image: { width: 20, height: 20 }
})
