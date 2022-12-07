import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StyleSheet, Text, View, StatusBar, useColorScheme } from 'react-native';

import Main from './screens/Main';
import List from './screens/List';

const Stack = createNativeStackNavigator();

const App = () => {

  const isDarkMode = useColorScheme() === 'dark'

  return (
    <NavigationContainer >
      <Stack.Navigator initialRouteName="main" screenOptions={{ navigationBarColor: theme.colors.white }}>
        <Stack.Screen name="main" component={Main} options={{ headerShown: false }} />
        <Stack.Screen name="list" component={List} options={{ title: 'DCIM Gallery', headerStyle: { backgroundColor: '#1f1f1f' }, headerTintColor: '#fff', }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const theme = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#121212' },
  colors: { black: '#000', white: 'white' }
});

export default App;