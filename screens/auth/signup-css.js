import { StyleSheet } from "react-native";
import colors from "../../utils/colors";
export const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: colors.primary,
  },
  logoImage: {
    height: 80,
    width: 230,
    alignSelf: "center",
    marginTop: 10,
  },
  textInputContainer: {
    alignItems: "center",
    marginTop: 40,
  },
  button: {
    width: "35%",
    height: 38,
    borderRadius: 10,
    marginTop: "18%",
    marginBottom: "8%",
  },
  title: {
    fontSize: 18,
    color: colors.black,
    fontWeight: "bold",
    marginVertical: 5,
    marginLeft: 30,
  },
  navLinkRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "60%",
    marginBottom: 40,

    // marginTop: 5,
  },
  navLink: {
    color: colors.purpleShade1,
    fontSize: 9,
    // fontWeight: "bold",
  },
  root: { flex: 1 },
  // title: { textAlign: "center", fontSize: 30 },
  codeFieldRoot: {
    marginVertical: 30,

    width: "67%",
    alignSelf: "center",
  },
  cell: {
    width: 10,
    height: 10,
    lineHeight: 38,
    fontSize: 24,
    // borderWidth: 1,
    backgroundColor: colors.blueShade1,
    // borderColor: "#00000030",
    textAlign: "center",
  },
  focusCell: {
    borderColor: "#000",
  },

  cellRoot: {
    backgroundColor: colors.whiteSilver,
    // lineHeight: 38,
    borderBottomColor: colors.black,
    height: 35,
    width: 35,
    borderWidth: 0.17,
    borderColor: colors.silverShade,

    // borderWidth: 2,
    // borderColor: "#00000030",
    shadowColor: colors.wh,
    shadowOffset: { width: 1, height: 1 },
    shadowOpacity: 0.5,
    shadowRadius: 2,
    textAlign: "center",
  },
  cellText: {
    fontSize: 24,
    textAlign: "center",
    color: "black",
    fontWeight: "bold",
  },
  lastRow: {
    justifyContent: "flex-end",
    alignItems: "center",
  },
  lastRowText: {
    fontSize: 11,
    color: colors.black,
  },
});
