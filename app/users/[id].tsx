import { View, Text } from "react-native";
import React from "react";
import UserChat from "@/components/users-list/user";

const Chat = () => {
  return (
    <View className="flex-1">
      <UserChat />
    </View>
  );
};

export default Chat;
