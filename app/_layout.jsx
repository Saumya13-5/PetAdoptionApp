// RootLayout.tsx (or .jsx) – Expo Router with custom fonts
import { ClerkProvider } from '@clerk/clerk-expo';
import { tokenCache } from '@clerk/clerk-expo/token-cache';
import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import * as SecureStore from 'expo-secure-store';

const tokenCache = {
  async getToken(key) {
    try {
      const item = await SecureStore.getItemAsync(key);
      if (item) {
        console.log(`${key} was used`);
      } else {
        console.log(`No value stored under key: '${key}'`);
      }
      return item;
    } catch (error) {
      console.error('SecureStore get item error: ', error);
      await SecureStore.deleteItemAsync(key);
      return null;
    }
  },

  async saveToken(key, value) {
    try {
      return SecureStore.setItemAsync(key, value);
    } catch (err) {
      return;
    }
  }
};

export default function RootLayout() {
    const publishableKey = process.env.EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY;

    useFonts({
        "outfit": require("../assets/fonts/Outfit-Regular.ttf"),
        "outfit-medium": require("../assets/fonts/Outfit-Medium.ttf"),
        "outfit-bold": require("../assets/fonts/Outfit-Bold.ttf"),
    });

    return (
        <ClerkProvider publishableKey= {publishableKey} tokenCache={tokenCache}>
        <Stack>
        <Stack.Screen name="index" />
        <Stack.Screen name="(tabs)" />
        <Stack.Screen name="login/index"
        options={{headerShown:false}}
        />
        
        </Stack>
        </ClerkProvider>
    );
}