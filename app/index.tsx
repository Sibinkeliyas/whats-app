import { View, Image, Touchable, TouchableOpacity, Text, ScrollView } from "react-native";
import React, { useState } from "react";
import { whatsAppLogo } from "../constants/Images";
import { SafeAreaView } from "react-native-safe-area-context";
import Button from "@/components/common/CustomButton";
import CustomButton from "@/components/common/CustomButton";
import FormField from "@/components/common/CustomForm";
import { Link } from "expo-router";

const Home = () => {
  const [email, setEmail] = useState("");
  return (
    <SafeAreaView className="h-full">
      <ScrollView>
        <Link href='/(tabs)/(users)'>Home</Link>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;
