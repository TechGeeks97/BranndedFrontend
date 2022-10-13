import React from "react";
import { TouchableOpacity, StyleSheet } from "react-native";
import AppText from "./app-text";
import colors from "../utils/colors";
const AppButton = ({ style, title, onPress }) => {
  return (
    <TouchableOpacity
      style={[styles.main, style && style.button]}
      onPress={onPress}
    >
      <AppText style={[styles.label, style && style.label]}>{title}</AppText>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  main: {
    height: 60,
    width: "100%",
    borderRadius: 8,
    backgroundColor: colors.secondary,
    justifyContent: "center",
    alignItems: "center",
  },
  label: {
    color: colors.white,
    fontWeight: "bold",
    fontSize: 18,
  },
});
export default AppButton;
