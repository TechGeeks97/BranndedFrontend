import { StyleSheet } from "react-native";
import colors from "../../utils/colors";
export const styles = StyleSheet.create({
  main: {
    flexDirection: "row",
    borderBottomWidth: 0.4,
    paddingBottom: 5,
    marginBottom: 30,
  },
  headerCenterContent: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "65%",
    alignItems: "center",
    marginTop: 5,
    marginLeft: 10,
  },
  headerText: {
    color: colors.black,
    fontWeight: "bold",
  },
  title: {
    color: colors.black,
    fontWeight: "bold",
  },
  cardOptions: {
    width: "100%",
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors.silverShade2,
    borderBottomWidth: 0.5,
  },
  roundImageContainer: {
    width: "100%",
    height: 70,

    flexDirection: "row",
  },
  roundImageview: {
    height: 65,
    width: 65,
    borderRadius: 120,
  },
  roundImage: {
    height: 55,
    width: 55,
  },
  roundImageText1: {
    color: colors.black,
    marginTop: 13,
    fontWeight: "bold",
    marginLeft: 4,
    fontSize: 12,
  },
  roundImageText2: {
    color: colors.greyShade,
    marginTop: 13,

    marginLeft: 4,
    fontSize: 12,
  },
});
