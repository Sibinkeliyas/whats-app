import { View, Image, Touchable, TouchableOpacity, Text, ScrollView, Alert } from "react-native";
import React, { useState } from "react";
import { whatsAppLogo } from "../constants/Images";
import { SafeAreaView } from "react-native-safe-area-context";
import Button from "@/components/common/CustomButton";
import CustomButton from "@/components/common/CustomButton";
import FormField from "@/components/common/CustomForm";
import { Redirect } from "expo-router";

const Home = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submitForm = () => {
    if (!email && !password) {
      Alert.alert("Please fill the form");
    } else {
      return <Redirect href="/(tabs)/explore" />;
    }
  };
  return (
    <SafeAreaView className="h-full w-full">
      <ScrollView className="h-full flex justify-center items-center w-full px-4" contentContainerClassName="w-full">
        <View>
          <Image source={whatsAppLogo} className="mx-auto  w-full" />
          <Text className="font-medium text-[16px] mt-3 text-center">Welcome to Whatsapp</Text>

          <FormField
            className="!w-full mt-5  p-2 rounded-[4px] border-[.5px] border-[#b8b8b8]"
            handleChange={(value) => setEmail(value)}
            keyboardType="email-address"
            placeHolder="Enter your email"
            value={email}
          />
          <FormField
            className="!w-full mt-5  p-2 rounded-[4px] border-[.5px] border-[#b8b8b8]"
            handleChange={(value) => setPassword(value)}
            keyboardType="default"
            secureTextEntry
            placeHolder="Enter your Password"
            value={password}
          />
          <CustomButton
            handlePress={submitForm}
            title="Sign In"
            className="bg-[#1DC070] max-w-[50%] px-4 py-2 rounded-xl mx-auto w-full mt-5 text-[#fff]"
            textClassName="text-center text-[16px] font-medium text-[#fff]"
          />
        </View>
        <View className="flex justify-center items-center mt-10">
          <Text>
            Read our <Text className="underline font-medium">Privacy Policy</Text> Tap agree and continue to accept the
            terms of service
          </Text>
        </View>
        <View className="!mt-[15%] w-full flex justify-center items-center ">
          <Text className="text-[12px]">From</Text>
          <Text className="text-[14px] font-medium text-gray-600">Facebook</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;
