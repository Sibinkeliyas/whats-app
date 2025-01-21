import React, { LegacyRef, RefObject, useEffect, useRef } from "react";
import { CameraView, CameraType, useCameraPermissions, CameraMode, Camera } from "expo-camera";
import { useState } from "react";
import { Alert, Button, ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Icon from "../ui/Icon";
import { router } from "expo-router";
import * as MediaLibrary from "expo-media-library";
import { SafeAreaView } from "react-native-safe-area-context";
import { Image } from "expo-image";
import { useVideoPlayer, VideoView } from "expo-video";
import { useEvent } from "expo";

const blurhash =
  "|rF?hV%2WCj[ayj[a|j[az_NaeWBj@ayfRayfQfQM{M|azj[azf6fQfQfQIpWXofj[ayj[j[fQayWCoeoeaya}j[ayfQa{oLj?j[WVj[ayayj[fQoff7azayj[ayj[j[ayofayayayj[fQj[ayayj[ayfjj[j[ayjuayj[";

export default function Cameras() {
  const [facing, setFacing] = useState<CameraType>("back");
  const [permission, requestPermission] = useCameraPermissions();
  const [flashLight, setFlashLight] = useState(false);
  const [albums, setAlbums] = useState<MediaLibrary.Album[]>([]);
  const [permissionResponse, requestAlbumPermission] = MediaLibrary.usePermissions();
  const [showAlbums, setShowAlbums] = useState(false);
  const [cameraMode, setCameraMode] = useState<CameraMode>("picture");
  const [isRecording, setIsRecord] = useState(false);
  const [record, setRecord] = useState("");
  const cameraRef = useRef<CameraView | null>(null);
  const [previewVideo, setPreviewVideo] = useState(false);

  if (!permission) {
    // Camera permissions are still loading.
    return <View />;
  }

  if (!permission.granted) {
    // Camera permissions are not granted yet.

    {
      Alert.alert("Alert Title", "My Alert Msg", [
        {
          text: "Cancel",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel",
        },
        { text: "OK", onPress: requestPermission },
      ]);
    }
  }

  function toggleCameraFacing() {
    setFacing((current) => (current === "back" ? "front" : "back"));
  }

  async function getAlbums() {
    if (permissionResponse?.status !== "granted") {
      await requestAlbumPermission();
    }
    const fetchedAlbums = await MediaLibrary.getAlbumsAsync({
      includeSmartAlbums: true,
    });
    setShowAlbums(true);
    setAlbums(fetchedAlbums);
  }

  const handleVideo = async () => {
    setCameraMode("video");
    setTimeout(async () => {
      try {
        if (cameraRef.current) {
          setIsRecord(true);
          const data = await cameraRef.current.recordAsync();
          setRecord(data?.uri || "");
        }
      } catch (error) {
        console.log(error);
      }
    }, 1000);
  };

  const stopVideo = async () => {
    try {
      if (cameraRef.current) {
        cameraRef.current.stopRecording();
        setPreviewVideo(true);
      }
    } catch (error) {
      console.log(error);
    } finally {
      setIsRecord(false);
    }
  };

  return (
    <View style={styles.container} className="relative">
      {previewVideo && record ? (
        <>
          <VideoScreen source={record} />
        </>
      ) : (
        <></>
      )}
      {showAlbums ? (
        <SafeAreaView>
          <ScrollView>
            {albums && albums.map((album, index) => <AlbumEntry key={index} album={album} index={index} />)}
          </ScrollView>
        </SafeAreaView>
      ) : (
        <>
          {!previewVideo && (
            <>
              <View
                className="justify-between items-center w-full flex-row absolute z-50 top-1 px-[10px]"
                style={{ paddingHorizontal: 10, top: 50 }}
              >
                <TouchableOpacity onPressIn={() => router.back()}>
                  <Icon androidIconName="close" iosIconName="x.circle" androidColor="#fff" iosColor="#fff" />
                </TouchableOpacity>
                <TouchableOpacity onPressIn={() => setFlashLight((prev) => !prev)}>
                  <Icon
                    androidIconName={flashLight ? "flash-off" : "flash"}
                    iosIconName={flashLight ? "flashlight.off.circle" : "flashlight.on.circle"}
                    androidColor="#fff"
                    iosColor="#fff"
                  />
                </TouchableOpacity>
              </View>
              {/* </View> */}
              <CameraView
                ref={cameraRef}
                style={styles.camera}
                facing={facing}
                barcodeScannerSettings={{
                  barcodeTypes: ["qr"],
                }}
                mode={cameraMode}
                autofocus="on"
                enableTorch={flashLight}
              ></CameraView>
              <View style={styles.buttonContainer} className="w-full justify-between items-center flex-row absolute bottom-14">
                <TouchableOpacity style={styles.button} onPress={getAlbums}>
                  <Icon androidIconName="view-gallery" iosIconName="photo.artframe" androidColor="#ffff" iosColor="#ffff" />
                </TouchableOpacity>
                <View className="justify-center items-center gap-5 flex-row ">
                  <TouchableOpacity
                    style={{ ...styles.button }}
                    onLongPress={() => handleVideo()}
                    className=" p-1 border-4 border-[#fff] !w-[60px] rounded-[50%] !h-[60px] "
                  >
                    <View className="bg-[#fff] w-full h-full rounded-[50%]"></View>
                  </TouchableOpacity>
                  {isRecording && (
                    <TouchableOpacity
                      onPressIn={() => stopVideo()}
                      className=" p-1 border-4 border-red-400 !w-[40px] rounded-[50%] !h-[40px] "
                    >
                      <View className="bg-red-400 full h-full rounded-[50%]"></View>
                    </TouchableOpacity>
                  )}
                </View>
                <TouchableOpacity style={styles.button} onPress={toggleCameraFacing}>
                  <Icon androidIconName="repeat" iosIconName="repeat" androidColor="#ffff" iosColor="#fff" />
                </TouchableOpacity>
              </View>
            </>
          )}
        </>
      )}
    </View>
  );
}

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
      <View className="bg-red-500 h-[100px]">
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

function VideoScreen({ source }: { source: string }) {
  const player = useVideoPlayer(source, (player) => {
    player.loop = true;
    // player.play();
  });

  const { isPlaying } = useEvent(player, "playingChange", { isPlaying: player.playing });

  return (
    <View style={styles.videoContainer}>
      <VideoView style={styles.video} player={player} allowsFullscreen allowsPictureInPicture />
      <View style={styles.controlsContainer}>
        <Button
          title={isPlaying ? "Pause" : "Play"}
          onPress={() => {
            if (isPlaying) {
              player.pause();
            } else {
              player.play();
            }
          }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    position: "relative",
  },
  message: {
    textAlign: "center",
    paddingBottom: 10,
  },
  camera: {
    flex: 1,
  },
  buttonContainer: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: "transparent",
    bottom: 20,
    paddingHorizontal: 20,
  },
  button: {
    alignSelf: "flex-end",
    alignItems: "center",
  },
  text: {
    fontSize: 24,
    fontWeight: "bold",
    color: "white",
  },
  videoContainer: {
    flex: 1,
  },
  video: {
    flex: 1,
  },
  controlsContainer: {
    position: "absolute",
    bottom: 10,
  },
});
