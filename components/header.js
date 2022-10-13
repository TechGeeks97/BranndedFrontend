import React from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import { useNavigation } from "@react-navigation/native";

import AppText from "./app-text";
import colors from "../utils/colors";

const Header = ({ headerShown, title }) => {
  const navigation = useNavigation();
  return (
    headerShown && (
      <View style={styles.main}>
        <TouchableOpacity
          style={styles.backBtn}
          onPress={() => navigation.goBack()}
        >
          <Icon name="ios-chevron-back-outline" size={17} />
        </TouchableOpacity>
        {title && (
          <>
            <AppText>{title}</AppText>
            <AppText> </AppText>
          </>
        )}
      </View>
    )
  );
};
const styles = StyleSheet.create({
  main: {
    paddingLeft: 10,
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  backBtn: {
    height: 25,
    width: 25,
    borderRadius: 10,
    backgroundColor: colors.white,
    justifyContent: "center",
    alignItems: "center",
  },
});
export default Header;
