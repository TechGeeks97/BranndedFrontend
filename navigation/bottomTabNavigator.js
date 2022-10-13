import { View } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import FA from "react-native-vector-icons/FontAwesome";
import HomeStack from "./home-route";
import ProfileStack from "./profile-route";
import SearchStack from "./search-route";
import ChatStack from "./chat-route";
import CustomTabBar from "../components/customBottomTab";

const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator
      tabBar={(props) => <CustomTabBar {...props} />}
      initialRouteName="HomeScreen"
      screenOptions={{
        headerShown: false,
      }}
    >
      <Tab.Screen
        options={{
          tabBarLabel: "Home",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="home" color={color} size={size} />
          ),
        }}
        name="HomeScreen"
        component={HomeStack}
      />
      <Tab.Screen
        options={{
          tabBarLabel: "Search",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="magnify" color={color} size={size} />
          ),
        }}
        name="Search"
        component={SearchStack}
      />
      <Tab.Screen
        options={{
          tabBarShowLabel: false,
          tabBarLabel: "Chat",
          tabBarIcon: ({ color, size }) => (
            <View style={{ height: 30, width: 30, borderWidth: 1 }}>
              <MaterialCommunityIcons
                name="chat-processing"
                color={color}
                size={size}
              />
            </View>
          ),
        }}
        name="ChatList"
        component={ChatStack}
      />
      <Tab.Screen
        options={{
          tabBarLabel: "Home",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="camera" color={color} size={size} />
          ),
        }}
        name="camera"
        component={HomeStack}
      />
      <Tab.Screen
        options={{
          tabBarLabel: "Profile",
          tabBarIcon: ({ color, size }) => (
            <FA name="user" color={color} size={size} />
          ),
        }}
        name="Profile"
        component={ProfileStack}
      />
    </Tab.Navigator>
  );
}
export default MyTabs;
