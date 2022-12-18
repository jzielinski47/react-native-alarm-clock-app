import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import React from 'react'

const CircuralSelectorButton = ({ name, onPress, styles }) => {
    return (
        <TouchableOpacity style={[styles, theme.container]} onPress={onPress}>
            <Text style={{ color: '#fff' }}>{name}</Text>
        </TouchableOpacity >
    )
}

export default CircuralSelectorButton

const theme = StyleSheet.create({
    container: { flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#303030', borderRadius: 250, width: 40, height: 40 },
})