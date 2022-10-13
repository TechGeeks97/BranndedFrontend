import { StyleSheet } from "react-native";
import colors from "../../utils/colors";
export const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: colors.primary,
  },
  header: {
    flexDirection: "row",
    height: 70,
    // backgroundColor: "red",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 10,
  },
  secondRow: {
    borderTopWidth: 0.3,
    borderBottomWidth: 0.3,
    paddingVertical: 10,
    paddingLeft: 10,
  },
  firstRoundCircle: {
    zIndex: 1,
    height: 20,
    width: 20,
    borderRadius: 20,
    borderWidth: 1,
    justifyContent: "center",
    alignItems: "center",
    borderColor: colors.white,
    position: "absolute",
    alignSelf: "flex-end",
    bottom: 7,
    right: -8,
  },
  innerRoundCircle: {
    height: 15,
    width: 15,
    borderRadius: 15,

    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors.blueShade1,
  },
});
