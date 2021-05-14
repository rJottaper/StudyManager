import React from 'react';
import { SafeAreaView, View, Text, StyleSheet,  } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Welcome from './src/pages/Welcome';
import LoginScreen from './src/pages/LoginScreen';
import HomeScreen from './src/pages/Home';



const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator headerMode="none" >
        <Stack.Screen 
          name="Welcome" 
          component={Welcome}    
        />
        <Stack.Screen name="LoginScreen" component={LoginScreen} />
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
})

export default App;
