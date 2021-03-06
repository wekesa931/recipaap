import React, {useState} from 'react';
import { createStore, combineReducers } from 'redux'
import * as Font from 'expo-font'
import { AppLoading } from 'expo'
import {useScreens} from 'react-native-screens'
import { Provider } from 'react-redux'

import malsReducer from './store/reducers/meals'
import MealsNavigator from './Navigation/MealsNavigator'

useScreens();

const rootReducer = combineReducers({
  meals: malsReducer
})
const store = createStore(rootReducer)

const fetchFont = () => {
  return Font.loadAsync({
    'open-sans': require('./assets/fonts/OpenSans-Regular.ttf'),
    'open-sans-bold': require('./assets/fonts/OpenSans-Bold.ttf')
  })
}
export default function App() {
  const [fontLoaded, setFontLoaded] = useState(false)
  if(!fontLoaded){
    return (
      <AppLoading 
        startAsync={fetchFont}
        onFinish={()=> setFontLoaded(true)}
      />
    )
  }
  return (
    <Provider store={store}>
      <MealsNavigator />
    </Provider>
  );
}
