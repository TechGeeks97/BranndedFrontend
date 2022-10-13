import React from "react";
import { View, StyleSheet, TextInput, TouchableOpacity } from "react-native";
import colors from "../utils/colors";
import AppText from "./app-text";
import Icon from "react-native-vector-icons/Entypo";
import { err } from "react-native-svg/lib/typescript/xml";
const AppTextInput = ({
  style,
  label,
  name,
  setPasswordHide,
  error,
  ...others
}) => {
  return (
    <>
      <View style={[styles.main, { marginBottom: !error && 12 }]}>
        <TextInput
          style={[styles.textInput, style && style]}
          {...others}
          placeholderTextColor={colors.blue}
        />
        <TouchableOpacity
          onPress={() => (label == "Password" ? setPasswordHide() : null)}
        >
          <Icon name={name} size={10} color={colors.purpleShade1} />
        </TouchableOpacity>
      </View>
      {error && (
        <View style={styles.error}>
          <AppText style={styles.errorMsg}>{error}</AppText>
        </View>
      )}
    </>
  );
};
const styles = StyleSheet.create({
  main: {
    justifyContent: "center",

    borderWidth: 0.5,
    borderRadius: 10,
    borderColor: colors.black,
    // paddingHorizontal: 5,
    // marginTop: 5,
    // marginBottom: 12,
    height: 28,
    width: "60%",
    fontSize: 10,
    flexDirection: "row",
    alignItems: "center",
  },
  textInput: {
    width: "80%",
    height: 32,
    fontSize: 12,
    color: colors.blue,
  },
  error: {
    width: "60%",
    // backgroundColor: "red",
    marginBottom: 5,
    marginTop: 5,
  },
  errorMsg: {
    color: colors.red,
    fontSize: 12,
  },
});
export default AppTextInput;
