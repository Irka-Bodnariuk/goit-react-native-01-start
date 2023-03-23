import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Image,
} from "react-native";

import { MaterialIcons, Feather } from "@expo/vector-icons";

const CreatePostsScreen = ({ navigation, route }) => {
  const newPost = "../../../assets/image/add-post.png";
  const onClick = () => {};
  return (
    <View style={styles.container}>
      <View style={styles.wrap}>
        <View>
          <View style={styles.photo}>
            {/* <Image source={require(newPost)} /> */}
            <TouchableOpacity style={styles.camera}>
              <MaterialIcons
                style={styles.icon}
                name="photo-camera"
                size={24}
                color="#BDBDBD"
              />
            </TouchableOpacity>
          </View>
          <TouchableOpacity onPress={onClick}>
            <Text style={styles.text}>Загрузите фото</Text>
          </TouchableOpacity>

          <TextInput
            style={styles.namePost}
            textAlign={"left"}
            placeholder={"Название..."}
          />
          <View style={styles.mapWrap}>
            <Feather
              style={styles.map}
              name="map-pin"
              size={20}
              color="#BDBDBD"
            />
            <TextInput
              style={styles.mapText}
              textAlign={"left"}
              placeholder={"Местность..."}
            />
          </View>
        </View>
        <View style={styles.buttonWrap}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              navigation.navigate("PostsScreen");
            }}
          >
            <Feather name="trash-2" size={24} color={"#BDBDBD"} />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,

    alignItems: "center",
    backgroundColor: "#fff",
  },
  wrap: {
    flex: 1,
    marginHorizontal: 16,
    marginVertical: 32,
  },
  photo: {
    width: 343,
    height: 240,
    backgroundColor: "#F6F6F6",
    borderWidth: 1,
    borderColor: "#E8E8E8",
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
  },
  camera: {
    backgroundColor: "#FFFFFF",
    width: 60,
    height: 60,
    borderRadius: 100,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    color: "#BDBDBD",
    fontFamily: "Roboto-Regular",
    fontSize: 16,
    marginTop: 8,
  },
  namePost: {
    marginTop: 32,
    borderBottomColor: "#E8E8E8",
    borderBottomWidth: 1,
    height: 50,
    paddingBottom: 16,
    paddingTop: 16,

    fontSize: 16,
    fontFamily: "Roboto-Regular",
    color: "#212121",
  },
  mapWrap: {
    position: "relative",
  },
  map: {
    position: "absolute",
    top: 28,
  },
  mapText: {
    marginTop: 16,
    borderBottomColor: "#E8E8E8",
    borderBottomWidth: 1,
    height: 50,
    paddingBottom: 16,
    paddingTop: 16,
    paddingLeft: 28,
    fontSize: 16,
    fontFamily: "Roboto-Regular",
    color: "#212121",
  },
  buttonWrap: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-end",
  },
  button: {
    width: 70,
    height: 40,
    borderRadius: 20,
    backgroundColor: "#F6F6F6",

    justifyContent: "center",
    alignItems: "center",
  },
  icon: {},
});
export default CreatePostsScreen;
