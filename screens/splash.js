import React, { useEffect } from "react";
import { StyleSheet, View, Image } from "react-native";

import colors from "../utils/colors";
import { getUser } from "../services/user";
function SplashScreen({ navigation }) {
  const fetchUser = async () => {
    let user = await getUser();

    setTimeout(async () => {
      !user ? navigation.replace("Auth") : navigation.replace("HomeStack");
    }, 1000);
  };
  useEffect(() => {
    fetchUser();
  }, []);

  return (
    <View style={styles.main}>
      <View style={styles.topView}>
        <Image
          source={require("../assets/images/logoIcon.png")}
          style={styles.image}
          resizeMode="contain"
        />
      </View>
      <View style={styles.endView}>
        <Image source={require("../assets/images/BRANNDET.png")} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  main: {
    flex: 1,

    alignItems: "center",
    backgroundColor: colors.primary,
  },
  image: {
    height: 70,
    width: 70,
  },
  topView: {
    flex: 0.5,
    justifyContent: "flex-end",
  },
  endView: {
    flex: 0.5,

    justifyContent: "flex-end",
    paddingVertical: 20,
  },
});

export default SplashScreen;
