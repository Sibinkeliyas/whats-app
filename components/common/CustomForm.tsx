import { View, Text, TextInput, TouchableOpacity, Image, KeyboardTypeOptions } from "react-native";
import React, { useState } from "react";
import Icon from "@expo/vector-icons/FontAwesome5";
import { StyleSheet } from "nativewind";

const FormField = ({
  handleChange,
  keyboardType,
  title,
  value,
  className,
  placeHolder,
  secureTextEntry = false,
}: {
  title?: string;
  value: string;
  handleChange: (e: string) => void;
  className?: string;
  keyboardType: KeyboardTypeOptions | undefined;
  placeHolder: string;
  secureTextEntry?: boolean;
}) => {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <View className={`space-y-2 ${className}`}>
      {title && <Text className="text-base text-gray-100 font-pmedium">{title}</Text>}
      <View
        className="w-full h-16 px-2 mt-7 bg-black-100 rounded-2xl border-2 !flex !items-center !justify-between !flex-row"
        style={style.formFieldView}
      >
        <TextInput
          style={{ outline: "none" }}
          className="flex-1 text-white text-base  w-full border-none focus:!border-none border-2 focus:!outline-none h-full"
          value={value}
          placeholder={placeHolder}
          placeholderTextColor="#7B7B8B"
          onChangeText={handleChange}
          keyboardAppearance="default"
          keyboardType={keyboardType}
          secureTextEntry={secureTextEntry && !showPassword}
        />

        {secureTextEntry && (
          <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
            <Icon name={showPassword ? "eye-slash" : "eye"} />
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

export default FormField;

const style = StyleSheet.create({
  formFieldView: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
  },
});
