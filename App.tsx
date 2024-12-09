import {SafeAreaView, View,ScrollView, Text } from 'react-native'
import React from 'react'
import FlatCards from './components/FlatCards'
import ElevatedCards from './components/ElevatedCards'
import FancyCards from './components/FancyCards'


const App = () => {
  return (
    <SafeAreaView>
     <ScrollView>
     <View>
      <FlatCards/>
      <ElevatedCards/>
      <FancyCards />
      

    </View>
     </ScrollView>
    </SafeAreaView>
  )
}

export default App