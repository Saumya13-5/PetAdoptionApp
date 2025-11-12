import { Image, Text, View } from 'react-native'
import Colours from '../../constants/Colours'

export default function PetSubInfoCard({icon,title,value}) {
  return (
    <View style={{
                    display:'flex',
                    flexDirection:'row',
                    alignItems: 'center',
                    padding:10,
                    backgroundColor:Colours.WHITE,
                    margin:5,
                    borderRadius:8,
                    gap:10,
                    flex:1
                }}>
                    <Image source={icon}
                    style={{
                        width:40,
                        height:40,
                    }}
                    />
                    <View style={{
                        flex:1
                    }}>
                    <Text style={{
                        fontFamily: 'outfit',
                        fontSize:16,
                        color:Colours.GRAY,
                    }}>{title}</Text>
                    <Text style={{
                        fontFamily:'outfit-medium',
                        fontSize:20,
                    }}>{value}</Text> 
                </View>
                </View>
  )
}