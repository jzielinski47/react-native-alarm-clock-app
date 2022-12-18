import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'

const DaySelector = ({ id, name, selectedArr, selectDaySelector, removeDaySelector }) => {

    const [selected, setSelected] = useState(selectedArr.filter(el => el.id === id).length > 0)

    const select = () => {
        !selected ? selectDaySelector(id, name) : removeDaySelector(id, name);
        setSelected(!selected)
    }

    return (
        <TouchableOpacity style={selected ? theme.selected : theme.container} onPress={() => select()}>
            <Text style={selected ? theme.textSelected : theme.text}>{name} </Text>
        </TouchableOpacity>
    )
}

export default DaySelector

const theme = StyleSheet.create({
    container: { margin: 10 },
    selected: { margin: 10, backgroundColor: 'black' },
    text: { color: '#000' },
    textSelected: { color: '#fff' },
    image: { width: 20, height: 20 }
})
