import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

const PostsScreen = ({ navigation, route }) => {
  const email = "email@mail.com";
  const name = "Natali Romanova";
  const image = "../../../assets/image/Add-photo.png";

  return (
    <View style={styles.container}>
      <View style={styles.wrapImg}>
        <Image style={styles.photo} source={require(image)} />
        <View>
          <Text style={styles.name}>{name}</Text>
          <Text style={styles.email}>{email}</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: "center",
    // alignItems: "center",
    backgroundColor: "#fff",
  },
  wrapImg: {
    marginVertical: 32,
    marginHorizontal: 16,
    flexDirection: "row",
    // justifyContent: "flex-start",
    alignItems: "center",
  },
  photo: {
    width: 60,
    height: 60,
    backgroundColor: "#F6F6F6",
    borderRadius: 16,
    marginRight: 8,
  },
  name: {
    // marginBottom: 32,

    color: "#212121",
    fontSize: 13,
    fontFamily: "Roboto-Bold",
  },
  email: {
    // marginBottom: 32,

    color: "#212121",
    fontSize: 13,
    fontFamily: "Roboto-Regular",
  },
});
export default PostsScreen;
