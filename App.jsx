import React, { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StyleSheet, Text, View, StatusBar, useColorScheme, LogBox } from 'react-native';

import Main from './screens/Main';
import List from './screens/List';
import AlarmCreator from './screens/AlarmCreator';

import { Database } from "./api/Database";

const Stack = createNativeStackNavigator();
LogBox.ignoreAllLogs();

const App = () => {

  useEffect(() => { Database.createTable(); console.log('created database') }, [])

  const isDarkMode = useColorScheme() === 'dark'

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="main" screenOptions={{ navigationBarColor: themes.colors.white, textAlign: 'center' }}>
        <Stack.Screen name="main" component={Main} options={{ headerShown: false }} />
        <Stack.Screen name="list" component={List} options={{ title: 'Alarm clock list', headerStyle: { backgroundColor: '#1f1f1f' }, headerTintColor: '#fff', }} />
        <Stack.Screen name="creator" component={AlarmCreator} options={{ title: 'Add new alarm', headerStyle: { backgroundColor: '#1f1f1f' }, headerTintColor: '#fff', }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const themes = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#121212' },
  colors: { black: '#000', white: 'white' }
});

export default App;