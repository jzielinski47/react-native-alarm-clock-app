import { View, Text, Switch, Image, StyleSheet, Animated, TouchableNativeFeedback } from 'react-native'
import { React, useState } from 'react'

const AlarmClock = ({ id, hour, minutes, active }) => {

  const [isActive, setIsActive] = useState(false);
  const [expanded, setExpanded] = useState(false);
  const height = new Animated.Value(200);

  let currentHeight = 0

  const toggle = () => {
    currentHeight = expanded ? 400 : 200;
    Animated.spring(height, { toValue: currentHeight, useNativeDriver: false }).start();
    setExpanded(!expanded);
  }

  return (    
      <View style={[theme.container]}>
        <View style={theme.section}>
          <Text style={theme.title}>{`${hour}:${minutes}`}</Text>
          <Switch style={theme.switch} />
        </View>
        <View style={theme.section}>
          <Image style={theme.image} source={require('../assets/remove-black.png')} />
          <Image style={theme.image} source={require('../assets/remove-black.png')} />
        </View>
        <View style={theme.section}>
          <Text>Monday</Text>
        </View>
      </View>    
  )
}

export default AlarmClock

const theme = StyleSheet.create({
  container: { flex: 1, flexDirection: 'column', marginHorizontal: 10, marginTop: 5, paddingBottom: 10, padding: 5, borderBottomColor: '#e8e8e8', borderBottomWidth: 2 },
  section: { flexDirection: "row", justifyContent: "space-between", alignItems: "center", marginVertical: 2 },
  title: { fontSize: 32, textAlign: 'center' },
  image: { width: 20, height: 20 }
})
