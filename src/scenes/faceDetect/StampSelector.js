import React from "react";
import { View, ScrollView, Image, StyleSheet, Dimensions, TouchableOpacity, Text } from "react-native";
import { stamps } from "./stampData";
import { colors, fontSize } from "../../theme";

export default function StampSelector(props) {
  const { onStampPress } = props

  return (
    <View style={styles.container}>
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        {stamps.map((item, i) => {
          return (
            <TouchableOpacity
              key={item.id}
              style={styles.imageContainer}
              onPress={() => onStampPress({item})}
            >
              {!item.source?
                <Text style={styles.noneLabel}>なし</Text>:
                <Image
                  source={item.source}
                  style={{ width: 66, height: 58 }}
                  resizeMode='contain'
                />
              }
            </TouchableOpacity>
          )
        })}
      </ScrollView>
    </View>
  )
}

const { height, width } = Dimensions.get('window')
const styles = StyleSheet.create({
  container: {
    height: height * 0.09,
  },
  imageContainer: {
    paddingHorizontal: 10,
    justifyContent: 'center',
    alignItems: 'center'
  },
  noneLabel: {
    color: colors.white,
    fontSize: fontSize.large
  }
})