import React from "react";
import { ThemedView } from "../ThemedView";
import { Text } from "react-native";
import Header from "./header";
import UsersList from "./Users";

const Users = () => {
  return (
    <ThemedView className="relative">
      <Header />
      <UsersList />
    </ThemedView>
  );
};

export default Users;
