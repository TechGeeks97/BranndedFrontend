import React, { useState } from "react";
import { View, Dimensions, SafeAreaView, TouchableOpacity } from "react-native";

import AppText from "../../components/app-text";

import Header from "../../components/header";
import { styles } from "./edit-profile-css";
import colors from "../../utils/colors";
const height = Dimensions.get("screen").height;

const EditProfile = ({ navigation }) => {
  const [profiles, setProfiles] = useState([
    {
      title: "Account Details",
      navigation: () => navigation.navigate("AccountDetail"),
    },
    {
      title: "Settings",
      navigation: () => navigation.navigate("ProfileSetting"),
    },
    {
      title: "Contact us",
      navigation: () => navigation.navigate("ProfileSetting"),
    },
    {
      title: "Log out",
      navigation: () => navigation.navigate("ProfileSetting"),
    },
  ]);
  return (
    <SafeAreaView>
      <View style={styles.main}>
        <View>
          <Header headerShown={true} />
        </View>
        <View style={styles.headerCenterContent}>
          <AppText style={styles.headerText}>Profile</AppText>
          <AppText style={styles.headerText}>Profile settings</AppText>
          <View />
        </View>
      </View>
      <AppText style={styles.title}>GENERAL</AppText>
      <View style={{ flex: 1, marginTop: 10 }}>
        {profiles.map((item) => (
          <TouchableOpacity
            onPress={item.navigation}
            style={styles.cardOptions}
          >
            <AppText style={{ color: colors.blueShade1 }}>{item.title}</AppText>
          </TouchableOpacity>
        ))}
      </View>
    </SafeAreaView>
  );
};
export default EditProfile;
