import { createStackNavigator } from "@react-navigation/stack";
import SplashScreen from "../screens/splash";
import Login from "../screens/auth/login";
import Signup from "../screens/auth/signup";
const Stack = createStackNavigator();

const AuthStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="Login"
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="SignUp" component={Signup} />
    </Stack.Navigator>
  );
};
export default AuthStack;
