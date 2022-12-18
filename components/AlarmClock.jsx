import { View, Text, Switch, Image, StyleSheet, Animated, TouchableNativeFeedback, TouchableOpacity, Dimensions } from 'react-native'
import { React, useState, useEffect, useRef } from 'react'
import { formatNumber } from '../api/Utils';
import DaySelector from './DaySelector';

const AlarmClock = ({ id, hour, minute, active, remove }) => {

  const [isActive, setIsActive] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);

  const screenHeight = Dimensions.get("window").height;
  const expansionHeight = useRef(new Animated.Value(screenHeight / 8)).current;

  const [days, setDays] = useState([{ id: 0, name: 'Monday' }, { id: 1, name: 'Tuesday' }, { id: 2, name: 'Wednesday' }, { id: 3, name: 'Thursday' }, { id: 4, name: 'Friday' }, { id: 5, name: 'Saturday' }, { id: 6, name: 'Sunday' }]);
  const [selectedDays, setSelectedDays] = useState([]);

  const selectDaySelector = (id, name) => {
    setSelectedDays(prevState => [...prevState, { id: id, name: name }])
  }

  const removeDaySelector = (id, name) => {
    setSelectedDays(selectedDays.filter(day => day.id !== id))
  }

  useEffect(() => console.log(selectedDays), [selectedDays])

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
      <View style={theme.section}>
        {isExpanded ? days.map(day => <DaySelector id={day.id} name={day.name.substring(0, 3)} selectedArr={selectedDays} selectDaySelector={selectDaySelector} removeDaySelector={removeDaySelector} />) : null}
      </View>
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
