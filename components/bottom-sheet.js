import React, { useRef, useState } from "react";
import { View, Button } from "react-native";
import RBSheet from "react-native-raw-bottom-sheet";
import AppText from "./app-text";
import AppButton from "./app-button";
import colors from "../utils/colors";
export default function Example() {
  const refRBSheet = useRef();
  React.useEffect(() => {
    refRBSheet.current.open();
  }, []);
  const [option, setOptions] = useState([
    "More",
    "Hide",
    "Report Post",
    "Share Post",
    "Delete Post",
  ]);
  return (
    <RBSheet
      ref={refRBSheet}
      closeOnDragDown={true}
      closeOnPressMask={false}
      height={400}
      customStyles={{
        wrapper: {
          height: 300,
          width: "100%",
          //   backgroundColor: "#000",
          overflow: "hidden",
        },
        draggableIcon: {
          //   display: "none",
          backgroundColor: colors.primary,
          borderRadius: 100,
          overflow: "hidden",
        },
      }}
    >
      <View
        style={{
          flex: 1,
          paddingHorizontal: 10,
          backgroundColor: colors.white,
          borderRadius: 10,
        }}
      >
        {option.map((item, index) => (
          <View
            style={{
              padding: 20,
              borderTopWidth: index > 0 && 0.3,
              justifyContent: "center",
              alignItems: "center",
            }}
            key={item}
          >
            <AppText>{item}</AppText>
          </View>
        ))}
        <AppButton
          style={{
            button: {
              height: 50,
            },
          }}
          title={"Cancel"}
        />
      </View>
    </RBSheet>
  );
}
