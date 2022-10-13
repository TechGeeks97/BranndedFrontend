import React, { useState } from "react";
import {
  View,
  Dimensions,
  SafeAreaView,
  FlatList,
  TouchableOpacity,
} from "react-native";

import AppText from "../../components/app-text";

import Header from "../../components/header";
import { styles } from "./chat-list-css";

import SearchBar from "../../components/searchBar";
import RoundProfile from "../../components/roundProfile";
const height = Dimensions.get("screen").height;

const ChatList = ({ navigation }) => {
  const [chatList, setChatList] = useState([
    {
      name: "jsntyeu",
      seen: true,
      lastMessage: "",
    },
    {
      name: "jsntyeu",
      seen: true,
      lastMessage: "",
    },
    {
      name: "jsntyeu",
      seen: true,
      lastMessage: "",
    },
    {
      name: "nouman",
      seen: true,
      lastMessage: "ssjsj",
    },
  ]);
  const [searchList, setSearchList] = useState([
    {
      name: "jsntyeu",
      seen: true,
      lastMessage: "",
    },
    {
      name: "jsntyeu",
      seen: true,
      lastMessage: "",
    },
    {
      name: "jsntyeu",
      seen: true,
      lastMessage: "",
    },
    {
      name: "nouman",
      seen: true,
      lastMessage: "ssjsj",
    },
  ]);

  const [searchItem, setSearchItem] = useState("");

  const search = (text) => {
    const filterList = chatList.filter((item) =>
      text.toLowerCase().startsWith(item.name.toLowerCase())
    );
    if (text != "") {
      setSearchItem(text);
      setSearchList(filterList);
    } else {
      setSearchItem(text);
      setSearchList(chatList);
    }
  };
  const resetSerach = () => {
    setSearchItem("");
    setSearchList(chatList);
  };
  return (
    <SafeAreaView>
      <View style={styles.main}>
        <View>
          <Header headerShown={true} />
        </View>
        <View style={styles.headerCenterContent}>
          <AppText style={styles.headerText}>jnstepe07</AppText>

          <View />
        </View>
      </View>

      <SearchBar
        value={searchItem}
        onChangeText={(value) => search(value)}
        clear={resetSerach}
      />
      <FlatList
        showsVerticalScrollIndicator={false}
        data={searchList}
        renderItem={({ item, index }) => {
          return (
            <View style={{ flex: 1, marginTop: 10 }}>
              <TouchableOpacity
                onPress={() => navigation.navigate("Chat")}
                style={styles.roundImageContainer}
              >
                <RoundProfile
                  style={{
                    main: styles.roundImageview,
                    image: styles.roundImage,
                  }}
                />
                <View>
                  <AppText style={styles.roundImageText1}>{item.name}</AppText>
                  <AppText style={styles.roundImageText2}>
                    {item.lastMessage || "seen"}
                  </AppText>
                </View>
              </TouchableOpacity>
            </View>
          );
        }}
        keyExtractor={(item, index) => index}
      />
    </SafeAreaView>
  );
};
export default ChatList;
