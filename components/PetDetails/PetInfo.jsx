import { Image, Text, View } from 'react-native'
import Colours from '../../constants/Colours'
import MarkFav from '../MarkFav'

export default function PetInfo(pet) {
  return (
    <View>
      <Image source= {{uri:pet.imageUrl}}
      style={{
        wigth:'100%',
        height:400,
        objectFit:'cover',
      }}
      />
      <View style={{
        padding:20,
        display:'flex',
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
      }}>
            <View>
                <Text style={{
                    fontFamily:'outfit-bold',
                    fontSize:27,

                }}>{pet?.name}</Text>
                <Text style={{
                    fontFamily:'outfit',
                    fontSize:16,
                    color:Colours.GRAY,
                }}>{pet?.address}</Text>
            </View>
            <MarkFav pet={pet}/>
      </View>
    </View>
  )
}