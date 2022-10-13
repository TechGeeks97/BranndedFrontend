import AsyncStorage from "@react-native-async-storage/async-storage";
const setUser = async (info) => {
  let user = await AsyncStorage.setItem("user", JSON.stringify(info));

  return user;
};
const removeToken = async () => {
  let user = await AsyncStorage.removeItem("user");
  return user;
};
const getUser = async () => {
  let user = await AsyncStorage.getItem("user");

  return user ? JSON.parse(user) : null;
};

export { setUser, getUser, removeToken };
