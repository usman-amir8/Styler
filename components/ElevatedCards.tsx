import { ScrollView,StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function ElevatedCards() {
  return (
    <View>
      <Text style = {styles.HeadingText}>Elevated Cards</Text>
      <ScrollView horizontal = {true} style = {styles.container}>
        <View style = {[styles.card, styles.cardElevated]}>
          <Text>Tap</Text>
        </View>

        <View style = {[styles.card, styles.cardElevated]}>
          <Text>me</Text>
        </View>

        <View style = {[styles.card, styles.cardElevated]}>
          <Text>to</Text>
        </View>


        <View style = {[styles.card, styles.cardElevated]}>
          <Text>scroll</Text>
        </View>


        <View style = {[styles.card, styles.cardElevated]}>
          <Text>Tap</Text>
        </View>
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({

HeadingText : {
    fontSize : 24,
    fontWeight : 'bold',
    paddingHorizontal : 8

},


container: {

},


card : {
 flex: 1,
 alignItems : 'center',
 justifyContent : 'center',
 width : 100,
 height : 100,
 borderStyle : 'dotted',
 borderWidth : 0.5,
 borderRadius : 4,
 margin : 8
},


cardElevated : {
 backgroundColor : '#CAD5E2',
 elevation : 4
}

})