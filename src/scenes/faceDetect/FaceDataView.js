import React from "react";
import { View, Text, StyleSheet, Dimensions } from "react-native";
import { colors } from "../../theme";
import FaceOutline from "./FaceOutline";
import FaceLandmark from "./FaceLandmark";
import Combine from "./Combine";

export default function FaceDataView(props) {
  const { faceData, stamp } = props

  if(faceData.length === 0) {
    return (
      <View style={styles.faces}>
        <Text style={styles.faceDesc}>顔を認識できません</Text>
      </View>
    )
  }

  return (
    <View style={styles.container}>
    {faceData.map((face, index) => {
      const {
        bottomMouthPosition,
        bounds,
        faceID,
        leftCheekPosition,
        leftEarPosition,
        leftEyeOpenProbability,
        leftEyePosition,
        leftMouthPosition,
        noseBasePosition,
        rightCheekPosition,
        rightEarPosition,
        rightEyeOpenProbability,
        rightEyePosition,
        rightMouthPosition,
        rollAngle,
        smilingProbability,
        yawAngle
      } = face
      const eyesShut = rightEyeOpenProbability < 0.4 && leftEyeOpenProbability < 0.4;
      const winking = !eyesShut ? (rightEyeOpenProbability < 0.4 || leftEyeOpenProbability < 0.4): false;
      const smiling = smilingProbability > 0.7;
      return (
        <View key={index}>
          <FaceOutline bounds={bounds} />
          <FaceLandmark point={leftCheekPosition} />
          <FaceLandmark point={leftEarPosition} />
          <FaceLandmark point={leftEyePosition} />
          <FaceLandmark point={leftMouthPosition} />
          <FaceLandmark point={noseBasePosition} />
          <FaceLandmark point={bottomMouthPosition} />
          <FaceLandmark point={rightCheekPosition} />
          <FaceLandmark point={rightEarPosition} />
          <FaceLandmark point={rightEyePosition} />
          <FaceLandmark point={rightMouthPosition} />
          <Combine bounds={bounds} stamp={stamp} />
        </View>
      );
    })}
    </View>
  )
}

const { height, width } = Dimensions.get('window')
const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    height: '100%'
  },
  faces: {
    flex: 1,
    backgroundColor: 'rgba(52, 52, 52, 0)',
    alignSelf: 'stretch',
    alignItems: 'center',
    justifyContent: 'center',
  },
  faceDesc: {
    fontSize: 20,
    color: colors.white
  }
})