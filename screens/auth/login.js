import React, { useState } from "react";
import {
  View,
  TouchableOpacity,
  Image,
  ScrollView,
  Dimensions,
  ActivityIndicator,
} from "react-native";
import Layout from "../../components/layout";
import AppText from "../../components/app-text";
import AppTextInput from "../../components/app-textInput";
import AppButton from "../../components/app-button";

import { styles } from "./login-css";
import AuthHook from "../../customHooks/Auth/auth";
import { validateLogin } from "./validate";
import colors from "../../utils/colors";
const height = Dimensions.get("screen").height;

const Login = ({ navigation }) => {
  const { login, loading } = AuthHook(navigation);
  const [loginSchema, setLoginSchema] = useState({
    username: "",
    password: "",
  });
  const [error, setError] = useState({
    username: "",
    password: "",
  });
  const [passwordHide, setPasswordHide] = useState(true);
  const handleValidation = () => {
    let errors = validateLogin(loginSchema);
    if (Object.keys(errors).length > 0) {
      setError(errors);
    } else {
      login(loginSchema, navigation);
    }
    console.log("schema", errors);
  };
  const onChangeText = (value, name) => {
    setLoginSchema({ ...loginSchema, [name]: value });
  };
  return (
    <Layout headerShown={true}>
      <ScrollView>
        <View style={styles.main}>
          <AppText style={styles.title}>Sign in</AppText>
          <Image
            source={require("../../assets/images/logo2.jpeg")}
            style={styles.logo}
            resizeMode="contain"
          />
          <View style={styles.socialLoginRow}>
            <TouchableOpacity style={styles.googleLogin}>
              <Image
                source={require("../../assets/images/google.png")}
                style={styles.socialLoginImage}
                resizeMode="contain"
              />
              <AppText style={styles.socialLoginText}>Google</AppText>
            </TouchableOpacity>
            <TouchableOpacity style={styles.fbLogin}>
              <Image
                source={require("../../assets/images/fb.png")}
                style={{ height: 12, width: 12, marginRight: 5 }}
                resizeMode="contain"
              />
              <AppText style={styles.fbtext}>Facebook</AppText>
            </TouchableOpacity>
          </View>
          <View style={styles.textInputContainer}>
            <AppTextInput
              error={error?.username}
              value={loginSchema.username}
              onChangeText={(e) => onChangeText(e, "username")}
              label="Username"
              placeholder="Username"
              name="check"
            />
            <AppTextInput
              error={error?.password}
              value={loginSchema.password}
              name={passwordHide ? "eye-with-line" : "eye"}
              setPasswordHide={() => setPasswordHide(!passwordHide)}
              label="Password"
              secureTextEntry={passwordHide}
              onChangeText={(e, name) => onChangeText(e, "password")}
              placeholder="password"
            />
            <View style={styles.navLinkRow}>
              <TouchableOpacity style={styles.rememberMeView}>
                <View style={styles.rememberMe} />
                <AppText style={styles.navLink}>Remember me</AppText>
              </TouchableOpacity>
              <TouchableOpacity>
                <AppText style={styles.navLink}>Forget Password?</AppText>
              </TouchableOpacity>
            </View>
            {!loading ? (
              <AppButton
                style={{ button: styles.button }}
                title={"Log In"}
                onPress={() => handleValidation()}
              />
            ) : (
              <ActivityIndicator color={colors.secondary} size="large" />
            )}
          </View>
        </View>

        <TouchableOpacity
          onPress={() => navigation.navigate("SignUp")}
          style={[
            styles.lastRow,
            {
              height: height * 0.4,
            },
          ]}
        >
          <AppText style={styles.lastRowText}>
            You don't have an account?Sign up
          </AppText>
        </TouchableOpacity>
      </ScrollView>
    </Layout>
  );
};
export default Login;
