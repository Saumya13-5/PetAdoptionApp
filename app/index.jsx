// app/index.jsx
/* eslint-disable @typescript-eslint/no-unused-vars */
import { useUser } from "@clerk/clerk-expo";
import { Redirect } from "expo-router";
import { useEffect } from "react";
import { View } from "react-native";

export default function Index() {

  const {user}=useUser();
  const useRootNavigationState= useRootNavigationState()
  useEffect(()=>{
    CheckNavLoaded();
  },[])
  const CheckNavLoaded=()=>{
    if(!useRootNavigationState.key){
      return null
    }
  }

  return (
    <View
      style={{
        flex: 1,
      }}
    >
      {user?
        <Redirect href={'/tabs/home'}/>
        :<Redirect href={'/login'}/>
    }
    </View>
  );
}