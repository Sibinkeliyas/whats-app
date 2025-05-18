import Icon from "@/components/ui/Icon";
import { Image } from "expo-image";
import { router, Stack } from "expo-router";
import React from "react";
import { TouchableOpacity, View, Text } from "react-native";

function ChatLayout() {
  return (
    <Stack>
      <Stack.Screen
        name="[id]"
        options={{
          headerShown: true,
          header: () => {
            return (
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "space-between",
                  backgroundColor: "transparent",
                  paddingTop: 40,
                  paddingBottom: 10,
                  paddingHorizontal: 10,
                }}
              >
                <TouchableOpacity onPressIn={() => router.back()}>
                  <Icon androidIconName="arrow-left" iosIconName="arrow.left" />
                </TouchableOpacity>
                <View className="flex justify-start items-center gap-[10px] flex-row w-[60%]">
                  <Image
                    source={require("@/assets/images/default-image.png")}
                    className="w-[25px] h-[25px] rounded-lg"
                    style={{ width: 50, height: 50, borderRadius: 50 }}
                    contentFit="cover"
                  />
                  <Text>Sibin k</Text>
                </View>
                <View className="flex justify-center items-center gap-[15px] flex-row">
                  <TouchableOpacity>
                    <Icon androidIconName="video" iosIconName="video" />
                  </TouchableOpacity>
                  <TouchableOpacity>
                    <Icon androidIconName="phone" iosIconName="phone" />
                  </TouchableOpacity>
                </View>
              </View>
            );
          },
        }}
      />
    </Stack>
  );
}

export default ChatLayout;
