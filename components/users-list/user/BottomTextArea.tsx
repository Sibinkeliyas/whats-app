import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
  TouchableWithoutFeedback,
  StyleSheet,
  Keyboard,
  Button,
} from "react-native";
import React, { useState } from "react";
import Icon from "@/components/ui/Icon";
import { router } from "expo-router";
import { Audio } from "expo-av";
import { ChatMessage } from "./Chat";

const BottomTextArea = ({
  chats,
  setChats,
}: {
  chats: ChatMessage[];
  setChats: React.Dispatch<React.SetStateAction<ChatMessage[]>>;
}) => {
  const [recording, setRecording] = useState<any>();
  const [permissionResponse, requestPermission] = Audio.usePermissions();

  async function startRecording() {
    try {
      if (permissionResponse?.status !== "granted") {
        console.log("Requesting permission..");
        await requestPermission();
      }
      await Audio.setAudioModeAsync({
        allowsRecordingIOS: true,
        playsInSilentModeIOS: true,
      });

      console.log("Starting recording..");
      const { recording } = await Audio.Recording.createAsync(Audio.RecordingOptionsPresets.HIGH_QUALITY);
      setRecording(recording);
      console.log("Recording started");
    } catch (err) {
      console.error("Failed to start recording", err);
    }
  }

  async function stopRecording() {
    console.log("Stopping recording..");
    setRecording(undefined);
    await recording.stopAndUnloadAsync();
    await Audio.setAudioModeAsync({
      allowsRecordingIOS: false,
    });
    const uri = recording.getURI();
    setChats((prev) => [
      ...prev,
      {
        id: Date.now().toString(),
        text: uri as any,
        timestamp: new Date().toISOString(),
        sender: "user",
        type: "audio",
        status: "sent",
      },
    ]);
    console.log("Recording stopped and stored at", uri);
  }

  return (
    <View className="fixed bottom-0  w-full bg-white min-h-[75px] flex justify-center items-center gap-[10px]">
      <View className="flex justify-between items-center gap-[10px] flex-row  h-[50px] bg-white rounded-lg w-full px-[10px]">
        <TouchableOpacity>
          <Icon androidIconName="plus" iosIconName="plus" androidColor="#101010" iosColor="#101010" />
        </TouchableOpacity>
        <TextInput className="h-[30px] bg-[#ffff] border-[1px] border-[solid] border-[#aaaaaa] w-[65%] rounded-[24px] px-[5px]" />
        <TouchableOpacity onPressIn={() => router.push("/Camera")}>
          <Icon androidIconName="camera" iosIconName="camera" androidColor="#101010" iosColor="#101010" />
        </TouchableOpacity>
        <TouchableOpacity onPressIn={startRecording} onPressOut={stopRecording}>
          <Icon androidIconName="microphone" iosIconName="mic" androidColor="#101010" iosColor="#101010" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default BottomTextArea;
