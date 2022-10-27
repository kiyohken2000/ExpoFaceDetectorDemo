import React, { useState } from "react";
import { View, StyleSheet, Image } from "react-native";

export default function Combine(props) {
  const { bounds, stamp } = props
  const { origin, size } = bounds
  
  if(!stamp) {
    return (
      <View/>
    )
  }

  return (
    <View style={{
      position: 'absolute',
      height: size.height,
      width: size.width,
      top: origin.y,
      left: origin.x,
      alignItems: 'center',
      justifyContent: 'center'
    }}>
      <Image
        source={stamp}
        style={{ width: size.width, height: size.height }}
        resizeMode='contain'
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {

  }
})