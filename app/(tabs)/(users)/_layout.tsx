import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { router, Stack } from "expo-router";
import HeaderRight from "@/components/users-list/header/HeaderRight";
import HeaderLeft from "@/components/users-list/header/HeaderLeft";

const UsersLayout = () => {
  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{
          headerShown: true,
          headerLargeTitle: true,
          headerTitle: "Chats",
          headerSearchBarOptions: {
            placeholder: "Search",
          },
          headerTransparent: true,
          headerBlurEffect: "regular",
          headerShadowVisible: false,
          headerStyle: { backgroundColor: "#fff" },
          headerRight: () => {
            return <HeaderRight />;
          },
          headerLeft: () => {
            return <HeaderLeft />;
          },
        }}
      />
      <Stack.Screen
        name="NewChat"
        options={{
          presentation: "modal",
          title: "New Chat",
          headerTitleAlign:'center',
          headerShadowVisible: false,
          headerStyle: { backgroundColor: "#f6f6f6" },
          headerSearchBarOptions: {}
        }}
      />
    </Stack>
  );
};

export default UsersLayout;
