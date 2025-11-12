import { collection, getDocs } from 'firebase/firestore';
import { useEffect } from 'react';
import { Dimensions, StyleSheet, View } from 'react-native';
import { FlatList } from 'react-native-web';
import { db } from './../../config/FirebaseConfig';
export default function Slider() {

    useEffect(()=>{
        GetSliders();

    },[])
    const GetSliders=async ()=>{
        const snapshot = await getDocs(collection(db, 'Sliders')); 
        setSliderList([]);
        snapshot.forEach((doc)=> {
            console.log(doc.data());
            setSliderList(sliderList=>[...sliderList,doc.data()]);  
            
        });
    }

  return (
    <View style={{
        marginTop:15
    }}>
      <FlatList
        data={sliderList}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        renderItem={({item,index})=>(
            <View>
                < Image source = {{uri:item?.imageUrl}}
                    style={styles.sliderImage}
                />

            </View>
        )}
      />
    </View>
  )
}

const styles = StyleSheet.create({
    sliderImage:{
        width:Dimensions.get('screen').width*0.9,
        height:160,
        borderRadius:15,
        marginRight:15
    }
})