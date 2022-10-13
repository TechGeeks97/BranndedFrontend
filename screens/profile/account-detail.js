import React, { useState } from "react";
import { View, Dimensions, SafeAreaView, TouchableOpacity } from "react-native";

import AppText from "../../components/app-text";

import Header from "../../components/header";
import { styles } from "./edit-profile-css";
import colors from "../../utils/colors";
import ToggleSwitch from "../../components/toggleSwitch";
const height = Dimensions.get("screen").height;

const EditProfile = ({ navigation }) => {
  const [privateDetails, setPrivateDetails] = useState([
    {
      label: "Email Address",
      value: "noumansaeed831@gmail.com",
    },
    {
      label: "Phone Number",
      value: "Your phone Number",
    },
  ]);
  const [settingList, setSettingsList] = useState([
    {
      id: 1,
      title: "First Name",
      toggle: false,
    },
    {
      id: 2,
      title: "Last Name",
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
      <AppText style={styles.title}>Public Profile</AppText>
      <View style={{ flex: 1, marginVertical: 10 }}>
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
          </View>
        ))}

        <View style={{ paddingTop: 40 }}>
          <AppText style={[styles.title, { marginBottom: 10 }]}>
            Private Details
          </AppText>
          {privateDetails.map((item, index) => (
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
              <View style={styles.horizontalSpaceBetween}>
                <AppText style={{ color: colors.black }}>{item.label}</AppText>
                <AppText style={{ color: colors.black }}>{item.value}</AppText>
              </View>
            </View>
          ))}
        </View>
      </View>
    </SafeAreaView>
  );
};
export default EditProfile;
