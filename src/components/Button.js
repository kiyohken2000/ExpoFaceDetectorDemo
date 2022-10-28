import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";
import { colors, fontSize } from '../theme'

export default function Button(props) {
  const { label, onPress, color } = props

  return (
    <TouchableOpacity
      onPress={onPress}
      style={[styles.container, {backgroundColor: color}]}
    >
      <Text style={styles.label}>{label}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container: {
    width: '50%',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 10,
    borderRadius: 5
  },
  label: {
    fontSize: fontSize.large,
    color: colors.white
  }
})