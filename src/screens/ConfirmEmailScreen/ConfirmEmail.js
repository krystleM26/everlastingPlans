import React, { useState } from 'react'
import { View, Text, StyleSheet, ScrollView } from 'react-native'
import CustomInput from '../../components/CustomInput'
import CustomButton from '../../components/CustomButton'
import { useNavigation } from '@react-navigation/native'

const ConfirmEmail = () => {
  const [code, setCode] = useState('')
  const navigation = useNavigation('')

  const onConfirmPressed = () => {
    console.warn('Confirmed')
    navigation.navigate('NewPassword')
  }
  const onBackToSignInPressed = () => {
    navigation.navigate('SignIn')
  }

  const onResendCodePressed = () => {
    console.warn('onResendCodePressed')
  }

  return (
    <ScrollView>
      <View>
        <Text style={styles.title}>Reset Your Password</Text>

        <CustomInput
          placeholder="Enter your confirmation code"
          value={code}
          setValue={setCode}
        />

        <CustomButton text="Confirm" onPress={onConfirmPressed} />

        <CustomButton
          text="Resend Code"
          onPress={onResendCodePressed}
          type="SECONDARY"
        />
        <CustomButton
          text="Back to Sign in"
          onPress={onBackToSignInPressed}
          type="TERTIARY"
        />
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  root: {
    alignItems: 'center',
    padding: 20,
  },

  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#051C60',

    alignItems: 'center',
  },
  text: {
    color: 'grey',
    marginVertical: 10,
    padding: 30,
  },
  link: {
    color: '#FDB075',
  },
})

export default ConfirmEmail
