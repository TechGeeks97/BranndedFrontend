import React from "react";
import { View, FlatList, Image } from "react-native";
import colors from "../../utils/colors";
import Icon from "react-native-vector-icons/Entypo";
import Layout from "../../components/layout";
import AppText from "../../components/app-text";
import RoundProfile from "../../components/roundProfile";
import FacePile from "../../components/facepile";
import { styles } from "./home-css";
import BottomSheet from "../../components/bottom-sheet";
export default function home() {
  return (
    <Layout>
      <View style={styles.main}>
        <View style={styles.header}>
          <Icon name="camera" size={35} color={colors.greyShade} />
          <Image
            source={require("../../assets/images/BRANNDET.png")}
            resizeMode="contain"
          />
          <Image
            source={require("../../assets/images/menu1.png")}
            resizeMode="contain"
          />
        </View>

        <View style={styles.secondRow}>
          <View>
            <FlatList
              showsHorizontalScrollIndicator={false}
              horizontal
              data={[1, 2, 3, 4, 5, 6, 7, 8]}
              renderItem={({ item, index }) => {
                return (
                  <View style={{ marginRight: 8 }}>
                    {index == 0 && (
                      <View style={styles.firstRoundCircle}>
                        <View style={styles.innerRoundCircle}>
                          <Icon name="plus" size={14} color={colors.white} />
                        </View>
                      </View>
                    )}
                    <RoundProfile />
                  </View>
                );
              }}
              keyExtractor={(item, index) => index}
            />
          </View>
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            paddingHorizontal: 10,
            alignItems: "center",
            marginTop: 10,
          }}
        >
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <RoundProfile />
            <AppText
              style={{ marginLeft: 4, fontWeight: "bold", color: colors.black }}
            >
              JsenTech
            </AppText>
          </View>
          <Icon name="dots-three-vertical" size={20} />
        </View>
        <Image
          style={{ height: 350, width: "100%", marginTop: 10 }}
          source={require("../../assets/images/wolverine.webp")}
        />
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            padding: 10,
          }}
        >
          <Image source={require("../../assets/images/rectangleLeft.png")} />
          <Image source={require("../../assets/images/rectangleRight.png")} />
        </View>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            paddingHorizontal: 10,
          }}
        >
          <FacePile />

          <View style={{ marginLeft: 20 }}>
            <AppText>
              viewed by
              <AppText>
                <AppText
                  style={{
                    fontWeight: "bold",
                    color: colors.black,
                    fontSize: 12,
                  }}
                >
                  {" "}
                  Ahmed,
                </AppText>
                <AppText
                  style={{
                    fontWeight: "bold",
                    color: colors.black,
                    fontSize: 12,
                  }}
                >
                  Ali{" "}
                </AppText>
              </AppText>
              and{" "}
              <AppText
                style={{
                  fontWeight: "bold",
                  color: colors.black,
                  fontSize: 12,
                }}
              >
                others
              </AppText>
            </AppText>
          </View>
        </View>
        <AppText style={{ paddingHorizontal: 10, marginTop: 8, fontSize: 12 }}>
          September 14
        </AppText>
        {/* <BottomSheet /> */}
      </View>
    </Layout>
  );
}
