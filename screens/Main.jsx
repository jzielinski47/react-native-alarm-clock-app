import { StyleSheet, Text, View, StatusBar, ActivityIndicator, TouchableOpacity, ImageBackground, Image, Dimensions } from 'react-native';
import CustomButton from '../components/CustomButton';
import React from 'react'

const screen = { width: Dimensions.get("window").width, height: Dimensions.get("window").height }

const Main = ({ navigation }) => {
    return (
        <>
            <View style={theme.container}>
                <Text style={[theme.lettermark, { top: 70 }]}>SQLITE APP</Text>
                <Text style={[theme.lettermark, { bottom: 85 }]}>by Jakub Zielinski</Text>
                <View style={theme.content} >
                    <Image style={theme.illustration} source={{ uri: 'https://i.imgur.com/DbIYmzl.png' }} />
                    <Text style={theme.title}>Alarm Clock App</Text>
                    <Text style={theme.text}>start managing your time{"\n"}with alarm clocks</Text>
                    <CustomButton title={'Get started'} onPress={() => navigation.navigate('list')} />
                </View>
                <StatusBar style="auto" />
            </View>
        </>
    )
}

const theme = StyleSheet.create({
    container: { flex: 1, backgroundColor: 'white', justifyContent: 'center', alignItems: 'center' },
    lettermark: { fontSize: 12, color: 'gray', fontWeight: 'bold', position: 'absolute' },
    content: { flex: 1, justifyContent: 'center', alignItems: 'center' },
    illustration: { width: 200, height: 200 },
    title: { fontSize: 32, textAlign: 'center' },
    text: { fontSize: 16, marginBottom: 30, textAlign: 'center' },
    colors: { primary: '#2673d0' }
})

export default Main;