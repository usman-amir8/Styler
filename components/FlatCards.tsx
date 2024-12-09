import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function FlatCards() {
  return (
    <View>
      <Text style = {styles.HeadingText}>Flat Card</Text>
      <View style = {styles.container}>

        <View style = {[styles.Card , styles.CardOne]}>
          <Text>Red</Text>
        </View>

<View style = {[styles.Card, styles.CardTwo]}> 
  <Text > Green</Text>
</View>

<View style = {[styles.Card , styles.CardThree]}>
  <Text >Blue</Text>
</View>


<View style = {[styles.Card, styles.CardOne]}>
  <Text>Red</Text>
</View>

      </View>
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
   flex : 1,
   flexDirection : 'row',
   padding : 8
},


Card : {
flex : 1,
justifyContent : 'center',
alignItems: 'center',
height : 100,
width : 100,
borderRadius : 4,
margin : 8
},

CardOne :{
   backgroundColor : '#EF5354'
},

CardTwo : {
  backgroundColor : '#50DBB4'
},
CardThree : {
  backgroundColor : '#5DA3FA'
}


})