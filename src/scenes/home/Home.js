import React, { useContext, useEffect } from 'react'
import { StyleSheet, Text, View, StatusBar, SafeAreaView } from 'react-native'
import Button from 'components/Button'
import { colors, fontSize } from 'theme'
import { useNavigation } from '@react-navigation/native'
import { UserContext } from '../../contexts/UserContext'
import ScreenTemplate from '../../components/ScreenTemplate'

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
          title="撮影画面へ"
          color="white"
          backgroundColor={colors.lightPurple}
          onPress={() => {
            navigation.navigate('FaceDetect')
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
