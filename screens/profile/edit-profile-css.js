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
    marginTop: 15,
    marginLeft: 10,
  },
  headerText: {
    color: colors.black,
    fontWeight: "bold",
  },
  title: {
    color: colors.black,
    fontWeight: "bold",
    marginLeft: 10,
  },
  cardOptions: {
    width: "100%",
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors.silverShade2,
    borderBottomWidth: 0.5,
  },
  settingList: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 10,
    backgroundColor: colors.white,
    paddingVertical: 10,
    height: 50,
  },
  saveButton: {
    marginTop: "20%",
    backgroundColor: colors.white,
    justifyContent: "center",
    alignItems: "center",
    height: 50,
  },
  horizontalSpaceBetween: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
  },
});
