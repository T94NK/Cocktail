import React, { useState } from 'react'
import { Text, TouchableOpacity, ScrollView, StyleSheet, Image } from 'react-native'
import  { useSelector, useDispatch } from 'react-redux'
import { setActiveFilter } from '../../modules/actions'
import { Button } from '../../components'
import check from '../../images/check.png'

const Filters = ({ navigation }) => {
  const { filters, activeFilters } = useSelector(state => state.session)
  const [activeCategories, setActiveCategories] = useState(activeFilters)
  const dispatch = useDispatch()

  const apply = () => {
    dispatch(setActiveFilter(activeCategories))
    navigation.push('Drinks')
  }

  const setCategory = item => {
    let newFIlters = [...activeCategories]

    if (newFIlters.find(i => i === item)) {
      newFIlters = newFIlters.filter(i => i !== item)
    } else {
      newFIlters.push(item)
    }

    setActiveCategories(newFIlters)
  }

  return (
    <ScrollView style={s.container}>
      {filters.map(i => (
        <TouchableOpacity onPress={() => setCategory(i)} style={s.button} key={i}>
          <Text style={s.text}>{i}</Text>
          {activeCategories.includes(i) && <Image source={check} />}
        </TouchableOpacity>
      ))}
      <Button text='apply' onPress={apply} />
    </ScrollView>
  )
}

const s = StyleSheet.create({
  container: {
    padding: 20,
  },
  button: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 50,
  },
  text: {
    fontSize: 16,
    color: '#7E7E7E',
  },
})

export default Filters
