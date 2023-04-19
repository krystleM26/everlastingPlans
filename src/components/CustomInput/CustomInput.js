import React from 'react'
import { View, Text, TextInput, StyleSheet } from 'react-native'

const CustomInput = ({ value, setValue, placeholder, secureTextEntry }) => {
  return (
    <View style={styles.container}>
      <TextInput
        value={value}
        onChangeText={setValue}
        placeholder={placeholder}
        style={styles.input}
        secureTextEntry={secureTextEntry}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    width: '75%',
    borderColor: '#D4AF37',
    borderWidth: 3.5,
    borderRadius: 5,
    marginLeft: 50,
    paddingHorizontal: 5,
    marginVertical: 3,
    padding: 10,
  },

  input: {},
})

export default CustomInput
