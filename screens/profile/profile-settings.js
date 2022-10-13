import React, { useState } from "react";
import { View, Dimensions, SafeAreaView, TouchableOpacity } from "react-native";

import AppText from "../../components/app-text";

import Header from "../../components/header";
import { styles } from "./edit-profile-css";
import colors from "../../utils/colors";
import ToggleSwitch from "../../components/toggleSwitch";
const height = Dimensions.get("screen").height;

const EditProfile = ({ navigation }) => {
  const [profiles, setProfiles] = useState([
    "Account Details",
    "Settings",
    "Contact us",
    "Log out",
  ]);
  const [settingList, setSettingsList] = useState([
    {
      id: 1,
      title: "Allow push Notifications",
      toggle: false,
    },
    {
      id: 2,
      title: "Enable face Id / Touch Id",
      toggle: false,
    },
  ]);
  const handletoggle = (id, value) => {
    let temp = [...settingList];
    let tempValue = { ...settingList[id] };
    tempValue.toggle = value;
    temp[id].toggle = tempValue;
    console.log("temp", temp);
    setSettingsList(temp);
    console.log("VALUE", value);
  };
  return (
    <SafeAreaView>
      <View style={styles.main}>
        <View>
          <Header headerShown={true} />
        </View>
        <View style={styles.headerCenterContent}>
          <AppText style={styles.headerText}>Profile settings</AppText>
          <AppText style={styles.headerText}>Edit Profile</AppText>
          <View />
        </View>
      </View>
      <AppText style={styles.title}>GENERAL</AppText>
      <View style={{ flex: 1, marginTop: 10 }}>
        {settingList.map((item, index) => (
          <View
            key={index}
            style={[
              styles.settingList,
              {
                borderTopWidth: index == 1 ? 0.5 : 0,
                borderColor: index == 1 ? colors.silverShade : "",
              },
            ]}
          >
            <AppText style={{ color: colors.black }}>{item.title}</AppText>
            <ToggleSwitch
              toggle={item.toggle}
              id={item.id}
              onToggle={(value, id) => handletoggle(id, value)}
            />
          </View>
        ))}
        <TouchableOpacity style={styles.saveButton}>
          <AppText style={{ color: colors.darkBlue }}>Save</AppText>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};
export default EditProfile;
