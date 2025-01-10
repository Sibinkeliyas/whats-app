import { MaterialCommunityIcons } from "@expo/vector-icons";
import React from "react";
import { Platform, StyleProp } from "react-native";
import { IconSymbol as IconSymbolIos } from "@/components/ui/IconSymbol.ios";
import { SymbolViewProps } from "expo-symbols";

const Icon = ({
  iosIconName,
  androidIconName,
  iosColor = "#101010",
  androidColor = "#5f6368",
  style,
}: {
  iosIconName: SymbolViewProps["name"];
  androidIconName: React.ComponentProps<typeof MaterialCommunityIcons>["name"];
  iosColor?: string;
  androidColor?: string;
  style?: StyleProp<any>;
}) => {
  return Platform.OS === "ios" ? (
    <IconSymbolIos size={28} name={iosIconName} color={iosColor} style={style} />
  ) : (
    <MaterialCommunityIcons size={24} name={androidIconName} color={androidColor} style={style} />
  );
};

export default Icon;
