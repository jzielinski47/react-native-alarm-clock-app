import { View, Text, Switch, StyleSheet, Animated } from 'react-native'
import React from 'react'

const AlarmClock = (props) => {

  const { id, hour, minutes, active } = props.details;

  return (
    <View>
      <Text>{`${hour}:${minutes}`}</Text>
    </View>
  )
}

export default AlarmClock

const theme = StyleSheet.create({
  container: { flex: 1, backgroundColor: 'white', justifyContent: 'center', alignItems: 'center' },
})
