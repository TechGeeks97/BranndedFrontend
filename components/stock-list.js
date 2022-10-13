import { View } from "react-native";
import { styles } from "../screens/home/stockscreenCss";
import AppText from "./app-text";
import LeftIconText from "./leftIcon-Text";
import colors from "../utils/colors";
const List = ({ item }) => {
  return (
    <View style={[styles.horionztalView, { marginBottom: 10 }]}>
      <View style={styles.horionztalView}>
        <View style={styles.circle} />
        <View>
          <AppText style={[styles.todayText, { color: "black" }]}>
            {item.product.label}
          </AppText>
          <AppText style={styles.todayText}>{item.product.units} units</AppText>
        </View>
      </View>
      <View>
        <AppText style={styles.valueText1}>{item.value.price}</AppText>
        <LeftIconText
          name={item.value.negative ? "caretdown" : "caretup"}
          size={12}
          style={[
            styles.leftButtonStyle,
            styles.valueText2,
            !item.value.negative && { color: colors.greenShade },
          ]}
          text={item.value.percent}
        />
      </View>
      <View>
        <AppText style={styles.valueText1}>$19,198198</AppText>
        <LeftIconText
          name={item.value.negative ? "caretdown" : "caretup"}
          size={12}
          style={[
            styles.leftButtonStyle,
            styles.valueText2,
            !item.value.negative && { color: colors.greenShade },
          ]}
          text="2.35566%"
        />
      </View>
    </View>
  );
};
export default List;
