import { View, Text, Switch, Image, StyleSheet, Animated } from 'react-native'
import React from 'react'

const AlarmClock = (props) => {

  const { id, hour, minutes, active } = props.details;

  return (
    <View style={theme.container}>
      <View style={theme.section}>
        <Text style={[theme.hour, { marginRight: 40 }]}>{`${hour}:${minutes}`}</Text>
        <Switch style={[theme.switch, { marginLeft: 40 }]} />
      </View>
      <View style={theme.section}>
        <Image source={require('../assets/remove-black.png')} style={[theme.image, { marginRight: 80 }]} />
        <Image source={require('../assets/remove-black.png')} style={[theme.image, { marginLeft: 80 }]} />
      </View>
      <View style={theme.section}>

      </View>
    </View>
  )
}

export default AlarmClock

const theme = StyleSheet.create({
  container: { flex: 1, width: '100%', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', margin: 10 },
  section: { flex: 1, flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center', paddingVertical: 10, paddingHorizontal: 30 },
  hour: { fontSize: 32, textAlign: 'center', fontWeight: 'bold' },
  switch: {},
  image: {}
})
