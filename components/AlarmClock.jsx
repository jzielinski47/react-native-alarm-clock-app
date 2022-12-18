import { View, Text, Switch, Image, StyleSheet, Animated, TouchableNativeFeedback, TouchableOpacity } from 'react-native'
import { React, useState } from 'react'

const AlarmClock = ({ id, hour, minute, active, remove }) => {

  const [isActive, setIsActive] = useState(false);
  const [expanded, setExpanded] = useState(false);
  const height = new Animated.Value(200);

  let currentHeight = 0

  const toggle = () => {
    currentHeight = expanded ? 400 : 200;
    Animated.spring(height, { toValue: currentHeight, useNativeDriver: false }).start();
    setExpanded(!expanded);
    console.log(expanded)
  }

  const formatNumber = (num) => {
    if (num.length < 2) return `0${num}`
    else return num
  }

  return (
    <View style={[theme.container]}>
      <View style={theme.section}>
        <Text style={theme.title}>{`${formatNumber(hour)}:${formatNumber(minute)}`}</Text>
        <Switch style={theme.switch} />
      </View>
      <View style={theme.section}>
        <TouchableOpacity onPress={() => remove(id)} >
          <Image style={theme.image} source={require('../assets/remove-black.png')} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => toggle()} >
          <Image style={theme.image} source={require('../assets/remove-black.png')} />
        </TouchableOpacity>
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
