import { View, Image, Text, ScrollView, Alert, KeyboardAvoidingView, Platform } from "react-native";
import React, { useEffect, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import CustomButton from "@/components/common/CustomButton";
import FormField from "@/components/common/CustomForm";
import { router } from "expo-router";
import LoginGuard from "@/utils/routeGuard/LoginGuard";
import { useDispatch } from "@/store";
import { userLoginSuccess } from "@/store/slices/auth";

const Home = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submitForm = () => {
    if (!email || !password || !name) {
      Alert.alert("Please fill the form");
    } else {
      dispatch(userLoginSuccess({ userName: name, email, id: 1 }));
      return router.push("/(tabs)/(users)");
    }
  };

  return (
    <LoginGuard>
      <SafeAreaView className="h-full w-full">
        <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"} style={{ flex: 1 }}>
          <ScrollView className="h-full w-full px-4" contentContainerClassName="w-full  flex justify-center items-center">
            <View className="w-full">
              <Image
                source={require("@/assets/images/whatsapp.png")}
                alt="test"
                resizeMode="contain"
                className="mx-auto mt-10 h-[120px] w-[120px]"
              />
              <Text className="font-medium text-[16px] mt-3 text-center">Welcome to Whatsapp</Text>
              <FormField
                className="!w-full mt-5  p-2 rounded-[4px] border-none border-[#b8b8b8]"
                handleChange={(value) => setName(value)}
                keyboardType="default"
                placeHolder="Enter your name"
                value={name}
              />
              <FormField
                className="!w-full  p-2 rounded-[4px] border-none border-[#b8b8b8]"
                handleChange={(value) => setEmail(value)}
                keyboardType="email-address"
                placeHolder="Enter your email"
                value={email}
              />
              <FormField
                className="!w-full  p-2 rounded-[4px] "
                handleChange={(value) => setPassword(value)}
                keyboardType="default"
                secureTextEntry
                placeHolder="Enter your Password"
                value={password}
              />
              <CustomButton
                handlePress={submitForm}
                title="Sign In"
                className="bg-[#1DC070] !max-w-[50%] px-8 py-2 rounded-xl mx-auto w-full mt-10 text-[#fff]"
                textClassName="text-center text-[16px] font-medium text-[#fff]"
              />
            </View>
            <View className="flex justify-center items-center mt-10">
              <Text>
                Read our <Text className="underline font-medium">Privacy Policy</Text> Tap agree and continue to accept the terms
                of service
              </Text>
            </View>
            <View className="!mt-[15%] w-full flex justify-center items-center ">
              <Text className="text-[12px]">From</Text>
              <Text className="text-[14px] font-medium text-gray-600">Facebook</Text>
            </View>
          </ScrollView>
        </KeyboardAvoidingView>
      </SafeAreaView>
    </LoginGuard>
  );
};

export default Home;
