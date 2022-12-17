import React from 'react';
import { StyleSheet, Text, View, StatusBar, ActivityIndicator, TouchableOpacity } from 'react-native';

const CustomSquareButton2 = ({ title, onPress, btnstylesheet, textstylesheet }) => {
    return (
        <TouchableOpacity onPress={onPress} style={[styles.button, btnstylesheet]}>
            <Text style={[styles.text, textstylesheet]}>{title}</Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    button: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 12,
        paddingHorizontal: 32,
        // borderRadius: 4,
        // borderRadius: 30,
        borderRadius: 4,
        elevation: 3,
        // backgroundColor: 'rgb(40,115,255)',
        width: '40%',
        // backgroundColor: 'black',
        margin: 5
    },
    text: {
        fontSize: 16,
        lineHeight: 21,
        fontWeight: 'bold',
        letterSpacing: 0.25,
        // color: 'white',
    }
});


export default CustomSquareButton2;