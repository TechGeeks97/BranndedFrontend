import React, { useState, useCallback, useEffect } from "react";
import { GiftedChat } from "react-native-gifted-chat";
import { View, SafeAreaView, StyleSheet } from "react-native";
import AppText from "./app-text";
import Header from "./header";
import colors from "../utils/colors";
import RoundProfile from "./roundProfile";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
export default function ChatComponent() {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    setMessages([
      {
        _id: 1,
        text: "Hello developer",
        createdAt: new Date(),
        user: {
          _id: 2,
          name: "React Native",
          avatar: "https://placeimg.com/140/140/any",
        },
      },
    ]);
  }, []);

  const onSend = useCallback((messages = []) => {
    setMessages((previousMessages) =>
      GiftedChat.append(previousMessages, messages)
    );
  }, []);

  return (
    <SafeAreaView
      style={{
        flex: 1,
      }}
    >
      <View style={styles.main}>
        <View>
          <Header headerShown={true} />
        </View>
        <View style={styles.headerCenterContent}>
          <RoundProfile
            style={{
              main: styles.roundProfileMain,
              image: styles.roundProfileImage,
            }}
          />
          <AppText style={styles.headerText}>JNTEPAA9</AppText>
          <View />
        </View>
      </View>

      <View
        style={{
          flex: 1,

          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <AppText> Follows you </AppText>
        <AppText> you both follows kim and two others </AppText>
      </View>
      <View
        style={{
          flexDirection: "row",
          width: "100%",
          paddingHorizontal: 10,
          justifyContent: "space-between",
          //   backgroundColor: "green",
          //   flex: 1,
        }}
      >
        <View
          style={{ height: 50, width: 50, backgroundColor: colors.secondary }}
        >
          <MaterialCommunityIcons
            name="camera"
            color={colors.white}
            size={20}
          />
        </View>
        <View style={{ width: "80%", borderRadius: 30, overflow: "hidden" }}>
          <GiftedChat
            placeholder="Message"
            messages={messages}
            onSend={(messages) => onSend(messages)}
            user={{
              _id: 1,
            }}
          />
        </View>
      </View>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  main: {
    flexDirection: "row",
    borderBottomWidth: 0.4,
    paddingBottom: 5,
    marginBottom: 30,
  },
  headerCenterContent: {
    flexDirection: "row",
    // justifyContent: "space-between",
    width: "65%",
    alignItems: "center",
    // marginTop: 15,
    marginLeft: 10,
  },
  roundProfileMain: {
    height: 30,
    width: 30,
    marginRight: 10,
  },
  roundProfileImage: {
    height: 14,
    width: 14,
  },
  headerText: {
    color: colors.black,
    fontWeight: "bold",
  },
});
