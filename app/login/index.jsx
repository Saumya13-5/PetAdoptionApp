// app/login.jsx
import { Image, Text, View } from "react-native";
import Colors from './../../constants/Colours';

export default function LoginScreen() {
  return (
    <View
    style= {{
        backgroundColor:Colors.WHITE
    }}
    >
      <Image
        source={require("../assets/images/login.jpg")}
        style={{
          width: "100%",
          height: 500,
        }}
      />

      <View
        style={{
          padding: 20,
          display: "flex",
        }}
      >
        <Text
          style={{
            fontFamily: "outfit-bold",
            fontSize: 30,
          }}
        >
            Ready to make a new friend?
        </Text>
        <Text
            style={{
                fontFamily: "outfit",
                fontSize: 18,
                textAlign: "center",
                color: Colors.GRAY
            }}
            >
            Let's adopt the pet which you like and make their life happy too

        </Text>
        <Pressable
            style={{
                padding: 14,
                marginTop: 100,
                backgroundColor: Colors.PRIMARY,
                width: "100%",
                borderRadius: 14,
            }}
            >
            <Text
                style={{
                fontFamily: "outfit-medium",
                fontSize: 20,
                textAlign: "center",
                color: "white", // Assumed — not in screenshot
                }}
            >
                Get Started
            </Text>
        </Pressable>
      </View>
    </View>
  );
}