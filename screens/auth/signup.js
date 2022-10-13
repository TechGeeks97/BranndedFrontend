import React, { useState, useRef } from "react";
import {
  View,
  TouchableOpacity,
  Image,
  ScrollView,
  Dimensions,
  Text,
  ActivityIndicator,
} from "react-native";

import Layout from "../../components/layout";
import AppText from "../../components/app-text";
import AppTextInput from "../../components/app-textInput";
import AppButton from "../../components/app-button";
import {
  CodeField,
  Cursor,
  useBlurOnFulfill,
  useClearByFocusCell,
} from "react-native-confirmation-code-field";
import { styles } from "./signup-css";
import AuthHook from "../../customHooks/Auth/auth";
import { validateLogin } from "./validate";
import colors from "../../utils/colors";
const height = Dimensions.get("screen").height;
const Signup = ({ navigation }) => {
  const ref = useBlurOnFulfill({ value, cellCount: CELL_COUNT });
  const { sendOtp, loading, signup } = AuthHook(navigation);
  const [signupSchema, setSignupSchema] = useState({
    username: "",
    phoneNumber: "",
    email: "",
    password: "",
  });
  const [error, setError] = useState({
    username: "",
    phoneNumber: "",
    email: "",
    password: "",
  });
  const CELL_COUNT = 5;
  const [showCodeField, setShowCodeField] = useState(false);
  const [passwordHide, setPasswordHide] = useState(true);
  const [value, setValue] = useState("");
  const [activeScreen, setActiveScreen] = useState("withEmail");
  const [propsOtp, getCellOnLayoutHandler] = useClearByFocusCell({
    value,
    setValue,
  });
  const changeSignupMethod = () => {
    if (activeScreen != "withEmail") {
      setActiveScreen("withEmail");
      setShowCodeField(false);
    } else {
      setActiveScreen("withPhone");
    }
  };
  const handleValidation = async () => {
    let schema = { ...signupSchema };
    console.log("active screen", activeScreen);
    activeScreen == "withEmail"
      ? delete schema["phoneNumber"]
      : delete schema["email"];
    let errors = validateLogin(schema);
    if (Object.keys(errors).length > 0) {
      setError(errors);
    } else {
      console.log("value", value);
      if (activeScreen == "withEmail" || showCodeField) {
        let body =
          activeScreen == "withEmail" ? schema : { ...schema, code: value };
        await signup(body, navigation);
      } else {
        await sendOtp({ ...schema, code: value });
        setShowCodeField(true);
      }
    }
    console.log("schema", errors);
  };
  const onChangeText = (value, name) => {
    setSignupSchema({ ...signupSchema, [name]: value });
  };
  return (
    <Layout headerShown={true}>
      <ScrollView style={{ backgroundColor: colors.primary }}>
        <View style={styles.main}>
          <AppText style={styles.title}>Create an account</AppText>
          <Image
            source={require("../../assets/images/logo2.jpeg")}
            style={styles.logoImage}
            resizeMode="contain"
          />
          {showCodeField && (
            <CodeField
              ref={ref}
              {...propsOtp}
              // Use `caretHidden={false}` when users can't paste a text value, because context menu doesn't appear
              value={value}
              onChangeText={setValue}
              cellCount={CELL_COUNT}
              rootStyle={styles.codeFieldRoot}
              keyboardType="number-pad"
              textContentType="oneTimeCode"
              renderCell={({ index, symbol, isFocused }) => (
                <View
                  onLayout={getCellOnLayoutHandler(index)}
                  key={index}
                  style={[styles.cellRoot, isFocused && styles.focusCell]}
                >
                  <Text style={styles.cellText}>
                    {symbol || (isFocused ? <Cursor /> : null)}
                  </Text>
                </View>
              )}
            />
          )}
          <View style={styles.textInputContainer}>
            {!showCodeField && (
              <>
                <AppTextInput
                  error={error?.username}
                  value={signupSchema.username}
                  onChangeText={(e) => onChangeText(e, "username")}
                  label="Email"
                  placeholder="Username"
                  name="check"
                />
                <AppTextInput
                  error={
                    activeScreen == "withEmail"
                      ? error?.email
                      : error?.phoneNumber
                  }
                  value={
                    activeScreen == "withEmail"
                      ? signupSchema.email
                      : signupSchema.phoneNumber
                  }
                  onChangeText={(e) =>
                    onChangeText(
                      e,
                      activeScreen == "withEmail" ? "email" : "phoneNumber"
                    )
                  }
                  label={activeScreen != "withEmail" ? "phone number" : "Email"}
                  name="check"
                  placeholder={
                    activeScreen != "withEmail"
                      ? "+1(34) 567 890"
                      : "you@example.com"
                  }
                />
                <AppTextInput
                  name={passwordHide ? "eye-with-line" : "eye"}
                  setPasswordHide={() => setPasswordHide(!passwordHide)}
                  label="Password"
                  secureTextEntry={passwordHide}
                  error={error?.password}
                  value={signupSchema.password}
                  onChangeText={(e, name) => onChangeText(e, "password")}
                  placeholder="password"
                />
              </>
            )}
            {!loading ? (
              <AppButton
                style={{
                  button: styles.button,
                }}
                title={
                  activeScreen != "withEmail" && !showCodeField
                    ? "Send code"
                    : "Signup"
                }
                onPress={() => handleValidation()}
              />
            ) : (
              <ActivityIndicator color={colors.secondary} size="large" />
            )}
            <AppText style={[styles.title, { marginLeft: 0 }]}>OR</AppText>
            <TouchableOpacity onPress={() => changeSignupMethod()}>
              <AppText
                style={[styles.title, { marginLeft: 0, marginTop: "12%" }]}
              >
                {activeScreen != "withEmail"
                  ? "Sign up with email"
                  : "Sign up with phone number"}
              </AppText>
            </TouchableOpacity>
          </View>
        </View>

        <View
          style={[
            styles.lastRow,
            {
              height: height * 0.24,
            },
          ]}
        >
          <AppText style={styles.lastRowText}>
            You already have an account?Log in
          </AppText>
        </View>
      </ScrollView>
    </Layout>
  );
};
export default Signup;
