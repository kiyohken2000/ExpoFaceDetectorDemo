import React, { useState } from "react";
import { View, Text, StyleSheet, Platform } from "react-native";
import ImagePicker from 'react-native-image-crop-picker';
import Button from "../../components/Button";
import { colors, fontSize } from "../../theme";
import ImageColors from 'react-native-image-colors'

export default function ColorPick() {
  const [pickedColor, setPickedColor] = useState('')

  const captureSample = async() => {
    try {
      const image = await ImagePicker.openCamera({
        width: 500,
        height: 500,
        cropping: true,
        useFrontCamera: true,
        cropperChooseText: '選択',
        cropperCancelText: 'キャンセル'
      })
      const file = {
        uri: Platform.OS === 'ios' ? `file:///${image.path}` : image.path,
        type: image.mime,
        name: image.filename || image.path.split('/').pop(),
      }
      const response = await colorRecognize({file})
      setPickedColor(response)
    } catch(e) {
      console.log('error', e)
    }
  }

  const colorRecognize = async({file}) => {
    try {
      const result = await ImageColors.getColors(file.uri, {
        fallback: '#ffffff',
        cache: false,
        key: file.name,
      })
      switch (result.platform) {
        case 'android':
          const vibrantColor = result.vibrant
          return vibrantColor
        case 'ios':
          const primaryColor = result.primary
          return primaryColor
        default:
          throw new Error('Unexpected platform key')
      }
    } catch(e) {
      console.log('error', e)
    }
  }

  return (
    <View style={styles.constainer}>
      <View style={styles.recognizeArea}>
        <View style={[styles.recognizeColor, {backgroundColor: pickedColor?pickedColor:colors.white}]} />
        <View style={styles.labelContainer}>
          <Text style={styles.label}>{pickedColor?pickedColor:'認識した色コードが表示されます'}</Text>
        </View>
      </View>
      <View style={styles.buttonArea}>
        <Button
          label='サンプル撮影'
          color={colors.darkPurple}
          onPress={captureSample}
        />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  constainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  recognizeColor: {
    width: 200,
    height: 200,
    borderColor: colors.black,
    borderWidth: 1
  },
  recognizeArea: {
    flex: 4,
    justifyContent: 'center',
    alignItems: 'center'
  },
  buttonArea: {
    flex: 1,
    alignItems: 'center',
    width: '100%'
  },
  label: {
    fontSize: fontSize.large
  },
  labelContainer: {
    paddingVertical: 5
  }
})