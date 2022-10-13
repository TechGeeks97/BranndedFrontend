import { StyleSheet } from "react-native";
import colors from "../../utils/colors";
export const styles = StyleSheet.create({
  main: {
    flex: 1,
    paddingTop: 15,
    paddingHorizontal: 25,
  },
  title: {
    fontWeight: "bold",
    fontSize: 19,
    marginBottom: 15,
  },
  horionztalView: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  price: {
    fontWeight: "bold",
    fontSize: 19,
  },
  todayText: {
    marginLeft: 5,
    fontSize: 10,
    color: colors.greyShade,
    fontWeight: "bold",
  },
  smallBoldText: {
    fontWeight: "bold",
    fontSize: 12,
    marginBottom: 15,
  },
  leftIconStyle: {
    flexDirection: "row",
    alignItems: "center",
  },
  pieLeftContainer: {
    width: "21%",
    height: "60%",
    backgroundColor: colors.lightPurple,
    borderRadius: 6,
    // marginTop: 4,
    marginRight: 5,
  },
  backgroundText: {
    fontWeight: "bold",
    fontSize: 14,
    textAlign: "center",
  },
  filtersView: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
  },
  filterviewBottom: {
    borderBottomWidth: 0.5,
    borderBottomColor: colors.silverShade,
    paddingBottom: 5,
    marginBottom: 10,
  },
  activeBox: {
    backgroundColor: colors.lightPurple,
    paddingHorizontal: 3,
    paddingVertical: 1.8,
    borderRadius: 7,
    width: "11%",
    // height: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  inActivebox: {
    width: "12%",

    justifyContent: "center",
    alignItems: "center",
  },
  activeFilterText: {
    fontSize: 10,
    color: colors.darkBlue,
    fontWeight: "bold",
  },
  buttonView: {
    height: 20,
    width: "20%",
    backgroundColor: colors.silverShade,
    borderRadius: 10,
    paddingHorizontal: 5,
    justifyContent: "center",
  },
  leftButtonStyle: {
    color: colors.black,
    marginRight: 3,
    fontSize: 19,
  },
  circle: {
    height: 25,
    width: 25,
    borderRadius: 30,
    borderWidth: 0.5,
    marginRight: 1,
  },
  valueText1: {
    fontSize: 10,
    textAlign: "right",
    color: "black",
    fontWeight: "bold",
  },
  valueText2: {
    color: colors.red,
    fontWeight: "bold",
    fontSize: 10,
    textAlign: "right",
  },
});
