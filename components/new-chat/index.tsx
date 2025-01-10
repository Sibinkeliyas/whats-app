import { View, Text, Image, TouchableOpacity, FlatList } from "react-native";
import React from "react";
import { IconSymbol } from "../ui/IconSymbol.ios";
import { IUsersProps } from "../users-list/Users";
import Icon from "../ui/Icon";

const menus: IItemProps[] = [
  { title: "New group", iosImage: "person.2", androidImage: "account", isIcon: true },
  { title: "New contact", iosImage: "person.badge.plus", androidImage: "home-group", isIcon: true },
  { title: "New community", iosImage: "person.3", androidImage: "t", isIcon: true },
  { title: "Chat with AIs", iosImage: "storefront", androidImage: "chat", isIcon: true },
  { title: "New broadcast", iosImage: "megaphone", androidImage: "voicemail", isIcon: true },
];

const frequentlyChates = [
  { id: 1, title: "John Doe", image: require("../../assets/images/default-image.png"), subTitle: "Hi" },
  { id: 2, title: "Jane Smith", image: require("../../assets/images/default-image.png"), subTitle: "Hello" },
  { id: 3, title: "Mike Johnson", image: require("../../assets/images/default-image.png"), subTitle: "Hey there" },
  { id: 4, title: "Sarah Brown", image: require("../../assets/images/default-image.png"), subTitle: "Welcome" },
  { id: 5, title: "Chris Lee", image: require("../../assets/images/default-image.png"), subTitle: "Greetings" },
  { id: 6, title: "Emily Davis", image: require("../../assets/images/default-image.png"), subTitle: "Good day" },
  { id: 7, title: "David Wilson", image: require("../../assets/images/default-image.png"), subTitle: "Howdy" },
  { id: 8, title: "Sophia Moore", image: require("../../assets/images/default-image.png"), subTitle: "Hi there" },
  { id: 9, title: "Liam Anderson", image: require("../../assets/images/default-image.png"), subTitle: "Hello!" },
  {
    id: 10,
    title: "Olivia Taylor",
    image: require("../../assets/images/default-image.png"),
    subTitle: "Nice to meet you",
  },
];

const NewChat = () => {
  return (
    <View className="w-full flex flex-col gap-6">
      <Card items={menus} />
      <Card items={frequentlyChates} title="Frequently Contacted" />
      <Card
        items={[{ title: "John Doe", image: require("../../assets/images/default-image.png"), subTitle: "Hi" }]}
        title="Contacts on WhatsApp"
      />
    </View>
  );
};

export default NewChat;

const Card = ({ items, title }: { items: IItemProps[]; title?: string }) => {
  return (
    <View>
      {title && <Text className="text-[16px] text-[#767779] font-medium mb-3">{title}</Text>}
      <View className="bg-[#fff] rounded-lg px-4 py-2">
        <FlatList
          scrollEnabled={false}
          data={items}
          renderItem={({ item, index }) => <Item item={item} index={index} itemsLength={items.length} />}
          keyExtractor={(item) => item.title}
        />
      </View>
    </View>
  );
};

interface IItemProps {
  title: string;
  image?: any;
  iosImage?: any;
  androidImage?: any;
  subTitle?: string;
  isIcon?: boolean;
}

const Item = ({ item, index, itemsLength }: { item: IItemProps; index: number; itemsLength: number }) => {
  return (
    <TouchableOpacity className="justify-between items-center flex-row w-full ">
      <View className="w-[15%] justify-center items-center flex-row ">
        {item.isIcon ? (
          <Icon
            iosIconName={item.iosImage}
            androidIconName={item.androidImage}
            iosColor="#1DAB61"
            androidColor="#1DAB61"
          />
        ) : (
          <Image
            source={item.image as any}
            className="w-[25px] h-[25px] rounded-lg"
            style={{ width: 40, height: 40, borderRadius: 50 }}
            resizeMode="cover"
          />
        )}
      </View>
      <View
        className={`w-[82%] py-[12px] relative pl-3 ${
          index === itemsLength - 1 ? "" : " border-[#767779] border-b-[.2px]"
        }`}
      >
        <Text className="text-[#0A0A0A]  text-[16px]">{item.title}</Text>
        {item.subTitle && (
          <Text className="text-[#767779] text-[14px] max-w-[90%] text-nowrap  overflow-hidden text-ellipsis ">
            {item.subTitle}
          </Text>
        )}
      </View>
    </TouchableOpacity>
  );
};
