import React from "react";
import { View, TextInput, StyleSheet, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import Entypo from "react-native-vector-icons/Entypo";
import colors from "../utils/colors";
const SearchBar = ({ value, onChangeText, clear }) => {
  return (
    <View style={styles.main}>
      <Icon name="magnify" size={18} color={colors.silverShade} />
      <TextInput
        value={value}
        onChangeText={onChangeText}
        style={styles.textInput}
      />
      <TouchableOpacity onPress={() => clear()}>
        <Entypo name="cross" size={18} color={colors.silverShade} />
      </TouchableOpacity>
    </View>
  );
};
export default SearchBar;
const styles = StyleSheet.create({
  main: {
    height: 40,
    width: "94%",
    paddingHorizontal: 20,
    backgroundColor: "white",
    alignSelf: "center",
    borderRadius: 10,
    flexDirection: "row",
    alignItems: "center",
  },
  textInput: {
    width: "82%",
    height: "80%",
    marginLeft: 10,
  },
});
