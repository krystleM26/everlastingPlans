import React, { useState } from 'react'
import {
  View,
  Text,
  Image,
  StyleSheet,
  useWindowDimensions,
} from 'react-native'
import Logo from '../../assets/EVLogo.png'
import CustomInput from '../components/CustomInput'
import CustomButton from '../components/CustomButton'

const SignInScreen = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const { height } = useWindowDimensions()

  const onSignInPressed = () => {
    console.warn('Sign in')
  }

  const onForgotPasswordPressed = () => {
    console.warn('Forgot Password')
  }
  const onSigninWithGooglePressed = () => {
    console.warn('Sign In With Google')
  }

  return (
    <View>
      <Image
        source={Logo}
        style={[styles.logo, { height: height * 0.3 }]}
        resizeMode="contain"
      />

      <CustomInput
        placeholder="Username"
        value={username}
        setValue={setUsername}
      />
      <CustomInput
        placeholder="Password"
        value={password}
        setValue={setPassword}
        secureTextEntry={true}
      />

      <CustomButton text="Sign In" onPress={onSignInPressed} />
      <CustomButton
        text="Forgot password"
        onPress={onForgotPasswordPressed}
        type="TERTIARY"
      />
      <CustomButton
        text="Sign In with Google"
        onPress={onSigninWithGooglePressed}
      />
      <CustomButton
        text="Sign In with Google"
        onPress={onSigninWithGooglePressed}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  root: {
    alignItems: 'center',
    padding: 500,
  },
  logo: {
    width: '100%',
    maxWidth: 500,
    maxHeight: 200,
  },
})

export default SignInScreen
