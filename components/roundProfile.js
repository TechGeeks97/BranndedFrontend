import { View, StyleSheet, Image } from "react-native";
import colors from "../utils/colors";
const RoundProfile = ({ image, style }) => {
  return (
    <View style={[styles.main, style && style.main]}>
      <Image
        style={[styles.image, style && style.image]}
        source={image || require("../assets/images/profile.png")}
        resizeMode="contain"
      />
    </View>
  );
};
const styles = StyleSheet.create({
  main: {
    height: 50,
    width: 50,
    borderRadius: 50,
    borderWidth: 1,
    justifyContent: "center",
    alignItems: "center",
    borderColor: colors.blueShade1,
  },
  image: {
    height: 38,
    width: 38,
  },
});
export default RoundProfile;
