import React from "react";
import { StyleSheet } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import PostsScreen from "../screens/mainScreen/PostsScreen";
import CreatePostsScreen from "../screens/mainScreen/CreatePostsScreen";
import ProfileScreen from "../screens/mainScreen/ProfileScreen";
import { Feather } from "@expo/vector-icons";

const Tabs = createBottomTabNavigator();

const Home = ({ navigation }) => {
  return (
    <Tabs.Navigator screenOptions={{ tabBarShowLabel: false }}>
      <Tabs.Screen
        options={{
          title: "Публикации",
          headerTitleAlign: "center",
          headerStyle: {
            borderBottomWidth: 1,
            borderBottomColor: "rgba(0, 0, 0, 0.3)",
          },
          headerTintColor: "#212121",
          headerTitleStyle: {
            fontFamily: "Roboto-Medium",
            fontSize: 17,
          },
          headerRight: () => (
            <Feather
              style={{ marginRight: 16 }}
              name="log-out"
              size={24}
              color={"#BDBDBD"}
              onPress={() => navigation.navigate("Login")}
            />
          ),

          tabBarIcon: () => <Feather name="grid" size={24} color={"#212121"} />,
        }}
        name="PostsScreen"
        component={PostsScreen}
      />

      <Tabs.Screen
        options={{
          title: "Создать публикацию",
          headerTitleAlign: "center",
          headerStyle: {
            borderBottomWidth: 1,
            borderBottomColor: "rgba(0, 0, 0, 0.3)",
          },
          headerTintColor: "#212121",
          headerTitleStyle: {
            fontFamily: "Roboto-Medium",
            fontSize: 17,
          },
          headerLeft: () => (
            <Feather
              style={{ marginLeft: 16 }}
              name="arrow-left"
              size={24}
              color={"#BDBDBD"}
              onPress={() => navigation.navigate("Login")}
            />
          ),
          tabBarIcon: () => (
            <Feather
              style={{
                width: 70,
                height: 40,
                borderRadius: 100,
                backgroundColor: "#FF6C00",
                textAlign: "center",
                textAlignVertical: "center",
              }}
              name="plus"
              size={24}
              color={"#fff"}
            />
          ),
        }}
        name="CreatePostsScreen"
        component={CreatePostsScreen}
      />

      <Tabs.Screen
        options={{
          headerShown: false,
          tabBarIcon: () => <Feather name="user" size={24} color={"#212121"} />,
        }}
        name="ProfileScreen"
        component={ProfileScreen}
      />
    </Tabs.Navigator>
  );
};

export default Home;
