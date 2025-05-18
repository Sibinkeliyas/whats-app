import React from "react";
import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { StatusBar } from "expo-status-bar";
import { useEffect } from "react";
import "react-native-reanimated";
import "../global.css";

import { Provider } from "react-redux";
import { store } from "@/store";
import JwtContext from "@/context/JwtContext";
import { Platform } from "react-native";

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [loaded] = useFonts({
    SpaceMono: require("../assets/fonts/SpaceMono-Regular.ttf"),
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
    <Provider store={store}>
      <JwtContext>
        <>
          <Stack>
            <Stack.Screen name="index" options={{ headerShown: false }} />
            <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
            {/* camera */}
            <Stack.Screen
              name="Camera"
              options={{
                headerShown: false,
              }}
            />
            <Stack.Screen name="users" options={{ headerShown: false }} />
            <Stack.Screen
              name="Album"
              options={{
                animation: Platform.OS == "ios" ? undefined : "fade_from_bottom",
                animationDuration: Platform.OS == "ios" ? undefined : 70,
                presentation: "modal",
                title: "Albums",
                headerTitleAlign: "center",
                headerShadowVisible: false,
                headerStyle: { backgroundColor: "#f6f6f6" },
              }}
            />
            <Stack.Screen name="+not-found" />
          </Stack>
          <StatusBar style="auto" />
        </>
      </JwtContext>
    </Provider>
  );
}
