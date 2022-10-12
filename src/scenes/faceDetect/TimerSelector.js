import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Menu, MenuItem, MenuDivider } from 'react-native-material-menu';
import { colors, fontSize } from "../../theme";
import { timerData } from "./timerData";
import FontIcon from 'react-native-vector-icons/FontAwesome5'

export default function TimerSelector(props) {
  const { timer, setTimer } = props
  const [visible, setVisible] = useState(false);

  const hideMenu = () => setVisible(false);
  const showMenu = () => setVisible(true);

  const anchorRender = () => {
    return (
      <TouchableOpacity
        style={styles.labelContainer}
        onPress={showMenu}
      >
        <View style={{flex: 7, alignItems: 'center'}}>
          <Text style={styles.label}>{timer.label}</Text>
        </View>
        <View style={{flex:1}}>
          <FontIcon
            name="angle-down"
            color={colors.black}
            size={20}
          />
        </View>
      </TouchableOpacity>
    )
  }

  const onButtonPress = ({item}) => {
    setTimer(item)
    setVisible(false)
  }

  return (
    <Menu
      visible={visible}
      anchor={anchorRender()}
      onRequestClose={hideMenu}
    >
      {timerData.map((item, i) => {
        return (
          <MenuItem key={i} onPress={() => onButtonPress({item})}>{item.label}</MenuItem>
        )
      })}
    </Menu>
  )
}

const styles = StyleSheet.create({
  label: {
    fontSize: fontSize.large
  },
  labelContainer: {
    backgroundColor: colors.white,
    flexDirection: 'row',
    borderRadius: 5,
    paddingVertical: 5,
    paddingHorizontal: 5,
    width: '100%'
  }
})