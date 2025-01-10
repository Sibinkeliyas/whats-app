import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { IconSymbol } from "@/components/ui/IconSymbol.ios";
import Icon from "@/components/ui/Icon";

const tabs = ["All", "Unread", "Favourites", "Groups"];

const Header = () => {
  const [activeTab, setActiveTab] = React.useState("All");
  return (
    <View className="w-full mb-4">
      <View className="justify-start items-center mb-2 flex-row gap-1 w-full">
        {tabs.map((tab, key) => {
          return (
            <TouchableOpacity
              className={`px-[14px] py-[7px] max-w-fit rounded-[19px] ${activeTab === tab ? "bg-[#D0FECF]" : "bg-[#F4F4F4]"}`}
              key={key}
              onPress={() => setActiveTab(tab)}
            >
              <Text className={` font-semibold text-[14px] ${activeTab === tab ? "text-[#15603E]" : "text-[#767779]"}`}>
                {tab}
              </Text>
            </TouchableOpacity>
          );
        })}
      </View>
      <View className="justify-between items-center flex-row w-full ">
        <View className="w-[15%] justify-center items-center flex-row ">
          <Icon iosIconName="archivebox" androidIconName="archive-alert-outline" style={{ marginHorizontal: "auto" }} />
        </View>
        <View className="border-b border-[#00000033] w-[85%] pl-5 py-[12px]">
          <Text className="text-[#0A0A0A] font-semibold text-[16px]">Archived</Text>
        </View>
      </View>
    </View>
  );
};

export default Header;
