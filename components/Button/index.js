import React from 'react'
import { Text, TouchableOpacity, StyleSheet } from 'react-native'

const Button = ({ text = '', onPress }) => {
  return (
    <TouchableOpacity style={s.button} onPress={onPress}>
      <Text style={s.text}>{text}</Text>
    </TouchableOpacity>
  )
}

const s = StyleSheet.create({
  button: {
    backgroundColor: '#272727',
    marginBottom: 50,
    padding: 17,
  },
  text: {
    color: 'white',
    textTransform: 'uppercase',
    textAlign: 'center',
    fontWeight: 'bold',
  },
})

export default Button
