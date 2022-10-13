import React, { useState } from "react";
import { View } from "react-native";
import ToggleSwitch from "toggle-switch-react-native";
import colors from "../utils/colors";
const Switch = ({ onToggle, id }) => {
  const [toggle, setToggle] = useState(false);
  return (
    <ToggleSwitch
      isOn={toggle}
      onColor={colors.greenShade}
      offColor={colors.silverShade}
      label=""
      labelStyle={{ color: "black", fontWeight: "900" }}
      size="smalls"
      onToggle={(isOn) => setToggle(isOn)}
    />
  );
};
export default Switch;
