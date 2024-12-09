import {Image , StyleSheet, Text, View , Linking ,TouchableOpacity,  } from 'react-native'
import React from 'react'

export default function FancyCards() {
  function openWebsite (websiteLink : string){
    Linking.openURL(websiteLink)
  }
  return (
    <View>
      <Text style = {styles.HeadingText}>Trending Places</Text>
<View style = {[styles.Card , styles.cardElevated]}>
  

  <Image 
   source={{
     uri : 'https://www.shutterstock.com/image-vector/business-candle-stick-graph-chart-260nw-2169971673.jpg'
   }}

   style = {styles.cardImage}
  />
  <View>
    <Text>Trending Place</Text>
    <Text>This photo was taken from google. All rights reserved</Text>
    <Text>Graphical representation of Population</Text>
    <TouchableOpacity onPress={()=> openWebsite ('https://en.wikipedia.org/wiki/List_of_places_in_Lahore')}>
 <Text>Read more</Text>
    </TouchableOpacity>
  </View>
 <View >
 <Image 
 source={{
  uri : 'https://www.expedia.com/stories/wp-content/uploads/2021/09/Arequipa.png'
 }}
 style = {styles.cardImage}
 />
 <View>
    <Text>Trending Place</Text>
    <Text>This photo was taken from google. All rights reserved</Text>
    <Text>Graphical representation of Population</Text>
    <TouchableOpacity onPress={()=> openWebsite ('https://en.wikipedia.org/wiki/List_of_places_in_Lahore')}>
 <Text style = {{color : 'blue'}}>Read more</Text>
    </TouchableOpacity>
  </View>
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
      Card : {
 
      },


      cardElevated : {

      },


      cardImage : {
        height : 180
      },

})