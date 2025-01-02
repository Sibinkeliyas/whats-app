import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { ThemedView } from "@/components/ThemedView";
import ParallaxScrollView from "@/components/ParallaxScrollView";
import { switchTheme } from "@/store/slices/theme";
import { useDispatch, useSelector } from "@/store";

const Home = () => {
  const dispatch = useDispatch();
  const { theme } = useSelector((state) => state.themeReducer);

  return (
    <ParallaxScrollView>
      <ThemedView>
        <TouchableOpacity onPress={() => dispatch(switchTheme(theme === "dark" ? "light" : "dark"))}>
          <Text>Button</Text>
        </TouchableOpacity>
        <Text className=" !text-[red] dark:!text-[green]">Home</Text>
      </ThemedView>
    </ParallaxScrollView>
  );
};

export default Home;
