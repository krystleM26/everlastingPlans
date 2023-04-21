import { View, Text } from 'react-native'
import React from 'react'
import CustomButton from '../CustomButton'

const SocialSignInBtn = () => {
  const onSigninWithGooglePressed = () => {
    console.warn('Sign In With Google')
  }
  const onSigninWithFaceBookPressed = () => {
    console.warn('Sign In With FaceBook')
  }
  const onSigninWithApplePressed = () => {
    console.warn('Sign In With Apple')
  }

  return (
    <>
      <CustomButton
        text="Sign In with Google"
        onPress={onSigninWithGooglePressed}
        bgColor="#FAE9EA"
        fgColor="#DD4D44"
      />
      <CustomButton
        text="Sign In with FaceBook"
        onPress={onSigninWithFaceBookPressed}
        bgColor="#E7EAF4"
        fgColor="#4765A9"
      />
      <CustomButton
        text="Sign In with Apple"
        onPress={onSigninWithApplePressed}
        bgColor="#e3e3e3"
        fgColor="#363636"
      />
    </>
  )
}

export default SocialSignInBtn
