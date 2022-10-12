import React from "react";
import { View, StyleSheet } from "react-native";
import { colors } from "../../theme";

export default function FaceOutline(props) {
  const { origin, size } = props.bounds

  return(
    <View
      style={{
        position: 'absolute',
        borderColor: colors.yellow,
        borderWidth: 1,
        height: size.height,
        width: size.width,
        top: origin.y,
        left: origin.x
      }}
    />
  )
}