import React from 'react'
import { View, Text, Image, StyleSheet } from 'react-native'

const Cocktail = ({ strDrink = '', strDrinkThumb = '' }) => {
  return (
    <View style={s.container}>
      <Image style={s.logo} source={{ uri: strDrinkThumb }} />
      <Text style={s.text}>{strDrink}</Text>
    </View>
  )
}

const s = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 40,
  },
  logo: {
    width: 100,
    height: 100,
  },
  text: {
    fontSize: 16,
    color: '#7E7E7E',
    marginLeft: 20,
  },
})

export default Cocktail
