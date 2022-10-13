import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import colors from '../utils/colors';
const AppText = ({children, style}) => {
  return <Text style={[styles.main, style]}>{children}</Text>;
};
const styles = StyleSheet.create({
  main: {
    fontSize: 14,
    color: colors.greyShade,
  },
});
export default AppText;
