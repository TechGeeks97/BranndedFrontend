import React, { useState } from "react";
import { View, FlatList, TouchableOpacity } from "react-native";

import AppText from "../../components/app-text";
import Chart from "../../components/chart";
import LeftIconText from "../../components/leftIcon-Text";
import colors from "../../utils/colors";
import Layout from "../../components/layout";
import { styles } from "./stockscreenCss";
import StockList from "../../components/stock-list";
const StockRating = () => {
  const [data, setData] = useState([0, 50, 100, 0, 200, 0]);
  const filters = ["1D", "1W", "1M", "3M", "1Y", "YTD", "All"];
  const [activeFilter, setActiveFilter] = useState("1D");
  const pousList = {
    "1D": [
      {
        value: {
          price: "$19,8288282",
          percent: "2.57667%",
          negative: true,
        },
        reveue: {
          price: "$19,8288282",
          percent: "2.57667%",
          negative: true,
        },
        product: {
          label: "Glassmark",
          units: "4",
        },
      },
      {
        value: {
          price: "$19,8288282",
          percent: "2.57667%",
          negative: true,
        },
        reveue: {
          price: "$19,8288282",
          percent: "2.57667%",
          negative: true,
        },
        product: {
          label: "Glassmark",
          units: "4",
        },
      },
      {
        value: {
          price: "$19,8288282",
          percent: "2.57667%",
          negative: false,
        },
        reveue: {
          price: "$19,8288282",
          percent: "2.57667%",
          negative: false,
        },
        product: {
          label: "Glassmark",
          units: "4",
        },
      },
    ],
    All: [
      {
        value: {
          price: "$19,8288282",
          percent: "2.57667%",
          negative: false,
        },
        reveue: {
          price: "$19,8288282",
          percent: "2.57667%",
          negative: false,
        },
        product: {
          label: "Glassmark",
          units: "4",
        },
      },
      {
        value: {
          price: "$19,8288282",
          percent: "2.57667%",
          negative: false,
        },
        reveue: {
          price: "$19,8288282",
          percent: "2.57667%",
          negative: false,
        },
        product: {
          label: "Glassmark",
          units: "4",
        },
      },
      {
        value: {
          price: "$19,8288282",
          percent: "2.57667%",
          negative: false,
        },
        reveue: {
          price: "$19,8288282",
          percent: "2.57667%",
          negative: false,
        },
        product: {
          label: "Glassmark",
          units: "4",
        },
      },
    ],
  };
  const [filterPoudList, setFilterPoudList] = useState(pousList[activeFilter]);
  const watchList = [
    {
      value: {
        price: "$19,8288282",
        percent: "2.57667%",
        negative: false,
      },
      reveue: {
        price: "$19,8288282",
        percent: "2.57667%",
        negative: true,
      },
      product: {
        label: "Glassmark",
        units: "4",
      },
    },
    {
      value: {
        price: "$19,8288282",
        percent: "2.57667%",
        negative: false,
      },
      reveue: {
        price: "$19,8288282",
        percent: "2.57667%",
        negative: false,
      },
      product: {
        label: "Glassmark",
        units: "4",
      },
    },
  ];
  const handleFilters = (item) => {
    setActiveFilter(item);
    switch (item) {
      case "1D":
        setFilterPoudList(pousList[item]);
        break;
      case "3M":
        setFilterPoudList(pousList["1D"]);
        break;

      case "YTD":
        setFilterPoudList(pousList["1D"]);
        break;
      case "1M":
        setFilterPoudList(pousList["1D"]);
        break;
      default:
        setFilterPoudList(pousList["All"]);
    }
  };
  return (
    <Layout style={styles.main}>
      <AppText style={styles.title}>Portfolio</AppText>
      <View style={styles.horionztalView}>
        <View>
          <AppText style={{ fontSize: 11 }}>Asset Value</AppText>
          <AppText style={styles.price}>$10,535.92</AppText>
          <View style={styles.leftIconStyle}>
            <LeftIconText
              name="caretup"
              size={12}
              style={{ color: colors.greenShade, marginRight: 3 }}
              text="$42.93 (14.15%)"
            />
            <AppText style={styles.todayText}>Today</AppText>
          </View>
        </View>

        <View>
          <AppText style={{ fontSize: 11, textAlign: "right" }}>
            Revenue
          </AppText>
          <AppText style={[styles.price, { textAlign: "right" }]}>
            $403.28
          </AppText>
          <View style={styles.leftIconStyle}>
            <LeftIconText
              name="caretup"
              size={12}
              style={{ color: colors.greenShade, marginRight: 3 }}
              text="$42.93 (14.15%)"
            />
            <AppText style={styles.todayText}>Today</AppText>
          </View>
        </View>
      </View>
      <View style={styles.horionztalView}>
        <AppText style={styles.smallBoldText}>Price Chart</AppText>
        <View
          style={{
            flexDirection: "row",
            // backgroundColor: 'green',
            justifyContent: "flex-end",
          }}
        >
          <View style={styles.pieLeftContainer}>
            <AppText style={styles.backgroundText}>P</AppText>
          </View>
          <AppText style={{ fontWeight: "bold", fontSize: 16 }}>R</AppText>
        </View>
      </View>
      <Chart data={data} />
      <View style={[styles.filtersView, styles.filterviewBottom]}>
        {filters.map((item) => (
          <TouchableOpacity
            onPress={() => handleFilters(item)}
            style={activeFilter == item ? styles.activeBox : styles.inActivebox}
          >
            <AppText
              style={[
                styles.activeFilterText,
                activeFilter != item && { color: colors.greyShade },
              ]}
            >
              {item}
            </AppText>
          </TouchableOpacity>
        ))}
      </View>

      <View style={styles.filtersView}>
        <AppText style={styles.price}>POUs</AppText>
        <View style={styles.buttonView}>
          <LeftIconText
            name="caretup"
            size={12}
            style={{ fontSize: 12, margin: 2 }}
            text="Month"
          />
        </View>
      </View>

      <View style={[styles.filtersView, { marginBottom: 5 }]}>
        <View style={{ width: 30 }} />
        <View style={{ width: "30%" }}>
          <AppText
            style={{
              fontSize: 11,
              textAlign: "right",
            }}
          >
            Value
          </AppText>
        </View>
        <View style={{ width: "16%" }}>
          <AppText style={{ fontSize: 11, textAlign: "right" }}>
            Revenue
          </AppText>
        </View>
      </View>
      <FlatList
        data={filterPoudList}
        renderItem={({ item }) => <StockList item={item} />}
      />

      <View style={styles.filtersView}>
        <AppText style={styles.price}>Watchlist</AppText>
      </View>

      <View style={[styles.filtersView, { marginBottom: 5 }]}>
        <View style={{ width: 30 }} />
        <View style={{ width: "30%" }}>
          <AppText
            style={{
              fontSize: 11,
              textAlign: "right",
            }}
          >
            Value
          </AppText>
        </View>
        <View style={{ width: "16%" }}>
          <AppText style={{ fontSize: 11, textAlign: "right" }}>
            Revenue
          </AppText>
        </View>
      </View>
      <FlatList
        data={watchList}
        renderItem={({ item }) => <StockList item={item} />}
      />
    </Layout>
  );
};
export default StockRating;
