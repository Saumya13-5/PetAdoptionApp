import { useState } from 'react';
import { Pressable, Text, View } from 'react-native';
import Colours from '../../constants/Colours';

export default function About(pet) {
    const [readMore,setReadMore] = useState(true);
  return (
    <View style={{
        padding:20
    }}>
      <Text style={{
        fontFamily:'outfit-medium',
        fontSize:20
      }}>About {pet?.name}</Text>
      <Text numberOfLines={readMore?3:20} style={{
        fontFamily:'outfit',
        fontSize:14
      }}>{pet.about}</Text>

      {readMore&&<Pressable onPress={()=>setReadMore(false)}>
        <Text style={{
        fontFamily:'outfit-medium',
        fontSize:14,
        color:Colours.SECONDARY
      }}>Read More</Text></Pressable>}
    </View>
  )
}