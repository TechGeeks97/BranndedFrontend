import React from "react";
import { View, Text, Dimensions } from "react-native";
import { LineChart } from "react-native-chart-kit";
import colors from "../utils/colors";
const Chart = ({ data }) => {
  return (
    <View style={{ overflow: "hidden" }}>
      <LineChart
        // fromZero
        // fromNumber
        // fromNumber={-200}
        data={{
          // labels: ['January', 'February', 'Marc],
          datasets: [
            {
              data,
            },
          ],
        }}
        width={Dimensions.get("screen").width * 0.9} // from react-native
        height={200}
        // yAxisLabel="$"
        // yAxisSuffix="k"

        // yAxisInterval={-10} // optional, defaults to 1
        withDots={false}
        withShadow={false}
        withVerticalLines={false}
        withVerticalLabels={false}
        withInnerLines={false}
        chartConfig={{
          // decimalPlaces: 2,
          // backgroundGradientFromOpacity: 0,
          // backgroundGradientToOpacity: 0,
          backgroundGradientFrom: "#1E2923",
          backgroundGradientFromOpacity: 0,
          // backgroundGradientTo: "#08130D",
          backgroundGradientToOpacity: 0,
          color: (opacity = 1) => colors.greyShade,
          strokeWidth: 0.8, // optional, default 3
          barPercentage: 1,
          propsForDots: {
            r: "6",
            strokeWidth: "2",
          },

          useShadowColorFromDataset: false,
          style: { borderRadius: 106 },
        }}
        bezier
        style={{
          backgroundColor: "transparent",
          marginVertical: 8,
          borderRadius: 16,
          overflow: "hidden",
          paddingRight: 0,
          // backgroundColor: 'green',
        }}
      />
    </View>
  );
};
export default Chart;
