import { Tabs } from "expo-router";
import React from "react";
import { Platform } from "react-native";

import { HapticTab } from "@/components/HapticTab";
import { IconSymbol } from "@/components/ui/IconSymbol";
import TabBarBackground from "@/components/ui/TabBarBackground";
import { Colors } from "@/constants/Colors";
import { useColorScheme } from "@/hooks/useColorScheme";
import HeaderRight from "@/components/users-list/header/HeaderRight";
import HeaderLeft from "@/components/users-list/header/HeaderLeft";

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      initialRouteName="(users)"
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? "light"].tint,
        headerShown: false,
        tabBarButton: HapticTab,
        tabBarBackground: TabBarBackground,
        tabBarStyle: {
          backgroundColor: "#f6f6f6",
        },
      }}
    >
      <Tabs.Screen
        name="Status"
        options={{
          title: "Updates",
          tabBarIcon: ({ color, focused }) => (
            <IconSymbol size={28} name={focused ? "repeat.circle.fill" : "repeat"} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="Calls"
        options={{
          title: "Calls",
          tabBarIcon: ({ color, focused }) => <IconSymbol size={28} name={focused ? "phone.fill" : "phone"} color={color} />,
        }}
      />
      <Tabs.Screen
        name="Communities"
        options={{
          title: "Communities",
          tabBarIcon: ({ color, focused }) => <IconSymbol size={28} name={focused ? "tag.fill" : "tag"} color={color} />,
        }}
      />
      <Tabs.Screen
        name="(users)"
        options={{
          title: "Chats",
          headerShown: false,
          headerTitleStyle: {
            display: "none",
          },

          tabBarIcon: ({ color, focused }) => <IconSymbol size={28} name={focused ? "message.fill" : "message"} color={color} />,
          headerLeftContainerStyle: {
            paddingLeft: 20,
          },
          headerRightContainerStyle: {
            paddingRight: 20,
          },
          headerStyle: {
            borderBottomWidth: 0,
          },
        }}
      />
      <Tabs.Screen
        name="Settings"
        options={{
          title: "Settings",
          tabBarIcon: ({ color, focused }) => <IconSymbol size={28} name={focused ? "seal.fill" : "seal"} color={color} />,
        }}
      />
    </Tabs>
  );
}
