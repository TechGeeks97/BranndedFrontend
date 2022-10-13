import { StyleSheet } from "react-native";
import colors from "../../utils/colors";
export const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    paddingRight: 10,
    justifyContent: "space-between",
    paddingBottom: 1,
    borderBottomWidth: 0.5,
    alignItems: "center",
    marginBottom: 10,
  },
  profileHeader: {
    flexDirection: "row",
    alignItems: "center",
    paddingLeft: 10,
    marginBottom: 30,
  },
  firstText: {
    fontSize: 11,
    color: colors.black,
    textAlign: "center",
  },
  secondText: {
    fontSize: 11,
    color: colors.black,
  },
  button: {
    height: 21,
    width: "23%",
    borderRadius: 6,
    marginHorizontal: 10,
  },
  textButtonView: {
    flexDirection: "row",
    marginTop: 30,
    width: "100%",
    alignItems: "center",
  },
  roundImageContainer: {
    // width: "28.8%",
    alignItems: "center",
    flexDirection: "column-reverse",
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
  roundImageTextView: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 5,
  },
  roundImageText: {
    fontSize: 10,
    fontWeight: "bold",
    color: colors.black,
  },
});
