import React from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import { Ionicons } from '@expo/vector-icons';
import { colors } from "../../theme";

export default function Button(props) {
  const { icon, onPress } = props

  return(
    <TouchableOpacity
      style={styles.container}
      onPress={onPress}
    >
      <Ionicons
        name={icon}
        color={colors.white}
        size={40}
      />
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container: {
    width: 60,
    height: 60,
    borderRadius: 60/2,
    borderColor: 'black',
    alignItems: 'center',
    justifyContent: 'center'
  }
})