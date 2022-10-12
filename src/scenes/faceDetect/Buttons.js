import React from "react";
import { View, StyleSheet, Text } from "react-native";
import Button from "./Button";
import TimerSelector from "./TimerSelector";

export default function Buttons(props) {
  const { onCameraRevers, takePicture, timer, setTimer } = props

  return (
    <View style={styles.container}>
      <View style={styles.itemContainer}>
        <Button
          icon='ios-camera-reverse-sharp'
          onPress={onCameraRevers}
        />
      </View>
      <View style={styles.itemContainer}>
        <Button
          icon='ellipse-outline'
          onPress={takePicture}
        />
      </View>
      <View style={styles.itemContainer}>
        <TimerSelector
          timer={timer}
          setTimer={setTimer}
        />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    flexDirection: 'row',
    paddingBottom: 20
  },
  itemContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})