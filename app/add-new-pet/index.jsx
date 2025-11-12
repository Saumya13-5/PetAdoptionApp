import { useNavigation } from 'expo-router';
import { useEffect } from 'react';
import { Text, View } from 'react-native';

export default function AddNewPet() {
    const navigation=useNavigation();

    useEffect(()=>{
        navigation.setOptions({
            headerTitle:'Add New Pet'
        })
    },[])

  return (
    <View style={{
        padding:20
    }}>
      <Text style={{
        fontFamily:'outfit-medium',
        fontSize:20
      }}>Add New Pet for Adoption</Text>
    </View>
  )
}