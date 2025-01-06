import { View, Text } from "react-native";
import React from "react";
import { IconSymbol } from "@/components/ui/IconSymbol.ios";

const HeaderLeft = () => {
  return (
    <View>
      <View className="justify-center items-center bg-[#0A0A0A08] rounded-[100px] px-1 py-0" >
        <IconSymbol size={28} name="ellipsis" color="#0A0A0A" style={{ width: 18, height:20 }} />
      </View>
    </View>
  );
};

export default HeaderLeft;
