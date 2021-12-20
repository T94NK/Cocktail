import { persistReducer } from 'redux-persist'
import storage from '@react-native-community/async-storage'
import rootReducer from './reducers'

const whitelist = ['session', 'onboarding']
const persistConfig = { key: 'cocktail', storage, whitelist, timeout: 0 }

export default asyncReducers => persistReducer(persistConfig, rootReducer(asyncReducers))
