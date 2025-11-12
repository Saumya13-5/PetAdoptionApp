import { View } from 'react-native'
import Colours from '../../constants/Colours'
    
export default function PetListItem({pet}) {
  return (
    <View style={{
        padding:10,
        marginRight:15,
        backgroundColor:Colours.WHITE,
        borderRadius:10, 
    }}>
      < Image source={{uri:pet?.imageUrl}}
      style={{
        width:150,
        height:135,
        objectFit:'cover',
        borderRadius:10,
      }}
      />
      <Text style={{
        fontFamily:'outfit-medium',
        fontSize:18
      }}>{pet?.name}</Text>
      <View style={{
        display:'flex',
        flexDirection: 'row',
        justifyContent:'space-between',
        alignItems:'center'
      }}>
        <Text style={{
            color:Colours.GRAY,
            fontFamily:'outfit',
        }}>
            {pet?.breed}
        </Text>
        <Text style={{
            fontFamily:'outfit',
            color: Colours.PRIMARY,
            backgroundColor: Colours.LIGHT_PRIMARY,
            paddingHorizontal:7,
            borderRadius:10,
            fontSize:11
        }}>{pet?.age} Yrs</Text>
      </View>
    </View>
  )
}