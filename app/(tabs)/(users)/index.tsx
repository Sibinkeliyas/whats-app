import ParallaxScrollView from "@/components/ParallaxScrollView";
import Users from "@/components/users-list";
import React from "react";
import { RefreshControl, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function HomeScreen() {
  const [refreshing, setRefreshing] = React.useState(false);
  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    setTimeout(() => {
      setRefreshing(false);
    }, 2000);
  }, []);
  return (
    <SafeAreaView className="h-full bg-[#fff] pb-0" style={{ paddingBottom: 0, marginBottom: 0 }}>
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        contentContainerStyle={{ paddingHorizontal: 20, height: "auto", paddingBottom: 30 }}
        className="h-full bg-[#fff] pb-0 z-50"
        refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}
      >
        <Users />
      </ScrollView>
    </SafeAreaView>
  );
}
