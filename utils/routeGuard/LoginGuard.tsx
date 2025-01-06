import { useSelector } from "@/store";
import { useFocusEffect, useIsFocused } from "@react-navigation/native";
import { router } from "expo-router";
import React, { useCallback, useEffect } from "react";

const LoginGuard = ({ children }: { children: React.ReactElement }) => {
  const isFocused = useIsFocused();
  const { isInitialized, isLoggedIn } = useSelector((state) => state.authReducer);

  useEffect(() => {
    if (isInitialized && isLoggedIn) {
      router.push("/(tabs)/(users)");
    }
  }, [isInitialized, isLoggedIn, isFocused]);

  useFocusEffect(
    useCallback(() => {
      if (isInitialized && isLoggedIn) {
        router.push("/(tabs)/(users)");
      }
    }, [isInitialized, isLoggedIn])
  );

  return isInitialized && isLoggedIn ? null : children;
};

export default LoginGuard;
