import MaterialIcons from '@expo/vector-icons/MaterialIcons'
import { TouchableOpacity, View } from 'react-native'
import Header from '../../components/Home/Header'
import PetListByCategory from '../../components/Home/PetListByCategory'
import Colours from '../../constants/Colours'

export default function Home() {
  return (
    <View style={{
      padding:20,marginTop:20,
    }}>
      {/* Header */}
      <Header/>

      {/* Sliders */}
      <Slider/>

      {/* Category */}
      <PetListByCategory/>  

      {/* Add new pet */}
      <TouchableOpacity style={styles.addNewPetContainer}>
        <MaterialIcons name="pets" size={24} color={Colours.PRIMARY}/>
        <Text style={{
          fontFamily:'outfit-medium',
          color:Colours.PRIMARY,
          fontSize:18,
        }}>Add new Pet</Text>
      </TouchableOpacity>
      
    </View>
  )
}

const styles = StyleSheet.create({
  addNewPetContainer:{
        display:'flex',
        flexDirection:'row',
        gap:10,
        alignItems:'center',
        padding:20,
        marginTop:20,
        backgroundColor:Colours.LIGHT_PRIMARY,
        borderColor:Colours.PRIMARY,
        borderRadius:15,
        borderStyle:'dashed',
        justifyContent:'center',
      }
})