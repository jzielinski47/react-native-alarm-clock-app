import { View, Text, ScrollView, StyleSheet, Button, SafeAreaView, Dimensions } from 'react-native'
import React from 'react'
import CustomSquareButton from '../components/CustomSquareButton';
import ScrollContentContainer from '../components/ScrollContentContainer';

const List = ({ navigation }) => {
    console.log(Dimensions.get('window').width)

    return (
        <View style={theme.container}>
            <ScrollContentContainer styles={{ flexGrow: 1, width: '100%', height: '100%' }} />
            <View style={theme.button} >
                <CustomSquareButton title={"Add alarm clock"} onPress={() => navigation.navigate('creator')} />
            </View >
        </View>
    )
}

const theme = StyleSheet.create({
    safeArea: { flex: 1 },
    container: { flex: 1, flexDirection: 'column', alignItems: 'center' },
    panel: { flex: 1, justifyContent: 'center', alignItems: 'center' },
    button: { position: 'absolute', bottom: 70, left: Dimensions.get('window').width / 2 - 110 },
    colors: { black: '#000', white: 'white' },

});

export default List;