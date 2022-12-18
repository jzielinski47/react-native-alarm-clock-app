import { View, Text, Switch, Image, StyleSheet, Animated, TouchableNativeFeedback, TouchableOpacity, Dimensions } from 'react-native'
import { React, useState, useEffect, useRef } from 'react'
import { formatNumber } from '../api/Utils';
import DaySelector from './DaySelector';

const AlarmClock = ({ id, hour, minute, active, remove }) => {

  const [isActive, setIsActive] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);

  const screenHeight = Dimensions.get("window").height;
  const expansionHeight = useRef(new Animated.Value(screenHeight / 8)).current;

  const days = [
    { id: 0, name: 'Monday', selected: false },
    { id: 1, name: 'Tuesday', selected: false },
    { id: 2, name: 'Wednesday', selected: false },
    { id: 3, name: 'Thursday', selected: false },
    { id: 4, name: 'Friday', selected: false },
    { id: 5, name: 'Saturday', selected: false },
    { id: 6, name: 'Sunday', selected: false },
  ]

  const toggle = () => !isExpanded ? expand() : roll();

  const expand = () => {
    Animated.timing(expansionHeight, {
      toValue: screenHeight / 6,
      duration: 800,
      useNativeDriver: false,
    }).start();
    setTimeout(() => setIsExpanded(!isExpanded), 400)
  }

  const roll = () => {
    setIsExpanded(!isExpanded);
    Animated.timing(expansionHeight, {
      toValue: screenHeight / 8,
      duration: 800,
      useNativeDriver: false,
    }).start();
    setTimeout(() => setIsExpanded(!isExpanded), 400)
  }

  const toggleSwitch = () => setIsActive(!isActive)

  return (
    <Animated.View style={[theme.container, { height: expansionHeight }]}>
      <View style={theme.section}>
        <Text style={theme.title}>{`${formatNumber(hour)}:${formatNumber(minute)}`}</Text>
        <Switch style={theme.switch} trackColor={{ false: "#7d7d7d", true: "#7c7c7c" }} thumbColor={isActive ? "#303030" : "#f4f3f4"} onValueChange={toggleSwitch} value={isActive} />
      </View>
      <View style={theme.section}>
        <TouchableOpacity onPress={() => remove(id)} >
          <Image style={theme.image} source={require('../assets/remove-black.png')} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => toggle()} >
          <Image style={theme.image} source={isExpanded ? require('../assets/expand-button-up.png') : require('../assets/expand-button-down.png')} />
        </TouchableOpacity>
      </View>
      {isExpanded ? <Text style={{ marginVertical: 10 }}>{days.map(day => <DaySelector id={day.id} name={day.name.substring(0, 3)} selected={day.selected} />)}</Text> : null}
    </Animated.View>
  )
}

export default AlarmClock

const theme = StyleSheet.create({
  container: { flex: 1, flexDirection: 'column', marginHorizontal: 10, marginTop: 5, paddingBottom: 10, padding: 5, borderBottomColor: '#e8e8e8', borderBottomWidth: 2 },
  section: { flexDirection: "row", justifyContent: "space-between", alignItems: "center", marginVertical: 2 },
  title: { fontSize: 32, textAlign: 'center' },
  image: { width: 20, height: 20 }
})
