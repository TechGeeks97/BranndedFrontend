import React, { useEffect, useState } from "react";
import { View, Image, TouchableOpacity, StyleSheet } from "react-native";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import FA from "react-native-vector-icons/FontAwesome";
import colors from "../utils/colors";

const CustomTabBar = ({ navigation, ...otherProps }) => {
  const size = 20;
  const color = colors.black;
  const [activeTab, setActiveTab] = useState(0);
  const tabs = [
    {
      icon: (index, activeTab) => (
        <MaterialCommunityIcons
          name="home"
          color={index == activeTab ? colors.white : colors.black}
          size={size}
        />
      ),
      navigation: () => navigation.navigate("Home"),
    },
    {
      icon: (index, activeTab) => (
        <MaterialCommunityIcons
          name="magnify"
          color={index == activeTab ? colors.white : colors.black}
          size={size}
        />
      ),
      navigation: () => navigation.navigate("Search"),
    },
    // {
    //   title: "ReceivingHubStack",
    //   subTitle: "Hub",
    //   image: require("../assets/images/RIH.png"),
    //   navigation: () => navigation.navigate("ReceivingHubStack"),
    // },

    {
      icon: (index, activeTab) => (
        <MaterialCommunityIcons
          name="chat-processing"
          color={index == activeTab ? colors.white : colors.black}
          size={size}
        />
      ),
      navigation: () => navigation.navigate("ChatList"),
    },
    {
      icon: (index, activeTab) => (
        <MaterialCommunityIcons
          name="camera"
          color={index == activeTab ? colors.white : colors.black}
          size={size}
        />
      ),
      navigation: () => navigation.navigate("Home"),
    },
    {
      icon: (index, activeTab) => (
        <FA
          name="user"
          color={index == activeTab ? colors.white : colors.black}
          size={size}
        />
      ),
      navigation: () => navigation.navigate("Profile"),
    },
  ];
  console.log("otherprops", otherProps);
  return (
    <View style={styles.container}>
      {tabs.map((item, index) => {
        return (
          <TouchableOpacity
            key={index}
            onPress={() => {
              index == 0 && setActiveTab(index);
              item.navigation();
            }}
            style={[
              styles.image,
              {
                backgroundColor:
                  index == otherProps?.state?.index
                    ? colors.secondary
                    : "transparent",
              },
            ]}
          >
            {item.icon(index, otherProps?.state?.index)}
          </TouchableOpacity>
        );
      })}
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    paddingTop: 4,
    height: 60,
    flexDirection: "row",
    width: "100%",
    backgroundColor: "white",
    justifyContent: "space-around",
    // alignItems: "center",
    // paddingHorizontal: 2,
    elevation: 5,
  },
  image: {
    alignItems: "center",
    height: 40,
    width: 40,
    borderRadius: 40,
    justifyContent: "center",
  },
});
export default CustomTabBar;
