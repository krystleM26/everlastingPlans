import React from 'react'
import { View, Text, StyleSheet, Pressable } from 'react-native'

const CustomButton = ({
  onPress,
  text,
  type = 'PRIMARY',
  bgColor,
  fgColor,
}) => {
  return (
    <Pressable
      onPress={onPress}
      style={[
        styles.container,
        styles[`container_${type}`],
        bgColor ? { backgroundColor: bgColor } : {},
      ]}
    >
      <Text
        style={[
          styles.text,
          styles[`text_${type}`],
          fgColor ? { color: fgColor } : {},
        ]}
      >
        {text}
      </Text>
    </Pressable>
  )
}

const styles = StyleSheet.create({
  container: {
    width: '75%',
    padding: 10,
    marginVertical: 5,
    borderRadius: 5,
    marginLeft: 50,
    paddingHorizontal: 5,
    marginVertical: 10,
    alignItems: 'center',
  },
  container_PRIMARY: {
    backgroundColor: 'black',
  },

  container_TERTIARY: {
    borderRadius: 5,
  },

  text_PRIMARY: {
    fontWeight: 'bold',
    color: 'white',
  },
  text_TERTIARY: {
    color: 'grey',
  },
})

export default CustomButton
