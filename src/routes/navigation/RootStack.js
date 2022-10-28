import React, { useState, useContext } from "react";
import { createStackNavigator } from '@react-navigation/stack'
import TabNavigator from "./tabs/Tabs";
import { HomeTitleContext } from "../../contexts/HomeTitleContext";
import { TransitionPresets } from "@react-navigation/stack";

const Stack = createStackNavigator()

export default function RootStack() {
  const [title, setTitle] = useState('default title')

  return (
    <HomeTitleContext.Provider
      value={{
        title,
        setTitle,
      }}
    >
      <HomeTitleContext.Consumer>
        {(ctx) => (
          <Stack.Navigator
            screenOptions={{
              headerShown: false
            }}
          >
            <Stack.Screen
              name='HomeRoot'
              component={TabNavigator}
            />
          </Stack.Navigator>
      )}
      </HomeTitleContext.Consumer>
    </HomeTitleContext.Provider>
  )
}