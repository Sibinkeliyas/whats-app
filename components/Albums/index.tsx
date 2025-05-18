import React, { useEffect, useState } from "react";
import * as MediaLibrary from "expo-media-library";
import * as ImagePicker from "expo-image-picker";
import { Text, TouchableOpacity, View } from "react-native";
import { Image } from "expo-image";

const blurhash =
  "|rF?hV%2WCj[ayj[a|j[az_NaeWBj@ayfRayfQfQM{M|azj[azf6fQfQfQIpWXofj[ayj[j[fQayWCoeoeaya}j[ayfQa{oLj?j[WVj[ayayj[fQoff7azayj[ayj[j[ayofayayayj[fQj[ayayj[ayfjj[j[ayjuayj[";

const AlbumList = () => {
  const [albums, setAlbums] = useState<MediaLibrary.Album[]>([]);
  const [permissionResponse, requestAlbumPermission] = MediaLibrary.usePermissions();
  const [selectedTab, setSelectedTab] = useState("Photos");

  async function getAlbums() {
    if (permissionResponse?.status !== "granted") {
      await requestAlbumPermission();
    }
    const fetchedAlbums = await MediaLibrary.getAlbumsAsync({
      includeSmartAlbums: true,
    });
    setAlbums(fetchedAlbums);
  }

  const [image, setImage] = useState<string | null>(null);

  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ["images", "videos"],
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };

  useEffect(() => {
    if (selectedTab === "Photos") {
      pickImage();
    } else {
      getAlbums();
    }
  }, [selectedTab]);
  return (
    <>
      <View className="flex-1 justify-center fixed top-0">
        <Tabs selectedTab={selectedTab} setSelectedTab={setSelectedTab} />
        {selectedTab === "Photos" ? (
          <View className="flex-1 justify-center items-center mt-4">
            <Text className="text-[14px] font-semibold">Photos</Text>
            <Text className="text-[12px] text-gray-500">No photos available</Text>
          </View>
        ) : (
          <View className="flex-1 justify-center items-center mt-4">
            <Text className="text-[14px] font-semibold">Albums</Text>
            {albums.map((album, index) => (
              <AlbumEntry key={index} album={album} index={index} />
            ))}
          </View>
        )}
      </View>
    </>
  );
};

export default AlbumList;

const Tabs = ({
  selectedTab,
  setSelectedTab,
}: {
  selectedTab: string;
  setSelectedTab: React.Dispatch<React.SetStateAction<string>>;
}) => {
  return (
    <View className="flex flex-row justify-center  bg-gray-200 max-w-[200px] mx-auto rounded-[8px]  p-1 w-max gap-0 items-center">
      <TouchableOpacity
        className={`${selectedTab === "Photos" && "bg-[#fff]"} rounded-[8px] px-4 py-2  w-max`}
        onPressIn={() => setSelectedTab("Photos")}
      >
        <Text className="text-[14px] font-semibold">Photos</Text>
      </TouchableOpacity>
      <TouchableOpacity
        className={`${selectedTab === "albums" && "bg-[#fff]"} rounded-[8px] px-4 py-2  w-max`}
        onPressIn={() => setSelectedTab("albums")}
      >
        <Text className="text-[14px] font-semibold">Albums</Text>
      </TouchableOpacity>
    </View>
  );
};

function AlbumEntry({ album, index }: { album: MediaLibrary.Album; index: number }) {
  const [assets, setAssets] = useState<MediaLibrary.Asset[]>([]);

  useEffect(() => {
    async function getAlbumAssets() {
      const albumAssets = await MediaLibrary.getAssetsAsync({ album });
      setAssets(albumAssets.assets);
    }
    getAlbumAssets();
  }, [album]);

  return (
    <View key={index}>
      <Text>
        {album.title} - {album.assetCount ?? "no"} assets
      </Text>
      <View className="w-full h-[100px] gap-2 flex-row justify-between items-center px-2">
        {assets &&
          assets.map((asset, index) => {
            return (
              <Image
                key={index}
                style={{ width: 100, height: 100 }}
                source={asset.uri}
                placeholder={{ blurhash }}
                contentFit="cover"
                transition={1000}
              />
            );
          })}
      </View>
    </View>
  );
}
