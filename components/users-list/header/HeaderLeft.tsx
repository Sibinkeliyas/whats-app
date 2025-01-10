import { View, Text } from "react-native";
import React from "react";
import { IconSymbol } from "@/components/ui/IconSymbol.ios";
import Icon from "@/components/ui/Icon";

const HeaderLeft = () => {
  return (
    <View>
      <View className="justify-center items-center bg-[#0A0A0A08] rounded-[100px] px-1 py-0" >
        <Icon androidIconName="menu" iosIconName="ellipsis"/>
      </View>
    </View>
  );
};

export default HeaderLeft;
