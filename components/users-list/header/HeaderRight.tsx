import { View, Text, StyleSheet, Alert, TouchableOpacity } from "react-native";
import React from "react";
import { IconSymbol as IconSymbolIos } from "@/components/ui/IconSymbol.ios";
import { Link, router } from "expo-router";
import Icon from "@/components/ui/Icon";

const HeaderRight = () => {
  return (
    <View className="!flex-row justify-center items-center gap-2">
      <TouchableOpacity onPressIn={() => router.push("/(tabs)/Calls")} accessible>
        <Icon androidIconName="camera" iosIconName="camera.circle.fill"/>
      </TouchableOpacity>
      <TouchableOpacity
        onPressIn={() => router.push("/(tabs)/(users)/NewChat")}
        accessible
        hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}
      >
        <Icon androidIconName="plus-circle-outline" iosIconName="plus.circle.fill"/>
      </TouchableOpacity>
    </View>
  );
};

export default HeaderRight;
