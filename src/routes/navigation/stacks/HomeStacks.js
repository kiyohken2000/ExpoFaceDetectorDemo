import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { navigationProps } from './navigationProps/navigationProps'

import Home from '../../../scenes/home'
import FaceDetect from '../../../scenes/faceDetect'

const Stack = createStackNavigator()

export const HomeStacks = () => {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={navigationProps}
    >
      <Stack.Screen
        name="Home"
        component={Home}
        options={({ navigation }) => ({
          title: 'Home',
          headerShown: true
        })}
      />
      <Stack.Screen
        name="FaceDetect"
        component={FaceDetect}
        options={({ navigation }) => ({
          title: '顔認識',
        })}
      />
    </Stack.Navigator>
  )
}