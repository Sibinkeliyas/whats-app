import { View, Text, FlatList, StyleSheet, Button } from "react-native";
import React, { useEffect, useRef, useState } from "react";
import { Audio } from "expo-av";

export interface ChatMessage {
  id: string;
  text: string;
  timestamp: string;
  sender: "user" | "bot";
  type?: "text" | "image" | "file" | "audio" | "video" | "location" | "contact";
  status?: "sent" | "delivered" | "read";
  imageUrl?: string;
}

export const chatMessages: ChatMessage[] = [
  { id: "1", text: "Hey 👋", timestamp: "2025-04-25T09:00:00Z", sender: "user", type: "text", status: "read" },
  { id: "2", text: "Hello! 😊 How’s it going?", timestamp: "2025-04-25T09:01:10Z", sender: "bot", type: "text", status: "read" },
  {
    id: "3",
    text: "Pretty good. Just got my coffee ☕️",
    timestamp: "2025-04-25T09:02:00Z",
    sender: "user",
    type: "text",
    status: "read",
  },
  {
    id: "4",
    text: "Nice! I could use one too 😄",
    timestamp: "2025-04-25T09:02:45Z",
    sender: "bot",
    type: "text",
    status: "read",
  },
  {
    id: "5",
    text: "Want to catch up later today?",
    timestamp: "2025-04-25T09:03:30Z",
    sender: "user",
    type: "text",
    status: "read",
  },
  {
    id: "6",
    text: "Sure, I’m free after 3 PM 🕒",
    timestamp: "2025-04-25T09:04:10Z",
    sender: "bot",
    type: "text",
    status: "read",
  },
  { id: "7", text: "Perfect! Let’s do 3:30 🕞", timestamp: "2025-04-25T09:05:00Z", sender: "user", type: "text", status: "read" },
  {
    id: "8",
    text: "Cool. Adding it to my calendar 📅",
    timestamp: "2025-04-25T09:05:50Z",
    sender: "bot",
    type: "text",
    status: "read",
  },
  {
    id: "9",
    text: "BTW, did you see the new design mockups?",
    timestamp: "2025-04-25T09:06:30Z",
    sender: "user",
    type: "text",
    status: "read",
  },
  {
    id: "10",
    text: "Yes! Looks so clean and modern ✨",
    timestamp: "2025-04-25T09:07:15Z",
    sender: "bot",
    type: "text",
    status: "read",
  },
  {
    id: "11",
    text: "Big shoutout to the UI team 🙌",
    timestamp: "2025-04-25T09:07:50Z",
    sender: "user",
    type: "text",
    status: "read",
  },
  { id: "12", text: "100%! They nailed it 🔥", timestamp: "2025-04-25T09:08:25Z", sender: "bot", type: "text", status: "read" },
  {
    id: "13",
    text: "Also, the login bug is fixed now 🐛✅",
    timestamp: "2025-04-25T09:09:00Z",
    sender: "user",
    type: "text",
    status: "read",
  },
  {
    id: "14",
    text: "Awesome! Will push the build later 🚀",
    timestamp: "2025-04-25T09:09:45Z",
    sender: "bot",
    type: "text",
    status: "read",
  },
  { id: "15", text: "Thanks! You rock 🤘", timestamp: "2025-04-25T09:10:30Z", sender: "user", type: "text", status: "read" },
  { id: "16", text: "Haha anytime 😎", timestamp: "2025-04-25T09:11:00Z", sender: "bot", type: "text", status: "read" },
  {
    id: "17",
    text: "Do you have the updated docs?",
    timestamp: "2025-04-25T09:12:00Z",
    sender: "user",
    type: "text",
    status: "read",
  },
  {
    id: "18",
    text: "Yup, sending them over now 📄",
    timestamp: "2025-04-25T09:12:30Z",
    sender: "bot",
    type: "text",
    status: "read",
  },
  {
    id: "19",
    text: "Got them. Thanks again! 🫶",
    timestamp: "2025-04-25T09:13:10Z",
    sender: "user",
    type: "text",
    status: "read",
  },
  { id: "20", text: "No problem at all!", timestamp: "2025-04-25T09:13:40Z", sender: "bot", type: "text", status: "read" },
  {
    id: "21",
    text: "Wanna hop on a quick call later?",
    timestamp: "2025-04-25T09:15:00Z",
    sender: "user",
    type: "text",
    status: "read",
  },
  {
    id: "22",
    text: "Sure! After the 3:30 sync?",
    timestamp: "2025-04-25T09:15:30Z",
    sender: "bot",
    type: "text",
    status: "read",
  },
  { id: "23", text: "Yep, let’s do 4:15 PM ☎️", timestamp: "2025-04-25T09:16:00Z", sender: "user", type: "text", status: "read" },
  { id: "24", text: "Locked in! 🔒", timestamp: "2025-04-25T09:16:30Z", sender: "bot", type: "text", status: "read" },
  {
    id: "25",
    text: "Okay, heading to lunch now 🥗",
    timestamp: "2025-04-25T09:17:15Z",
    sender: "user",
    type: "text",
    status: "read",
  },
  { id: "26", text: "Bon appétit! 🍽️", timestamp: "2025-04-25T09:17:45Z", sender: "bot", type: "text", status: "read" },
  { id: "27", text: "😂 thanks!", timestamp: "2025-04-25T09:18:10Z", sender: "user", type: "text", status: "read" },
  {
    id: "28",
    text: "Ping me if anything urgent comes up.",
    timestamp: "2025-04-25T09:18:45Z",
    sender: "user",
    type: "text",
    status: "read",
  },
  { id: "29", text: "Will do 👍", timestamp: "2025-04-25T09:19:10Z", sender: "bot", type: "text", status: "read" },
  { id: "30", text: "Catch you later 👋", timestamp: "2025-04-25T09:19:40Z", sender: "user", type: "text", status: "sent" },
  { id: "31", text: "Bye 👋 have a good one!", timestamp: "2025-04-25T09:20:00Z", sender: "bot", type: "text", status: "sent" },
];

