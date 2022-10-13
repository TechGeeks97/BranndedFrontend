import React from "react";
import { SafeAreaView, View, StyleSheet } from "react-native";
import Header from "./header";
const Layout = ({ children, style, ...others }) => {
  return (
    <SafeAreaView style={[styles.main, style]}>
      <Header {...others} />
      {children}
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  main: {
    flex: 1,
    paddingTop: 20,
    paddingHorizontal: 10,
  },
});
export default Layout;
