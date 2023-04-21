import React, { useState } from 'react'
import { View, Text, StyleSheet, ScrollView } from 'react-native'
import CustomInput from '../../components/CustomInput'
import CustomButton from '../../components/CustomButton'
import { useNavigation } from '@react-navigation/native'

const NewPassword = () => {
  const [newPassword, setNewPassword] = useState('')
  const [code, setCode] = useState('')
  const navigation = useNavigation('')

  const onBackToSignInPressed = () => {
    console.warn('onSignIn')
    navigation.navigate('SignUp')
  }

  const onSubmitPressed = () => {
    console.warn('onResendCodePressed')
  }

  return (
    <ScrollView>
      <View>
        <Text style={styles.title}>Reset Your Password</Text>

        <Text>Password*</Text>
        <CustomInput
          placeholder="Enter New Password"
          value={newPassword}
          setValue={setNewPassword}
        />

        <CustomButton text="Submit" onPress={onSubmitPressed} />

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
    padding: 50,
    alignItems: 'center',
  },
  link: {
    color: '#FDB075',
  },
})

export default NewPassword
