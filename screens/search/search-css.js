import { StyleSheet } from "react-native";
import colors from "../../utils/colors";
export const styles = StyleSheet.create({
  main: {
    flex: 0.5,
    marginBottom: 4,
    borderBottomWidth: 0.5,
  },
  filtersRow: {
    marginTop: 10,
    paddingLeft: 35,
    flexDirection: "row",
  },
  filterbutton: {
    width: 70,
    //   padding: 5,
    height: 20,
    marginRight: 10,
  },
  grid: {
    flexDirection: "row",
    marginBottom: 2.5,
    justifyContent: "space-between",
    alignItems: "center",
  },
  roundImageContainer: {
    width: "32.8%",
    alignItems: "center",
  },
  roundImageview: {
    height: 90,
    width: 90,
    borderRadius: 120,
  },
  roundImage: {
    height: 80,
    width: 80,
  },
  roundImageTextView: {
    flexDirection: "row",
    alignItems: "center",
  },
  roundImageText: {
    fontSize: 10,
    fontWeight: "bold",
    color: colors.black,
  },
  sideImageView: {
    width: "32.8%",

    height: 130,
  },
  sideImage: {
    height: "100%",
    width: "100%",
  },
});
