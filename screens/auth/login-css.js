import { StyleSheet } from "react-native";
import colors from "../../utils/colors";
export const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: colors.primary,
  },
  logo: {
    height: 80,
    width: 230,
    alignSelf: "center",
  },
  googleLogin: {
    height: 23,
    width: "27%",
    borderRadius: 10,
    borderWidth: 0.45,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  socialLoginImage: {
    height: 12,
    width: 12,
    marginRight: 5,
  },
  socialLoginText: {
    fontSize: 10,
    color: colors.blue,
    fontWeight: "bold",
  },
  textInputContainer: {
    alignItems: "center",
    marginTop: 40,
  },
  rememberMeView: {
    flexDirection: "row",
    alignItems: "center",
  },
  rememberMe: {},
  height: 10,
  width: 10,
  borderRadius: 20,
  marginRight: 7,
  // borderWidth: 0.5,
  backgroundColor: colors.silverShade,
  fbLogin: {
    height: 23,
    width: "27%",
    borderRadius: 10,
    borderWidth: 0.45,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    backgroundColor: colors.blueShade1,
    marginLeft: 15,
  },
  socialLoginRow: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 35,
  },
  fbtext: {
    fontSize: 10,
    color: colors.white,
    fontWeight: "bold",
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
  button: {
    width: "35%",
    height: 38,
    borderRadius: 10,
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
