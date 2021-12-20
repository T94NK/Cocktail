import 'react-native-gesture-handler'
import React from 'react'
import { StyleSheet, Image, TouchableOpacity } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/lib/integration/react'
import { createStackNavigator } from '@react-navigation/stack'

import createStore from './store/create-store'
import { Drinks, Filters } from './screens'
import filter from './images/filter.png'

const { store, persistor } = createStore()

const Stack = createStackNavigator()

const { Navigator, Screen } = Stack

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <NavigationContainer>
          <Navigator>
            <Screen
              name='Drinks'
              component={Drinks}
              options={({ navigation }) => ({
                headerLeft: null,
                headerRight: () => (
                  <TouchableOpacity onPress={() => navigation.push('Filters')} style={styles.button}>
                    <Image source={filter} />
                  </TouchableOpacity>
                ),
              })}
            />
            <Screen name="Filters" component={Filters} />
          </Navigator>
        </NavigationContainer>
      </PersistGate>
    </Provider>
  )
}

const styles = StyleSheet.create({
  button: {
    marginRight: 20,
  },
})

export default App
