import { View, Text, TouchableOpacity, Platform } from "react-native";
import React from "react";
import { router, Stack } from "expo-router";
import HeaderRight from "@/components/users-list/header/HeaderRight";
import HeaderLeft from "@/components/users-list/header/HeaderLeft";

const UsersLayout = () => {
  return (
    <Stack screenOptions={{ gestureEnabled: false }}>
      <Stack.Screen
        name="index"
        options={{
          gestureEnabled: false,
          headerShown: true,
          headerLargeTitle: Platform.OS === "ios", // iOS only
          headerTitle: "Chats",
          headerTitleAlign: Platform.OS === "ios" ? undefined : "center",
          headerSearchBarOptions: {
            placeholder: "Search",
            hideWhenScrolling: true,
          },
          headerTransparent: true,
          headerBlurEffect: Platform.OS === "ios" ? "regular" : undefined, // iOS only
          headerShadowVisible: false,
          headerStyle: { backgroundColor: "#fff" },
          headerRight: () => <HeaderRight />,
          headerLeft: () => <HeaderLeft />,
        }}
      />
      <Stack.Screen
        name="NewChat"
        options={{
          animation: Platform.OS == "ios" ? undefined : "fade_from_bottom",
          animationDuration: Platform.OS == "ios" ? undefined : 70,
          presentation: "modal",
          title: "New Chat",
          headerTitleAlign: "center",
          headerShadowVisible: false,
          headerStyle: { backgroundColor: "#f6f6f6" },
          headerSearchBarOptions: {
            hideWhenScrolling: true,
          },
        }}
      />
    </Stack>
  );
};

export default UsersLayout;