const Chat = ({ chats, setChats }: { chats: ChatMessage[]; setChats: (data: ChatMessage[]) => void }) => {
  const flatListRef = useRef<FlatList>(null);

  useEffect(() => {
    setChats(chatMessages);
  }, [chatMessages]);

  return (
    <FlatList
      ref={flatListRef}
      data={chats}
      renderItem={({ item }) => renderItem({ item })}
      keyExtractor={(item, index) => index.toString()}
      contentContainerStyle={{ padding: 10, paddingBottom: 30 }}
      onContentSizeChange={() => flatListRef.current?.scrollToEnd({ animated: false })}
    />
  );
};

export default Chat;

const renderItem = ({ item }: { item: ChatMessage }) => {
  return (
    <View
      key={item.id}
      style={{
        padding: 10,
        backgroundColor: item.sender === "bot" ? "#ffff" : "#dcf8c6",
        borderRadius: 10,
        marginBottom: 10,
        alignSelf: item.sender == "bot" ? "flex-start" : "flex-end",
        borderTopLeftRadius: 0,
        borderTopRightRadius: 10,
      }}
      className="max-w-max w-auto"
    >
      {item.type === "audio" ? renderAudio(item) : <Text>{item.text}</Text>}
      <Text className="text-right font-[4px] mt-3 text-[grey] " style={{ fontSize: 10 }}>
        {new Date(item.timestamp).toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}
      </Text>
    </View>
  );
};

export const renderAudio = (item: ChatMessage) => {
  const [sound, setSound] = useState<any>();

  async function playSound() {
    console.log("Loading Sound");
    if (item.type !== "audio") return;
    // const { sound } = await Audio.Sound.createAsync(require(item.text));
    // setSound(sound);

    // console.log("Playing Sound");
    // await sound.playAsync();
  }

  useEffect(() => {
    return sound
      ? () => {
          console.log("Unloading Sound");
          sound.unloadAsync();
        }
      : undefined;
  }, [sound]);

  return (
    <View style={styles.container}>
      <Button title="Play Sound" onPress={playSound} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "#ecf0f1",
    padding: 10,
  },
});
