import { View, Text, TouchableOpacity } from "react-native";
import React from "react";

const CustomButton = ({
  className,
  title,
  isLoading = false,
  disabled = false,
  textClassName,
  handlePress,
}: {
  title: string;
  className?: string;
  isLoading?: boolean;
  disabled?: boolean;
  textClassName?: string;
  handlePress: () => void;
}) => {
  return (
    <TouchableOpacity
      className={`bg-secondary rounded-xl min-h-[62px] justify-center items-center !px-4 ${className} ${
        isLoading ? "opacity-50" : ""
      }`}
      onPress={handlePress}
      activeOpacity={0.7}
      disabled={disabled || isLoading}
    >
      <Text className={`text-primary text-lg font-psemibold ${textClassName}`}>{title}</Text>
    </TouchableOpacity>
  );
};

export default CustomButton;
