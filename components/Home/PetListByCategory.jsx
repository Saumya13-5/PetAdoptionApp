import { collection, getDocs, query, where } from 'firebase/firestore';
import { useEffect, useState } from 'react';
import { View } from 'react-native';
import { FlatList } from 'react-native-web';
import { db } from '../../config/FirebaseConfig';
import Category from './Category';
import PetListItem from './PetListItem';

export default function PetListByCategory() {

  const [petList,setPetList]=useState([]);
  const [loader, setLoader]=useState(false); 
  
  useEffect(()=>{
    getPetList('Dogs')
  },[])

  const getPetList=async (category)=>{
    setLoader(true);
    setPetList([]);
    const q=query(collection(db,'Pets'),where('category','==',category));
    const querySnapshot = await getDocs(q);

    querySnapshot.forEach(doc => {
       setPetList(petList=>[...petList,doc.data()])
    });
    setLoader(false);
  }
  return (
    <View>
      <Category category={(value)=>getPetList(value)}/>
        <FlatList
        style={{marginTop:10}}
        data={petList}
        horizontal={true}
        refreshing={loader}
        onRefresh={()=>getPetList('Dogs')}
         renderItem={({item,index})=>(
            <PetListItem
            pet={item}
            />
        )}
        />
    </View>
  )
}