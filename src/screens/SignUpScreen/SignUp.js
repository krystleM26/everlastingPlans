import React, { useState } from 'react'
import { View, Text, StyleSheet, ScrollView } from 'react-native'
import CustomInput from '../../components/CustomInput'
import CustomButton from '../../components/CustomButton'
import SocialSignInBtn from '../../components/CustomButton/SocialSignInBtn/SocialSignInBtn.js'
import { useNavigation } from '@react-navigation/native'

const SignUp = () => {
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [passwordRepeat, setPasswordRepeat] = useState('')
  const navigation = useNavigation()

  const onRegisterPressed = () => {
    console.warn('Sign Up')
  }
  const onSignInPressed = () => {
    navigation.navigate('SignIn')
  }

  const onTermsOfUsePressed = () => {
    console.warn('onTermsOfUSePressed')
  }
  const onPrivacyPolicyPressed = () => {
    console.warn('onPrivacyPolicyPressed')
  }

  return (
    <ScrollView>
      <View>
        <Text style={styles.title}>Create an account</Text>

        <CustomInput
          placeholder="Username"
          value={username}
          setValue={setUsername}
        />
        <CustomInput placeholder="Email" value={email} setValue={setEmail} />
        <CustomInput
          placeholder="Password"
          value={password}
          setValue={setPassword}
          secureTextEntry
        />
        <CustomInput
          placeholder="Repeat Password"
          value={passwordRepeat}
          setValue={setPasswordRepeat}
          secureTextEntry
        />

        <CustomButton text="Register" onPress={onRegisterPressed} />
        <Text style={styles.text}>
          By registering you confirm you accept our{' '}
          <Text style={styles.link} onPress={onTermsOfUsePressed}>
            Terms of Use{' '}
          </Text>
          and{' '}
          <Text style={styles.link} onPress={onPrivacyPolicyPressed}>
            Privacy Policy
          </Text>
        </Text>

        <SocialSignInBtn />
        <CustomButton
          text="Have an account? Sign in"
          onPress={onSignInPressed}
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
    margin: 10,
    padding: 10,
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

export default SignUp
