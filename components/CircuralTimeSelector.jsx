import { View, Text, StyleSheet } from 'react-native'
import React, { useEffect, useState } from 'react'
import CircuralSelectorButton from './buttons/CircuralSelectorButton'


const CircuralTimeSelector = ({ setHour, setMinute, isHoursSelected }) => {

    const hours = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
    const hoursAdditional = [13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 0]

    const minutes = [0, 5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55]
    const conv = 2 * Math.PI / hours.length
    const ray = 130

    const [lastNumber, setLastNumber] = useState(0)
    const [index, setIndex] = useState(1)

    useEffect(() => setIndex(1), [lastNumber])

    if (isHoursSelected) {
        return (
            <View style={theme.container}>
                {hours.map((num, i) => {
                    return <CircuralSelectorButton key={i} name={num} styles={{
                        position: 'absolute',
                        left: Math.cos(conv * (i + 1) - Math.PI / 2) * ray,
                        top: Math.sin(conv * (i + 1) - Math.PI / 2) * ray,
                        width: 50, height: 50, backgroundColor: '#303030'
                    }} onPress={() => {
                        isHoursSelected ? setHour(num) : setMinute(num)
                    }} />

                })}

                <View style={{ position: 'absolute', left: 12.5, top: 12.5 }}>
                    {hoursAdditional.map((num, i) => {
                        return <CircuralSelectorButton key={i} name={num} styles={{
                            position: 'absolute',
                            left: Math.cos(conv * (i + 1) - Math.PI / 2) * ray / 1.7,
                            top: Math.sin(conv * (i + 1) - Math.PI / 2) * ray / 1.7,
                            width: 30, height: 30, backgroundColor: '#7d7d7d'
                        }} onPress={() => {
                            isHoursSelected ? setHour(num) : setMinute(num)
                        }} />

                    })}
                </View>

            </View>
        )
    } else {
        return (
            <View style={theme.container}>
                {minutes.map((num, i) => {
                    return <CircuralSelectorButton key={i} name={num} styles={{
                        position: 'absolute',
                        left: Math.cos(conv * (i + 1) - Math.PI / 2) * ray,
                        top: Math.sin(conv * (i + 1) - Math.PI / 2) * ray,
                        width: 50, height: 50, backgroundColor: '#303030'
                    }} onPress={() => {
                        setLastNumber(num);
                        console.log(lastNumber, num, index);
                        num !== lastNumber ? setIndex(1) : null
                        num !== lastNumber ? setMinute(num) : setMinute(num + index)
                        setIndex(index < 5 ? index + 1 : 1)



                    }} />

                })}

            </View>
        )
    }

}

export default CircuralTimeSelector

const theme = StyleSheet.create({
    container: { flex: 1, justifyContent: 'center', alignItems: 'center', position: 'absolute', left: '35%', top: '30%' },
})