import React, { useState } from "react";

import {
  StyleSheet,
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
} from "react-native";

const initialState = {
  login: "",
  email: "",
  password: "",
};

export default function RegistrationScreen() {
  const [state, setState] = useState(initialState);
  const [isShowKeyboard, setIsShowKeyboard] = useState(false);

  const keyboardHide = () => {
    setIsShowKeyboard(false);
    Keyboard.dismiss();
  };
  const onSubmit = () => {
    const { login, email, password } = state;

    if (!login || !email || !password) {
      return Alert.alert("Error", "Fields can't be empty");
    }
    console.log(state);
    keyboardHide();
    setState(initialState);
  };

  return (
    <View style={styles.wrap}>
      <TouchableWithoutFeedback onPress={keyboardHide}>
        <KeyboardAvoidingView
          behavior={Platform.OS === "ios" ? "padding" : "height"}
          style={styles.keyboard}
        >
          <View
            style={{
              ...styles.form,
              paddingBottom: isShowKeyboard ? 20 : 78,
            }}
          >
            <View style={styles.wrapImg}>
              <View style={styles.avatar}></View>
              <Image
                style={styles.icon}
                source={require("../../assets/image/add-image.png")}
              />
            </View>

            <View>
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
                onFocus={() => setIsShowKeyboard(true)}
                value={state.password}
                onChangeText={(value) =>
                  setState((prevState) => ({ ...prevState, password: value }))
                }
              />
              <Text style={styles.password}>Показать</Text>
            </View>
            <TouchableOpacity
              style={styles.btn}
              activeOpacity={0.8}
              onPress={onSubmit}
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
      </TouchableWithoutFeedback>
    </View>
  );
}

const styles = StyleSheet.create({
  wrap: {
    flex: 1,
    resizeMode: "cover",
  },

  keyboard: {
    flex: 1,
    justifyContent: "flex-end",
  },
  form: {
    paddingTop: 92,
    position: "relative",
    justifyContent: "center",
    backgroundColor: "#fff",
    borderTopRightRadius: 25,
    borderTopLeftRadius: 25,
  },
  wrapImg: { position: "relative" },
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
    marginHorizontal: 16,
    textAlign: "center",
    color: "#212121",
    fontSize: 30,
    fontFamily: "Roboto-Medium",
  },
  input: {
    position: "relative",
    marginHorizontal: 16,
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
    fontFamily: "Roboto-Regulat",
  },
  text: {
    color: "#1B4371",
    marginTop: 16,
    fontSize: 16,
    fontFamily: "Roboto-Regulat",
  },
});
