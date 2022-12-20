import { View, Text, Switch, Image, StyleSheet, Animated, TouchableNativeFeedback, TouchableOpacity, Dimensions, Vibration } from 'react-native'
import { React, useState, useEffect, useRef } from 'react'
import { formatNumber } from '../../api/Utils';
import DaySelector from './DaySelector';
import { colors } from '../../api/ColorPallete';
import { Audio } from 'expo-av';

const AlarmClock = ({ id, hour, minute, active, remove }) => {

  const [isVibration, setIsVibration] = useState(false);
  const [isMusic, setIsMusic] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);

  const screenHeight = Dimensions.get("window").height;
  const expansionHeight = useRef(new Animated.Value(screenHeight / 8)).current;

  const [days, setDays] = useState([{ id: 0, name: 'Monday' }, { id: 1, name: 'Tuesday' }, { id: 2, name: 'Wednesday' }, { id: 3, name: 'Thursday' }, { id: 4, name: 'Friday' }, { id: 5, name: 'Saturday' }, { id: 6, name: 'Sunday' }]);
  const [selectedDays, setSelectedDays] = useState([]);

  const [currentHour, setCurrentHour] = useState(new Date().getHours())
  const [currentMinute, setCurrentMinute] = useState(new Date().getMinutes())

  const [sound, setSound] = useState()
  let audioPlaying = false

  const selectDaySelector = (id, name) => {
    setSelectedDays(prevState => [...prevState, { id: id, name: name }])
  }

  const removeDaySelector = (id, name) => {
    setSelectedDays(selectedDays.filter(day => day.id !== id))
  }

  useEffect(() => console.log(selectedDays), [selectedDays])

  let listen
  let intervalWorking = false

  useEffect(() => {
    setInterval(() => {
      const date = new Date();
      setCurrentHour(date.getHours())
      setCurrentMinute(date.getMinutes())
    }, 1000)
  }, [])

  useEffect(() => { Vibration.cancel(); stopSound(); }, [currentMinute])

  useEffect(() => {
    clearInterval(listen)
    if (!intervalWorking) {
      listen = setInterval(() => {
        intervalWorking = true
        const date = new Date();
        setCurrentHour(date.getHours())
        setCurrentMinute(date.getMinutes())

        if (currentHour == hour && currentMinute == minute) {
          intervalWorking = false
          clearInterval(listen)

          if (isVibration) {
            const pattern = [0.5 * 1000, 1 * 1000, 0.5 * 1000]
            Vibration.vibrate(pattern, true)
          }

          if (isMusic && !audioPlaying) {
            playSound()
          }

        }

      }, 200)
    }

  }, [isMusic, isVibration]);

  // useEffect(() => !isActive && ring ? clearInterval(ring) : null, [isActive])

  const toggle = () => !isExpanded ? expand() : roll();

  const expand = () => {
    Animated.timing(expansionHeight, {
      toValue: screenHeight / 5.5,
      duration: 800,
      useNativeDriver: false,
    }).start();
    setTimeout(() => setIsExpanded(!isExpanded), 500)
  }

  const roll = () => {
    setIsExpanded(!isExpanded);
    Animated.timing(expansionHeight, {
      toValue: screenHeight / 8,
      duration: 800,
      useNativeDriver: false,
    }).start();
    setTimeout(() => setIsExpanded(!isExpanded), 500)
  }

  const playSound = async () => {
    if (!audioPlaying) {
      audioPlaying = true
      console.log('Loading Sound');
      const { sound } = await Audio.Sound.createAsync(require('../assets/wolf.mp3'));
      setSound(sound);

      console.log('Playing Sound');
      await sound.playAsync();
    }
  }

  const stopSound = async () => { await sound.pauseAsync(); setSound(undefined); }

  const toggleVibration = () => { Vibration.cancel(); stopSound(); setIsVibration(!isVibration) }
  const toggleMusic = () => { Vibration.cancel(); stopSound(); setIsMusic(!isMusic) }

  return (
    <Animated.View style={[theme.container, { height: expansionHeight, backgroundColor: colors.panelw }]}>
      <View style={theme.section}>
        <Text style={theme.title}>{`${formatNumber(hour)}:${formatNumber(minute)}`}</Text>
        <Switch style={theme.switch} trackColor={{ false: colors.black60, true: colors.black60 }} thumbColor={isMusic ? "#303030" : "#f4f3f4"} onValueChange={toggleMusic} value={isMusic} />
        <Switch style={theme.switch} trackColor={{ false: colors.black60, true: colors.black60 }} thumbColor={isVibration ? "#303030" : "#f4f3f4"} onValueChange={toggleVibration} value={isVibration} />
      </View>
      <View style={theme.section}>
        <TouchableOpacity onPress={() => remove(id)} >
          <Image style={theme.image} source={require('../assets/remove-black.png')} />
        </TouchableOpacity>
        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
          {isMusic ? <Image style={{ width: 16, height: 16, marginHorizontal: 5 }} source={{ uri: 'https://static.vecteezy.com/system/resources/previews/001/200/758/original/music-note-png.png' }} /> : null}
          {isVibration ? <Image style={{ width: 20, height: 20, marginHorizontal: 5 }} source={{ uri: 'https://cdn-icons-png.flaticon.com/512/733/733474.png' }} /> : null}
        </View>
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
  container: { flex: 1, flexDirection: 'column', paddingHorizontal: 20, marginBottom: 5, paddingBottom: 10, padding: 5, borderBottomColor: '#e8e8e8', borderBottomWidth: 2, borderRadius: 10 },
  section: { flexDirection: "row", justifyContent: "space-between", alignItems: "center", marginVertical: 2 },
  title: { fontSize: 32, textAlign: 'center' },
  image: { width: 20, height: 20 }
})
