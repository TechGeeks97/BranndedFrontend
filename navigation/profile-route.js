import { createStackNavigator } from "@react-navigation/stack";
import Profile from "../screens/profile/profile";
import EditProfile from "../screens/profile/edit-profile";
import ProfileSetting from "../screens/profile/profile-settings";
import AccountDetail from "../screens/profile/account-detail";
const Stack = createStackNavigator();

const ProfileStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Profile" component={Profile} />
      <Stack.Screen name="EditProfile" component={EditProfile} />
      <Stack.Screen name="ProfileSetting" component={ProfileSetting} />
      <Stack.Screen name="AccountDetail" component={AccountDetail} />
    </Stack.Navigator>
  );
};
export default ProfileStack;
