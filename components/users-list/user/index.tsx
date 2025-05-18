import React from "react";
import {
  ImageBackground,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import BottomTextArea from "./BottomTextArea";
import Chat, { ChatMessage } from "./Chat";

const UserChat = () => {
  const [chats, setChats] = React.useState<ChatMessage[]>([]);
  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container} edges={["left", "right", "top"]}>
        <View style={styles.innerContainer}>
          <ImageBackground source={require("@/assets/images/user-chat-bg-image.jpg")} resizeMode="cover" style={styles.image}>
            <Chat chats={chats} setChats={setChats} />
          </ImageBackground>
          <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <KeyboardAvoidingView
              behavior={Platform.OS === "ios" ? "padding" : "height"}
              keyboardVerticalOffset={Platform.select({ ios: 85, android: 85 })}
              style={styles.keyboardAvoidingView}
            >
              <BottomTextArea chats={chats} setChats={setChats} />
            </KeyboardAvoidingView>
          </TouchableWithoutFeedback>
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  innerContainer: {
    flex: 1,
    position: "relative",
  },
  image: {
    flex: 1,
    paddingVertical: 10,
    paddingHorizontal: 10,
  },
  keyboardAvoidingView: {
    width: "100%",
  },
});

export default UserChat;
