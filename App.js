import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  TextInput,
  TouchableOpacity,
  Platform,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";

import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-scren";

const initialState = {
  login: "",
  email: "",
  password: "",
};

SplashScreen.preventAutoHideAsync();

export default function App() {
  const [isShowKeyboard, setIsShowKeyboard] = useState(false);
  const [state, setState] = useState(initialState);
  const [isReady, setIsReady] = useState(false);

  const keyboardHide = () => {
    setIsShowKeyboard(false);
    Keyboard.dismiss();
    console.log(state);
    setState(initialState);
  };

  const [fontsLoaded] = useFonts({
    "Roboto-Regulat": require("./assets/fonts/Roboto/Roboto-Regular.ttf"),
    "Roboto-Medium": require("./assets/fonts/Roboto/Roboto-Medium.ttf"),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <TouchableWithoutFeedback onPress={keyboardHide}>
      <View style={styles.container} onLayout={onLayoutRootView}>
        <ImageBackground
          style={styles.image}
          source={require("./assets/BG.png")}
        >
          <KeyboardAvoidingView
          // behavior={Platform.OS === "ios" ? "padding" : "height"}
          >
            <View
              style={{
                ...styles.form,
                paddingBottom: isShowKeyboard ? 32 : 78,
              }}
            >
              <View style={styles.header}>
                <Text style={styles.title}>Регистрация</Text>
              </View>
              <View>
                <TextInput
                  style={styles.input}
                  textAlign={"left"}
                  placeholder={"Логин"}
                  onFocus={() => setIsShowKeyboard(true)}
                  value={state.login}
                  onChangeText={(value) =>
                    setState((prevState) => ({ ...prevState, login: value }))
                  }
                />
              </View>
              <View style={{ marginTop: 16 }}>
                <TextInput
                  style={styles.input}
                  textAlign={"left"}
                  placeholder={"Адрес электронной почты"}
                  onFocus={() => setIsShowKeyboard(true)}
                  value={state.email}
                  onChangeText={(value) =>
                    setState((prevState) => ({ ...prevState, email: value }))
                  }
                />
              </View>
              <View style={{ marginTop: 16 }}>
                <TextInput
                  style={styles.input}
                  textAlign={"left"}
                  secureTextEntry={true}
                  placeholder={"Пароль"}
                  keyboardType={"visible-password"}
                  onFocus={() => setIsShowKeyboard(true)}
                  value={state.password}
                  onChangeText={(value) =>
                    setState((prevState) => ({ ...prevState, password: value }))
                  }
                />
              </View>
              <TouchableOpacity
                style={styles.btn}
                activeOpacity={0.8}
                onPress={keyboardHide}
              >
                <Text style={styles.btnText}>Зарегистрироваться</Text>
              </TouchableOpacity>
              <View style={{ alignItems: "center" }}>
                <Text style={styles.text}>
                  Уже есть аккаунт?
                  <Text style={styles.text}> Войти</Text>
                </Text>
              </View>
            </View>
          </KeyboardAvoidingView>
        </ImageBackground>
        {/* <StatusBar style="auto" /> */}
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    // alignItems: "center",
    // justifyContent: "center",
  },
  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "flex-end",
  },
  form: {
    paddingTop: 92,
    backgroundColor: "#fff",
    borderTopRightRadius: 25,
    borderTopLeftRadius: 25,
  },
  header: {
    alignItems: "center",
    marginBottom: 32,
  },
  title: {
    marginHorizontal: 16,
    color: "#212121",
    fontSize: 30,
    fontFamily: "Roboto-Medium",
  },
  input: {
    marginHorizontal: 16,
    borderWidth: 1,
    backgroundColor: "#F6F6F6",
    borderColor: "#E8E8E8",
    borderRadius: 8,
    height: 50,
    padding: 10,
    fontSize: 16,
    color: "#212121",
  },
  btn: {
    marginHorizontal: 16,
    backgroundColor: "#FF6C00",
    height: 51,
    borderRadius: 100,
    marginTop: 43,
    justifyContent: "center",
    alignItems: "center",
  },
  btnText: {
    fontSize: 16,
    color: "#fff",
  },
  text: {
    color: "#1B4371",
    marginTop: 16,
    fontSize: 16,
  },
});
