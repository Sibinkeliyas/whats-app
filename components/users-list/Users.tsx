import { View, Text, Image, FlatList, TouchableOpacity, Alert } from "react-native";
import React from "react";
import { IconSymbol } from "../ui/IconSymbol.ios";
import { router } from "expo-router";

export interface IUsersProps {
  id: number;
  userName: string;
  lastMessagedTime: string;
  message: string;
  profileImage: string;
}

const data: IUsersProps[] = [
  {
    id: 1,
    userName: "Robert Garcia",
    lastMessagedTime: "16:09",
    message: "Hey, are you coming to the meeting tomorrow?",
    profileImage: require("@/assets/images/default-image.png"),
  },
  {
    id: 2,
    userName: "Daniel Thomas",
    lastMessagedTime: "09:07",
    message: "Did you see the news today?",
    profileImage: require("@/assets/images/default-image.png"),
  },
  {
    id: 3,
    userName: "David Wilson",
    lastMessagedTime: "08:20",
    message: 'You reacted 🤣 to "...ketchup!"',
    profileImage: require("@/assets/images/default-image.png"),
  },
  {
    id: 4,
    userName: "Mark Turner",
    lastMessagedTime: "12:07",
    message: 'You reacted 👍 to "Good job on the project!"',
    profileImage: require("@/assets/images/default-image.png"),
  },
  {
    id: 5,
    userName: "David Wilson",
    lastMessagedTime: "18:51",
    message: "What time works for you?",
    profileImage: require("@/assets/images/default-image.png"),
  },
  {
    id: 6,
    userName: "Thomas Moore",
    lastMessagedTime: "03:40",
    message: "What time works for you?",
    profileImage: require("@/assets/images/default-image.png"),
  },
  {
    id: 7,
    userName: "Linda Taylor",
    lastMessagedTime: "02:52",
    message: "I found the documents you were looking for.",
    profileImage: require("@/assets/images/default-image.png"),
  },
  {
    id: 8,
    userName: "Alex Johnson",
    lastMessagedTime: "20:30",
    message: 'You reacted ❤️ to "Thank you!"',
    profileImage: require("@/assets/images/default-image.png"),
  },
  {
    id: 9,
    userName: "Sibin K",
    lastMessagedTime: "01:35",
    message: 'You reacted 😮 to "That\'s amazing!"',
    profileImage: require("@/assets/images/default-image.png"),
  },
  {
    id: 10,
    userName: "Mark Turner",
    lastMessagedTime: "06:28",
    message: "Where are we meeting?",
    profileImage: require("@/assets/images/default-image.png"),
  },
  {
    id: 11,
    userName: "Jessica Hall",
    lastMessagedTime: "18:53",
    message: "Don't forget to submit your report.",
    profileImage: require("@/assets/images/default-image.png"),
  },
  {
    id: 12,
    userName: "Linda Taylor",
    lastMessagedTime: "21:26",
    message: 'You liked "Congrats on the new job!"',
    profileImage: require("@/assets/images/default-image.png"),
  },
  {
    id: 13,
    userName: "Linda Taylor",
    lastMessagedTime: "23:41",
    message: "Can we reschedule our plan?",
    profileImage: require("@/assets/images/default-image.png"),
  },
  {
    id: 14,
    userName: "Chris Lee",
    lastMessagedTime: "04:07",
    message: 'You liked "Let\'s catch up this weekend!"',
    profileImage: require("@/assets/images/default-image.png"),
  },
  {
    id: 15,
    userName: "Sibin K",
    lastMessagedTime: "13:38",
    message: 'You liked "See you at 6 PM!"',
    profileImage: require("@/assets/images/default-image.png"),
  },
  {
    id: 16,
    userName: "Jessica Hall",
    lastMessagedTime: "03:54",
    message: "Can we reschedule our plan?",
    profileImage: require("@/assets/images/default-image.png"),
  },
  {
    id: 17,
    userName: "James Martinez",
    lastMessagedTime: "10:17",
    message: "Hey, are you coming to the meeting tomorrow?",
    profileImage: require("@/assets/images/default-image.png"),
  },
  {
    id: 18,
    userName: "Linda Taylor",
    lastMessagedTime: "19:29",
    message: "Check out this cool video I sent you.",
    profileImage: require("@/assets/images/default-image.png"),
  },
  {
    id: 19,
    userName: "Sibin K",
    lastMessagedTime: "21:16",
    message: "Reminder: Don't forget the team call at 10 AM.",
    profileImage: require("@/assets/images/default-image.png"),
  },
  {
    id: 20,
    userName: "James Martinez",
    lastMessagedTime: "13:43",
    message: 'You reacted ❤️ to "Thank you!"',
    profileImage: require("@/assets/images/default-image.png"),
  },
];

const UsersList = () => {
  return (
    <View className="w-full">
      <FlatList
        scrollEnabled={false}
        data={data}
        renderItem={({ item }) => <Item user={item} />}
        keyExtractor={(item) => String(item.id)}
      />
    </View>
  );
};

export default UsersList;

const Item = ({ user }: { user: IUsersProps }) => {
  return (
    <TouchableOpacity className="justify-between items-center flex-row w-full ">
      <View className="w-[15%] justify-center items-center flex-row ">
        <Image
          source={user.profileImage as any}
          className="w-[25px] h-[25px] rounded-lg"
          style={{ width: 50, height: 50, borderRadius: 50 }}
          resizeMode="cover"
        />
      </View>
      <View className="border-b border-[#00000033] w-[85%] py-[12px] relative pl-5">
        <View className="flex-row justify-between items-center">
          <Text className="text-[#0A0A0A] font-semibold text-[16px]">{user.userName}</Text>
          <Text className="text-[#767779] text-[14px]">{user.lastMessagedTime}</Text>
        </View>
        <View className="w-full mt-1 ml-auto justify-between items-center flex-row">
          <Text className="text-[#767779] text-[14px] max-w-[90%] text-nowrap  overflow-hidden text-ellipsis ">
            {user.message}
          </Text>
          <IconSymbol name="pin.circle" color="#767779" />
        </View>
      </View>
    </TouchableOpacity>
  );
};
