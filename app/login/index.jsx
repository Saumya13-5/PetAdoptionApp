// app/login.jsx
import { useoAuth } from '@clerk/clerk-expo';
import * as Linking from 'expo-linking';
import * as WebBrowser from 'expo-web-browser';
import { Image, Pressable, Text, View } from "react-native";
import Colors from './../../constants/Colours';
export const useWarmUpBrowser = () => {
  React.useEffect(() => {
    // Warm up the android browser to improve UX
    // https://docs.expo.dev/guides/authentication/#improving-user-experience
    void WebBrowser.warmUpAsync();
    return () => {
      void WebBrowser.coolDownAsync();
    };
  }, []);
};

WebBrowser.maybeCompleteAuthSession()

export default function LoginScreen() {
  useWarmUpBrowser();
  const { startoAuthFlow } = useoAuth({strategy: 'oauth_google'})

  const onPress = useCallback(async () => {
  try {
    const { createdSessionId, signIn, signUp, setActive } = await startOAuthFlow({
      redirectUrl: Linking.createURL('/home', { scheme: 'myapp' }),
    });

    if (createdSessionId) {
      
    } else {
      // Use signIn or signUp for next steps such as MFA
    }
  } catch (err) {
    console.error('OAuth error', err);
  }
}, []);

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
        onPress={onPress}
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