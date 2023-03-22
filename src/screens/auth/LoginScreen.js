import React, { useState, useEffect } from "react";

import {
  StyleSheet,
  ImageBackground,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Platform,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
  Alert,
  Image,
  Dimensions,
} from "react-native";

const initialState = {
  email: "",
  password: "",
};

export default function LoginScreen({ navigation }) {
  const [state, setState] = useState(initialState);
  const [isShowKeyboard, setIsShowKeyboard] = useState(false);
  const [secureText, setSecureText] = useState(true);

  const [dimensions, setDimensions] = useState(
    Dimensions.get("window").width - 16 * 2
  );

  useEffect(() => {
    const subscription = Dimensions.addEventListener("change", () =>
      setDimensions(Dimensions.get("window").width - 16 * 2)
    );

    return () => subscription?.remove();
  }, []);

  const keyboardHide = () => {
    setIsShowKeyboard(false);
    Keyboard.dismiss();
  };
  const navigateHome = () => navigation.navigate("Home");

  const onSubmit = () => {
    const { email, password } = state;

    if (!email || !password) {
      return Alert.alert("Error", "Fill in all fields.");
    }
    console.log(state);
    keyboardHide();
    setState(initialState);
    setSecureText(true);
    navigateHome();
  };

  return (
    <TouchableWithoutFeedback onPress={keyboardHide}>
      <View style={styles.containerLogin}>
        <ImageBackground
          style={styles.image}
          source={require("../../../assets/image/bg-image.jpg")}
        >
          <View style={styles.wrap}>
            <KeyboardAvoidingView
              behavior={Platform.OS === "ios" ? "padding" : "height"}
              style={styles.keyboard}
            >
              <View style={styles.formWrap}>
                <View
                  style={{
                    ...styles.form,
                    paddingBottom: isShowKeyboard ? 20 : 78,
                    width: dimensions,
                  }}
                >
                  <View style={styles.wrapImg}>
                    <View style={styles.avatar}></View>
                    <Image
                      style={styles.icon}
                      source={require("../../../assets/image/add-image.png")}
                    />
                  </View>

                  <View>
                    <Text style={styles.title}>Войти</Text>
                  </View>
                  <View>
                    <TextInput
                      style={styles.input}
                      textAlign={"left"}
                      placeholder={"Адрес электронной почты"}
                      onFocus={() => setIsShowKeyboard(true)}
                      value={state.email}
                      onChangeText={(value) =>
                        setState((prevState) => ({
                          ...prevState,
                          email: value,
                        }))
                      }
                    />
                  </View>
                  <View style={{ marginTop: 16 }}>
                    <TextInput
                      style={styles.input}
                      textAlign={"left"}
                      secureTextEntry={secureText}
                      placeholder={"Пароль"}
                      onFocus={() => setIsShowKeyboard(true)}
                      value={state.password}
                      onChangeText={(value) =>
                        setState((prevState) => ({
                          ...prevState,
                          password: value,
                        }))
                      }
                    />
                    <Text
                      style={styles.password}
                      onPress={() =>
                        secureText ? setSecureText(false) : setSecureText(true)
                      }
                    >
                      Показать
                    </Text>
                  </View>
                  <TouchableOpacity
                    style={styles.btn}
                    activeOpacity={0.8}
                    onPress={onSubmit}
                  >
                    <Text style={styles.btnText}>Войти</Text>
                  </TouchableOpacity>
                  <View style={{ alignItems: "center" }}>
                    <TouchableOpacity
                      onPress={() => navigation.navigate("Registration")}
                    >
                      <Text style={styles.text}>
                        Нет аккаунта? Зарегистрироваться
                      </Text>
                    </TouchableOpacity>
                    {/* <Button
                      title="Go to Home"
                      onPress={() =>
                        navigation.navigate("Home")
                      }
                    /> */}
                  </View>
                </View>
              </View>
            </KeyboardAvoidingView>
          </View>
        </ImageBackground>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  containerLogin: {
    flex: 1,
  },
  image: {
    flex: 1,
    resizeMode: "cover",
  },

  wrap: {
    flex: 1,
    resizeMode: "cover",
  },

  keyboard: {
    flex: 1,
    justifyContent: "flex-end",
  },
  formWrap: {
    backgroundColor: "#fff",
    borderTopRightRadius: 25,
    borderTopLeftRadius: 25,
    alignItems: "center",
  },
  form: {
    paddingTop: 92,
    position: "relative",
    justifyContent: "center",
  },
  wrapImg: {
    position: "relative",
  },
  avatar: {
    position: "absolute",
    width: 120,
    height: 120,
    backgroundColor: "#F6F6F6",
    top: -150,
    borderRadius: 16,
    marginStart: 136,
  },
  icon: {
    zIndex: 2,
    position: "absolute",
    width: 25,
    height: 25,
    top: -70,
    marginStart: 240,
  },
  title: {
    marginBottom: 32,
    textAlign: "center",
    color: "#212121",
    fontSize: 30,
    fontFamily: "Roboto-Medium",
  },
  input: {
    position: "relative",
    borderWidth: 1,
    backgroundColor: "#F6F6F6",
    borderColor: "#E8E8E8",
    borderRadius: 8,
    height: 50,
    padding: 16,
    fontSize: 16,
    fontFamily: "Roboto-Regulat",
    color: "#212121",
  },
  password: {
    position: "absolute",
    top: 15,
    right: 32,
  },
  btn: {
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
    fontFamily: "Roboto-Regulat",
  },
  text: {
    color: "#1B4371",
    marginTop: 16,
    fontSize: 16,
    fontFamily: "Roboto-Regulat",
  },
});
