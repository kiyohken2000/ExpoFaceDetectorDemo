import React from "react";
import { View, StyleSheet, Text } from "react-native";
import Button from "./Button";
import TimerSelector from "./TimerSelector";
import CountDown from 'react-native-countdown-component';
import { colors } from "../../theme";

export default function Buttons(props) {
  const { onCameraRevers, takePicture, timer, setTimer, isShowCountDown } = props

  return (
    <View style={styles.container}>
      <View style={styles.itemContainer}>
        <Button
          icon='ios-camera-reverse-sharp'
          onPress={onCameraRevers}
        />
      </View>
      <View style={styles.itemContainer}>
        {!isShowCountDown?
          <Button
            icon='ellipse-outline'
            onPress={takePicture}
          />
          :
          <CountDown
            until={timer.value}
            onFinish={() => console.log('timer end')}
            size={15}
            timeToShow={['S']}
            digitStyle={{backgroundColor: colors.white, borderWidth: 2, borderColor: colors.yellow}}
            digitTxtStyle={{color: colors.black}}
            separatorStyle={{color: colors.yellow}}
          />
        }
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