import { ScrollView } from "react-native";
import React from "react";
import NewChatComponent from "@/components/new-chat/index";
import AlbumList from "@/components/Albums";

const Album = () => {
  return (
    <ScrollView
      contentInsetAdjustmentBehavior="automatic"
      contentContainerStyle={{ paddingHorizontal: 20, height: "auto", paddingBottom: 30 }}
      className="h-full bg-[#f6f6f6] pb-0 z-50"
    >
      <AlbumList />
    </ScrollView>
  );
};

export default Album;
