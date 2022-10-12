import React from "react";
import { View, StyleSheet } from "react-native";
import { colors } from "../../theme";

export default function FaceLandmark(props) {
  const { point } = props

  if(!point) return

  return (
    <View
      style={{
        position: 'absolute',
        borderColor: colors.yellow,
        borderWidth: 2,
        height: 1,
        width: 1,
        top: point.y,
        left: point.x
      }}
    />
  )
}