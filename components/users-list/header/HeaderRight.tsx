import { View, Text, StyleSheet, Alert, TouchableOpacity } from "react-native";
import React from "react";
import { IconSymbol } from "@/components/ui/IconSymbol.ios";
import { Link, router } from "expo-router";

const HeaderRight = () => {
  return (
    <View className="!flex-row justify-center items-center gap-2" pointerEvents="box-none">
      <TouchableOpacity onPressIn={() => router.push("/(tabs)/Calls")} accessible>
        <IconSymbol size={28} name="camera.circle.fill" color="#101010" />
      </TouchableOpacity>
      <TouchableOpacity onPressIn={() => router.push("/(tabs)/(users)/NewChat")} accessible hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}>
        <IconSymbol size={28} name="plus.circle.fill" color="#1DAB61" />
      </TouchableOpacity>
    </View>
  );
};

export default HeaderRight;
