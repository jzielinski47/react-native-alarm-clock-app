import { View, Text, StyleSheet, TouchableOpacity, Vibration } from 'react-native'
import React, { useEffect, useState } from 'react'

const DaySelector = ({ id, name, selectedArr, selectDaySelector, removeDaySelector }) => {

    const [selected, setSelected] = useState(selectedArr.filter(el => el.id === id).length > 0)

    const select = () => {
        !selected ? selectDaySelector(id, name) : removeDaySelector(id, name);
        setSelected(!selected)
    }

    return (
        <TouchableOpacity style={selected ? theme.selected : theme.container} onPress={() => select()}>
            <Text style={selected ? theme.textSelected : theme.text}>{name}</Text>
        </TouchableOpacity>
    )
}

export default DaySelector

const theme = StyleSheet.create({
    container: { marginVertical: 10, marginHorizontal: 5, padding: 5 },
    selected: { marginVertical: 10, marginHorizontal: 5, padding: 5, backgroundColor: 'black', borderRadius: 10 },
    text: { color: '#000' },
    textSelected: { color: '#fff' },
    image: { width: 20, height: 20 }
})
