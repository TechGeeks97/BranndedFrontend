import React, { useState } from "react";
import { View, ScrollView, FlatList, Image } from "react-native";
import Layout from "../../components/layout";
import AppText from "../../components/app-text";
import AppButton from "../../components/app-button";
import RoundProfile from "../../components/roundProfile";
import colors from "../../utils/colors";
import { styles } from "./search-css";
export default function search() {
  const [filterlist, setFilterList] = useState([
    "Celebreties",
    "Influencers",
    "Movies",
    "Music",
  ]);
  const [selectedFilter, setSelectedFilter] = useState("Celebreties");
  return (
    <Layout headerShown={true}>
      <ScrollView
        showsHorizontalScrollIndicator={false}
        horizontal={true}
        style={styles.main}
      >
        <View style={styles.filtersRow}>
          {filterlist.map((item, index) => (
            <AppButton
              key={index}
              onPress={() => setSelectedFilter(item)}
              title={item}
              style={{
                button: {
                  ...styles.filterbutton,

                  backgroundColor:
                    selectedFilter != item ? colors.white : colors.secondary,
                  borderWidth: selectedFilter != item ? 1 : 0,
                },
                label: {
                  fontSize: 10,
                  color: selectedFilter != item ? colors.black : colors.white,
                },
              }}
            />
          ))}
        </View>
      </ScrollView>
      <View style={{ flex: 18 }}>
        <FlatList
          data={[0, 1, 2, 3, 4]}
          renderItem={({ item }) => (
            <View style={styles.grid}>
              <View style={styles.roundImageContainer}>
                <RoundProfile
                  style={{
                    main: styles.roundImageview,
                    image: styles.roundImage,
                  }}
                />
                <View style={styles.roundImageTextView}>
                  <AppText style={styles.roundImageText}>
                    @Kim kahdashian
                  </AppText>
                  <Image
                    style={{ marginLeft: 2 }}
                    resizeMode="contain"
                    source={require("../../assets/images/instaVerify.png")}
                  />
                </View>
              </View>
              <View style={styles.sideImageView}>
                <Image
                  style={styles.sideImage}
                  resizeMode="cover"
                  source={require("../../assets/images/wolverine.webp")}
                />
              </View>
              <View style={styles.sideImageView}>
                <Image
                  style={styles.sideImage}
                  resizeMode="stretch"
                  source={require("../../assets/images/girl.png")}
                />
              </View>
            </View>
          )}
          keyExtractor={(item, index) => index}
        />
      </View>
    </Layout>
  );
}
