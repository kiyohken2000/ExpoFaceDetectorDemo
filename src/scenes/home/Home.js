import React, { useContext, useEffect } from 'react'
import { StyleSheet, Text, View, StatusBar, SafeAreaView } from 'react-native'
import { colors, fontSize } from '../../theme'
import { useNavigation } from '@react-navigation/native'
import { UserContext } from '../../contexts/UserContext'
import ScreenTemplate from '../../components/ScreenTemplate'
import Button from '../../components/Button'

export default function Home() {
  const navigation = useNavigation()
  const { user } = useContext(UserContext)

  useEffect(() => {
    console.log('user:', user)
  }, [])
  
  return (
    <ScreenTemplate screen='Home' statusBar='light-content'>
      <View style={styles.root}>
        <Text style={styles.title}>Home</Text>
        <Button
          label="撮影画面へ"
          color={colors.lightPurple}
          onPress={() => {
            navigation.navigate('FaceDetect')
          }}
        />
        <View style={{paddingVertical: 10}} />
        <Button
          label="色認識画面へ"
          color={colors.lightPurple}
          onPress={() => {
            navigation.navigate('ColorPick')
          }}
        />
      </View>
    </ScreenTemplate>
  )
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: fontSize.xxxLarge,
    marginBottom: 20,
  },
  textContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 5
  }
})
