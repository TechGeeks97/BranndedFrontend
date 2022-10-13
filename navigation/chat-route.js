import { createStackNavigator } from "@react-navigation/stack";
import ChatList from "../screens/chat/chatList";
import Chat from "../screens/chat/individual-chat";
const Stack = createStackNavigator();

const ChatListStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="ChatList" component={ChatList} />
      <Stack.Screen name="Chat" component={Chat} />
    </Stack.Navigator>
  );
};
export default ChatListStack;
