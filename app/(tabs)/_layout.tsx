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
import AuthGuard from "@/utils/routeGuard/AuthGuard";
import Icon from "@/components/ui/Icon";

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <AuthGuard>
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
            tabBarActiveTintColor: "#0a0a0a",
            tabBarIcon: ({ color, focused }) => (
              <Icon
                iosIconName={focused ? "repeat.circle.fill" : "repeat"}
                androidIconName={focused ? "repeat" : "repeat-variant"}
                iosColor={color}
                androidColor={focused ? "#0a0a0a" : color}
              />
            ),
          }}
        />
        <Tabs.Screen
          name="Calls"
          options={{
            title: "Calls",
            tabBarActiveTintColor: "#0a0a0a",
            tabBarIcon: ({ color, focused }) => (
              <Icon
                iosIconName={focused ? "phone.fill" : "phone"}
                androidIconName={focused ? "phone" : "phone-outline"}
                iosColor={color}
                androidColor={focused ? "#0a0a0a" : color}
              />
            ),
          }}
        />
        <Tabs.Screen
          name="Communities"
          options={{
            title: "Communities",
            tabBarActiveTintColor: "#0a0a0a",
            tabBarIcon: ({ color, focused }) => (
              <Icon
                iosIconName={focused ? "tag.fill" : "tag"}
                androidIconName={focused ? "tag" : "tag-outline"}
                iosColor={color}
                androidColor={focused ? "#0a0a0a" : color}
              />
            ),
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
            tabBarActiveTintColor: "#0a0a0a",
            tabBarIcon: ({ color, focused }) => (
              <Icon
                iosIconName={focused ? "message.fill" : "message"}
                androidIconName={focused ? "chat" : "chat-outline"}
                androidColor={focused ? "#0a0a0a" : color}
                iosColor={color}
              />
            ),
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
            tabBarActiveTintColor: "#0a0a0a",
            tabBarIcon: ({ color, focused }) => (
              <Icon
                iosIconName={focused ? "seal.fill" : "seal"}
                androidIconName={focused ? "wifi-settings" : "wifi-settings"}
                iosColor={color}
                androidColor={focused ? "#0a0a0a" : color}
              />
            ),
          }}
        />
      </Tabs>
    </AuthGuard>
  );
}
