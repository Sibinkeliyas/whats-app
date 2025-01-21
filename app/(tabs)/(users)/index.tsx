import ParallaxScrollView from "@/components/ParallaxScrollView";
import Users from "@/components/users-list";
import React from "react";
import { Platform, RefreshControl, ScrollView } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

export default function HomeScreen() {
  const [refreshing, setRefreshing] = React.useState(false);
  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    setTimeout(() => {
      setRefreshing(false);
    }, 2000);
  }, []);

  return (
    <SafeAreaProvider className="h-full bg-[#fff] pb-0" style={{ paddingBottom: 0, marginBottom: 0 }}>
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        contentContainerStyle={{
          paddingHorizontal: 20,
          height: "auto",
          paddingBottom: 30,
          paddingTop: Platform.OS == "android" || Platform.OS == "web" ? 100 : 0,
        }}
        className="h-full bg-[#fff] pb-0 z-50"
        refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}
      >
        <Users />
      </ScrollView>
    </SafeAreaProvider>
  );
}
