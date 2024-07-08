import { View, Text, TextInputComponent } from 'react-native'
import React from 'react'


import MyStack from './src/routes/routes'
import Customdrawer from './src/routes/Customdrawer'
import Header from './component/header'
import { TextInput } from 'react-native-gesture-handler'


const App = () => {
  return (
    <View style={{flex:1}}>
     <MyStack/>
    
     
  
    </View>
  )
}

export default App