import Ionicons from '@expo/vector-icons/Ionicons'
import { Image, StyleSheet, Text, View } from 'react-native'
import Colours from '../../constants/Colours'

export default function OwnerInfo({pet}) {
  return (
    <View style={styles.container}>
        <View style={{
            display:'flex',
            flexDirection:'row',
            gap:20
        }}>
      <Image source={{uri:pet?.userImage}}
      style={{
        width:50,
        height:50,
        borderRadius:99,
         
      }}
      />
      <View>
        <Text style={{
            fontFamily:'outfit-medium',
            fontSize:17,
        }}>{pet.username}</Text>
        <Text style={{
            fontFamily:'outfit',
            color:Colours.GRAY,
        }}>Pet Owner</Text>
      </View>
      </View>
      <Ionicons name="send-sharp" size={24} color={"black"}/>
        
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        paddingHorizontal:20,
        display:'flex',
        flexDirection:'row',
        alignItems:'center',
        gap:20,
        borderWidth:1,
        borderRadius:15,
        padding:10,
        marginHorizontal:20,
        backgroundColor:Colours.WHITE,
        justifyContent:'space-between',
         
    }
})