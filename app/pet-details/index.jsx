import { useLocalSearchParams, useNavigation } from 'expo-router';
import { useEffect } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { ScrollView } from 'react-native-web';
import About from '../../components/PetDetails/About';
import OwnerInfo from '../../components/PetDetails/OwnerInfo';
import PetInfo from '../../components/PetDetails/PetInfo';
import PetSubInfo from '../../components/PetDetails/PetSubInfo';
import Colours from '../../constants/Colours';

export default function PetDetails() {
    const pet= useLocalSearchParams();
    const naigation= useNavigation();
    useEffect(()=>{
        NavigationActivation.setOptions({
            headerTransparent:true,
            headerTitle:'',
        })
    },[])
  return (
    <View>
        <ScrollView>
      {/* Pet info */}
      <PetInfo pet={pet}/>

      {/* Pet properties */}
      <PetSubInfo pet={pet}/>

      {/* about */}
      <About pet={pet}/>

      {/* owner details */}
        <OwnerInfo/>
        <View style={{
            height:70 
        }}></View>
      </ScrollView>
      {/* adopt me */}
      <View styel={styles.bottomContainer}>
      <TouchableOpacity stle={styles.adoptBtn}>
        <Text style={{
            textAlign:'center',
            fontFamily:'outfit-medium',
            fontSize:20
        }}>Adopt Me</Text>
      </TouchableOpacity>
      </View>
      
    </View>
  )
}

const styles = StyleSheet.create({
    adoptBtn:{
        padding:15,
        backgroundColor:Colours.PRIMARY ,
    },
    bottomContainer:{
         position:'absolute',
         width:'100%',
         bottom:0,
    }
})