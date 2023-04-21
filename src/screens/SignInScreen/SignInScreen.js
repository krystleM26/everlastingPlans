import React, { useState } from 'react'
import {
  View,
  Text,
  Image,
  StyleSheet,
  useWindowDimensions,
  ScrollView,
} from 'react-native'
import { useNavigation, userNavigation } from '@react-navigation/native'
import Logo from '../../../assets/EVLogo.png'
import CustomInput from '../../components/CustomInput'
import CustomButton from '../../components/CustomButton'
import SocialSignInBtn from '../../components/CustomButton/SocialSignInBtn/SocialSignInBtn'

const SignInScreen = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const { height } = useWindowDimensions()
  const navigation = useNavigation()

  const onSignUpPressed = () => {
    console.warn('SignUp')
    navigation.navigate('SignUp')
  }
  const onForGotPassword = () => {
    navigation.navigate('ResetPassword')
  }

  return (
    <ScrollView>
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
        <CustomButton
          placeholder="Forgot Password"
          onPress={onForGotPassword}
          type="TERTIARY"
        />

        <SocialSignInBtn />
        <CustomButton
          text="Don't have an account? Create one"
          onPress={onSignUpPressed}
          type="TERTIARY"
        />
      </View>
    </ScrollView>
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
