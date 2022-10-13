import React from "react";
import { View, ScrollView, Image } from "react-native";
import Layout from "../../components/layout";
import AppText from "../../components/app-text";
import RoundProfile from "../../components/roundProfile";
import AppButton from "../../components/app-button";
import colors from "../../utils/colors";
import InstaGrid from "../../components/Insta-grid";
import { styles } from "./profile-css";
export default function profile({ navigation }) {
  return (
    <Layout>
      <View style={styles.header}>
        <View />
        <AppText style={{ color: colors.black, fontWeight: "bold" }}>
          Profile
        </AppText>
        <Image
          style={{ height: 13, width: 13 }}
          resizeMode="contain"
          source={require("../../assets/images/VectorBell.png")}
        />
      </View>
      <View style={styles.profileHeader}>
        <View style={styles.roundImageContainer}>
          <RoundProfile
            style={{
              main: styles.roundImageview,
              image: styles.roundImage,
            }}
          />
          <View style={styles.roundImageTextView}>
            <AppText style={styles.roundImageText}>@Kim kahdashian</AppText>
            <Image
              style={{ marginLeft: 2 }}
              resizeMode="contain"
              source={require("../../assets/images/instaVerify.png")}
            />
          </View>
        </View>
        <View style={styles.textButtonView}>
          <View>
            <AppText style={styles.firstText}>200</AppText>
            <AppText style={styles.secondText}>Posts</AppText>
          </View>
          <AppButton
            onPress={() => navigation.navigate("EditProfile")}
            style={{
              button: styles.button,
              label: {
                fontSize: 12,
              },
            }}
            title={"Edit Profile"}
          />
          <View>
            <AppText style={styles.firstText}>200k</AppText>
            <AppText style={styles.secondText}>Audience</AppText>
          </View>
        </View>
      </View>

      <InstaGrid
        data={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]}
        columns={3}
        loading={false}
        onItemClick={(item) => {
          console.log("Got the Item:" + JSON.stringify(item));
        }}
        onEndReachedThreshold={400}
        onEndReached={() => null}
      />
    </Layout>
  );
}
