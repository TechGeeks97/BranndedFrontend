import { createStackNavigator } from "@react-navigation/stack";
import Search from "../screens/search/search";
const Stack = createStackNavigator();

const HomeStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Search" component={Search} />
    </Stack.Navigator>
  );
};
export default HomeStack;
