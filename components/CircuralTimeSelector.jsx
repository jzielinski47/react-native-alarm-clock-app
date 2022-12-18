import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import CircuralSelectorButton from './buttons/CircuralSelectorButton'


const CircuralTimeSelector = ({ setHour, setMinute, isHoursSelected }) => {

    const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
    const conv = 2 * Math.PI / arr.length
    const ray = 130

    return (
        <View style={theme.container}>
            {arr.map((num, i) => {
                return <CircuralSelectorButton key={i} name={num} styles={{
                    position: 'absolute',
                    left: Math.cos(conv * (i + 1) - Math.PI / 2) * ray,
                    top: Math.sin(conv * (i + 1) - Math.PI / 2) * ray,
                }} onPress={() => {
                    isHoursSelected ? setHour(num) : setMinute(num)
                }} />


            })}
        </View>
    )
}

export default CircuralTimeSelector

const theme = StyleSheet.create({
    container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
})