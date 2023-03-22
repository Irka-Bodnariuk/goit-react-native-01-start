import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import PostsScreen from "../mainScreen/PostsScreen";
import CreatePostsScreen from "../mainScreen/CreatePostsScreen";
import ProfileScreen from "../mainScreen/ProfileScreen";
import { Feather } from "@expo/vector-icons";
// import { Ionicons } from "@expo/vector-icons";
// import { MaterialIcons, SimpleLineIcons } from "@expo/vector-icons";

const Tabs = createBottomTabNavigator();

const Home = () => {
  return (
    <Tabs.Navigator
      screenOptions={{
        tabBarShowLabel: false,
      }} // прибрала написи
      // screenOptions={({ route }) => ({
      //   tabBarIcon: ({ focused, color, size }) => {
      //     let iconName;

      //     if (route.name === "PostsScreen") {
      //       iconName = focused ? "grid" : "grid";
      //     } else if (route.name === "CreatePostsScreen") {
      //       iconName = focused ? "plus" : "plus";
      //     } else if (route.name === "ProfileScreen") {
      //       iconName = focused ? "user" : "user";
      //     }
      //     return <Feather name={iconName} size={size} color={color} />;
      //   },
      // })}
      // tabBarOptions={{
      //   activeTintColor: "#FF6C00",
      //   inactiveTintColor: "#212121",
      // }}
    >
      <Tabs.Screen
        options={{
          tabBarIcon: ({ focused, size, color }) => (
            <Feather name="grid" size={size} color={color} />
          ),
        }}
        name="PostsScreen"
        component={PostsScreen}
      />
      <Tabs.Screen
        options={{
          tabBarIcon: ({ focused, size, color }) => (
            <View
            // style={{
            //   width: 70,
            //   height: 40,
            //   borderRadius: 100,
            //   backgroundColor: "#FF6C00",
            //   alignItems: "center",
            //   justifyContent: "center",
            // }}
            >
              <Feather name="plus" size={size} color={color} />
            </View>
          ),
        }}
        name="CreatePostsScreen"
        component={CreatePostsScreen}
      />
      <Tabs.Screen
        options={{
          tabBarIcon: ({ focused, size, color }) => (
            <Feather name="user" size={size} color={color} />
          ),
        }}
        name="ProfileScreen"
        component={ProfileScreen}
      />
    </Tabs.Navigator>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },
});
export default Home;

// options={{
//   title: "Публикации",
//   headerTitleAlign: "center",
//   headerStyle: {
//     borderBottomWidth: 1,
//     borderBottomColor: "rgba(0, 0, 0, 0.3)",
//   },
//   headerTintColor: "#212121",
//   headerTitleStyle: {
//     fontFamily: "Roboto-Medium",
//     fontSize: 17,
//   },
//   headerRight: () => (
//     <MaterialIcons
//       style={{ marginRight: 16 }}
//       onPress={() => alert("This is a button!")}
//       name="logout"
//       size={24}
//       color="#BDBDBD"
//     />
//   ),
// }}

{
  /*  Icons:

      <Feather name="map-pin" size={24} color="black" />;
      <Feather name="message-circle" size={24} color="black" />
      <Feather name="trash-2" size={24} color="black" />
      <Feather name="arrow-left" size={24} color="black" />
      <Feather name="thumbs-up" size={24} color="black" />
  */
}
