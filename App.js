import React, { useCallback } from "react";
import { Button, StyleSheet, View } from "react-native";
import { MaterialIcons, SimpleLineIcons } from "@expo/vector-icons";

import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import LoginScreen from "./src/screens/auth/LoginScreen";
import RegistrationScreen from "./src/screens/auth/RegistrationScreen";
import Home from "./src/screens/auth/Home";
// import { useRoute } from "./rourer";

const MainStack = createStackNavigator();

SplashScreen.preventAutoHideAsync();

export default function App() {
  const [fontsLoaded] = useFonts({
    "Roboto-Regulat": require("./assets/fonts/Roboto/Roboto-Regular.ttf"),
    "Roboto-Medium": require("./assets/fonts/Roboto/Roboto-Medium.ttf"),
  });
  // const routing = useRoute(true); //null

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <View style={styles.container} onLayout={onLayoutRootView}>
      <NavigationContainer>
        <MainStack.Navigator initialRouteName="Login">
          <MainStack.Screen
            options={{ headerShown: false }}
            name="Registration"
            component={RegistrationScreen}
          />
          <MainStack.Screen
            options={{ headerShown: false }}
            name="Login"
            component={LoginScreen}
          />
          <MainStack.Screen
            options={{
              headerShown: false,
              // title: "Публикации",
              // headerTitleAlign: "center",
              // headerStyle: {
              //   borderBottomWidth: 1,
              //   borderBottomColor: "rgba(0, 0, 0, 0.3)",
              // },
              // headerTintColor: "#212121",
              // headerTitleStyle: {
              //   fontFamily: "Roboto-Medium",
              //   fontSize: 17,
              // },
              // headerRight: () => (
              //   <MaterialIcons
              //     style={styles.homeIcon}
              //     onPress={() => alert("This is a button!")}
              //     name="logout"
              //     size={24}
              //     color="#BDBDBD"
              //   />
              // ),
            }}
            name="Home"
            component={Home}
          />
        </MainStack.Navigator>
      </NavigationContainer>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  homeIcon: {
    marginRight: 16,
  },
});
