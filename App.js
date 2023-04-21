import React from 'react'
import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
// import { Link } from 'expo-router'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import SignInScreen from './src/screens/SignInScreen/SignInScreen.js'
import SignUp from './src/screens/SignUpScreen/SignUp'
import ConfirmEmail from './src/screens/ConfirmEmailScreen/ConfirmEmail'
import ResetPassword from './src/screens/ResetPasswordScreen/ResetPassword'
import NewPassword from './src/screens/NewPasswordScreen/NewPassword'
import { NavigationContainer } from '@react-navigation/native'

const Stack = createNativeStackNavigator()

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="SignIn" component={SignInScreen} />
        <Stack.Screen name="SignUp" component={SignUp} />
        <Stack.Screen name="ResetPassword" component={ResetPassword} />
        <Stack.Screen name="NewPassword" component={NewPassword} />
        <Stack.Screen name="ConfirmEmail" component={ConfirmEmail} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: '#00000',
  },
})

export default App
