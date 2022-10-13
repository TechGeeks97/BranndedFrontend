import React from 'react';
import {View, StyleSheet} from 'react-native';
import AppText from './app-text';
import Icon from 'react-native-vector-icons/AntDesign';

const LeftIconText = ({text, ...others}) => {
  return (
    <View style={{flexDirection: 'row', alignItems: 'center'}}>
      <Icon {...others} />
      <AppText {...others}>{text}</AppText>
    </View>
  );
};

export default LeftIconText;
