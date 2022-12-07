import React from 'react';
import { StyleSheet, Text, View, StatusBar, ActivityIndicator, TouchableOpacity } from 'react-native';

const CustomButtonEmp = ({ title, onPress }) => {

    const upper = (str) => str.toUpperCase();

    return (
        <TouchableOpacity onPress={onPress} style={styles.button}>
            <Text style={styles.text}>{upper(title)}</Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    button: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 6,
        paddingHorizontal: 16,
        // borderRadius: 4,
        borderRadius: 30,
        elevation: 3,
        backgroundColor: 'white',
    },
    text: {
        fontSize: 16,
        lineHeight: 21,
        fontWeight: 'bold',
        letterSpacing: 0.25,
        color: 'black',
    }
});


export default CustomButtonEmp;