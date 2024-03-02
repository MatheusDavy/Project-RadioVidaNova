import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from './src/screens/home/Home.screen';
import PlayerScreen from './src/screens/player/Player.screen';
import TrackPlayer from 'react-native-track-player';

const Stack = createNativeStackNavigator();

TrackPlayer.registerPlaybackService(() => require('./service'));

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{animation: 'slide_from_bottom'}}
        />
        <Stack.Screen
          name="Player"
          component={PlayerScreen}
          options={{animation: 'slide_from_right'}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
