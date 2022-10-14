import React, { useState, useEffect, useCallback } from "react";
import { View, Text, StyleSheet } from "react-native";
import ScreenTemplate from "../../components/ScreenTemplate";
import { Camera, CameraType } from 'expo-camera';
import * as FaceDetector from 'expo-face-detector';
import { useFocusEffect, useNavigation } from "@react-navigation/native";
import FaceDataView from "./FaceDataView";
import Buttons from "./Buttons";
import { timerData } from "./timerData";

export default function FaceDetect() {
  const [hasPermission, setHasPermission] = useState(false)
  const [faceData, setFaceData] = useState('')
  const [isScanning, setIsScanning] = useState(false)
  const navigation = useNavigation()
  const [type, setType] = useState(Camera.Constants.Type.front)
  const [camera, setCamera] = useState(null)
  const [timer, setTimer] = useState(timerData[0])
  const [isShowCountDown, setIsShowCountDown] = useState(false)

  useFocusEffect(useCallback(() => {
    setIsScanning(true)
    return () => setIsScanning(false);
  }, []));

  useEffect(() => {
    navigation.addListener('beforeRemove', (e) => {
      setIsScanning(false)
      console.log('remove screen')
    })
  }, []);

  useEffect(() => {
    (async() => {
      const { status } = await Camera.requestCameraPermissionsAsync()
      setHasPermission(status === 'granted')
    })()
  }, [])

  if(!hasPermission) {
    return (
      <View style={styles.camera}>
        <Text>カメラの使用を許可してください</Text>
      </View>
    )
  }

  const handleFacesDetected = ({faces}) => {
    setFaceData(faces)
  }

  const onCameraRevers = () => {
    setType(
      type === Camera.Constants.Type.back
        ? Camera.Constants.Type.front
        : Camera.Constants.Type.back
    );
  }

  const sleep = (ms) => {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  const takePicture = async () => {
    if (camera) {
      if(timer.value >= 1) {
        setIsShowCountDown(true)
      }
      await sleep(timer.value*1000)
      const image = await camera.takePictureAsync();
      setIsShowCountDown(false)
      console.log(image)
    }
  };

  return (
    <ScreenTemplate screen='FaceDetect' statusBar='light-content'>
      {isScanning?
        <Camera
          type={type}
          style={styles.camera}
          onFacesDetected={handleFacesDetected}
          ref={(ref) => {
            setCamera(ref);
          }}
          faceDetectorSettings={{
            mode: FaceDetector.FaceDetectorMode.fast,
            detectLandmarks: FaceDetector.FaceDetectorLandmarks.all,
            runClassifications: FaceDetector.FaceDetectorClassifications.all,
            minDetectionInterval: 100,
            tracking: true
          }}
        >
          <FaceDataView faceData={faceData} />
          <Buttons
            onCameraRevers={onCameraRevers}
            takePicture={takePicture}
            setTimer={setTimer}
            timer={timer}
            isShowCountDown={isShowCountDown}
            setIsShowCountDown={setIsShowCountDown}
          />
        </Camera>
        :null
      }
    </ScreenTemplate>
  )
}

const styles = StyleSheet.create({
  camera: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
})