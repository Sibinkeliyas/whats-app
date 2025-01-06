import { useSelector } from "@/store";
import { useFocusEffect } from "@react-navigation/native";
import { router } from "expo-router";
import React, { useCallback, useEffect } from "react";

const AuthGuard = ({ children }: { children: React.ReactElement }) => {
  const { isInitialized, isLoggedIn } = useSelector((state) => state.authReducer);

  useEffect(() => {
    if (isInitialized && isLoggedIn) {
      router.push("/(tabs)/(users)");
    }
  }, [isInitialized, isLoggedIn]);

  useFocusEffect(
    useCallback(() => {
      if (isInitialized && isLoggedIn) {
        router.push("/(tabs)/(users)");
      }
    }, [isInitialized, isLoggedIn])
  );

  return children;
};

export default AuthGuard;
