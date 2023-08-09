import {
  View,
  Text,
  Image,
  StyleSheet,
  TextInput,
  Dimensions,
  SafeAreaView,
} from "react-native";
import React from "react";
import Colors from "../../Shared/Colors";
import Constants from "expo-constants";

const Header = () => {
  return (
    <SafeAreaView
      style={{
        flexDirection: "row",
        justifyContent: "space-evenly",
        gap: 10,
        alignItems: "center",
        marginTop: Constants.statusBarHeight,
      }}
    >
      <Image source={require("../../../assets/logo.png")} style={styles.logo} />
      <View>
        {/* <TextInput placeholder="Search" style={styles.searchBar} /> */}
        <Text style={{ fontFamily: "raleway-bold", fontSize: 30 }}>
          Hello, Hardik
        </Text>
      </View>
      <Image
        // source={require("../../../assets/placeholder.jpg")}
        style={styles.userImage}
        source={require("./../../../assets/user.png")}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  logo: {
    width: 50,
    height: 50,
  },
  searchBar: {
    borderWidth: 1,
    borderColor: Colors.BLACK,
    borderRadius: 50,
    padding: 4,
    paddingLeft: 10,
    width: Dimensions.get("screen").width * 0.6,
  },
  userImage: {
    width: 50,
    height: 50,
    borderRadius: 50,
  },
});

export default Header;
