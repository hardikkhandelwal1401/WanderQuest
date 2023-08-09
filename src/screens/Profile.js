import React from "react";
import { View, SafeAreaView, StyleSheet } from "react-native";
import {
  Avatar,
  Title,
  Caption,
  Text,
  TouchableRipple,
} from "react-native-paper";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import Colors from "../Shared/Colors";
import Constants from "expo-constants";

const ProfileScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.userProfile}>
        <View style={{ flexDirection: "row", marginTop: 5 }}>
          <Avatar.Image
            source={{
              uri: "https://static.vecteezy.com/system/resources/thumbnails/009/397/835/small/man-avatar-clipart-illustration-free-png.png",
            }}
            size={75}
          />
          <View style={{ marginLeft: 20 }}>
            <Title
              style={[
                styles.title,
                {
                  marginTop: 15,
                  marginBottom: 5,
                },
              ]}
            >
              Hardik Khandelwal
            </Title>
            <Caption style={styles.caption}>@khardikkh</Caption>
          </View>
        </View>
      </View>

      <View
        style={{ width: "100%", backgroundColor: Colors.BLACK, height: 0.5 }}
      ></View>

      <View style={styles.userInfoSection}>
        <Text
          style={{ fontFamily: "raleway-bold", fontSize: 20, marginBottom: 14 }}
        >
          User Information
        </Text>
        <View style={styles.row}>
          <Icon name="map-marker-radius" color="#777777" size={20} />
          <Text style={{ color: "#777777", marginLeft: 20, fontSize: 15 }}>
            Lucknow, India
          </Text>
        </View>
        <View style={styles.row}>
          <Icon name="phone" color="#777777" size={20} />
          <Text style={{ color: "#777777", marginLeft: 20, fontSize: 15 }}>
            +91-900000009
          </Text>
        </View>
        <View style={styles.row}>
          <Icon name="email" color="#777777" size={20} />
          <Text style={{ color: "#777777", marginLeft: 20, fontSize: 15 }}>
            hardik@email.com
          </Text>
        </View>
      </View>

      <View
        style={{
          width: "100%",
          backgroundColor: Colors.DARK_GRAY,
          height: 0.5,
        }}
      ></View>

      <View style={styles.menuWrapper}>
        {/* <TouchableRipple onPress={() => {}}>
          <View style={styles.menuItem}>
            <Icon name="share-outline" color={Colors.BLUE} size={24} />
            <Text style={styles.menuItemText}>Tell Your Friends</Text>
          </View>
        </TouchableRipple> */}
        {/* <TouchableRipple onPress={() => {}}>
          <View style={styles.menuItem}>
            <Icon name="account-check-outline" color={Colors.BLUE} size={24} />
            <Text style={styles.menuItemText}>Support</Text>
          </View>
        </TouchableRipple> */}
        <TouchableRipple onPress={() => {}}>
          <View style={styles.menuItem}>
            <Icon name="logout-variant" color={Colors.RED} size={24} />
            <Text style={styles.menuItemText}>Log Out</Text>
          </View>
        </TouchableRipple>
      </View>
    </SafeAreaView>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.GRAY,
  },
  userProfile: {
    paddingHorizontal: 25,
    marginBottom: 25,
    marginTop: Constants.statusBarHeight,
  },
  userInfoSection: {
    paddingHorizontal: 30,
    marginBottom: 10,
    marginTop: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
  },
  caption: {
    fontSize: 14,
    lineHeight: 14,
    fontWeight: "500",
  },
  row: {
    flexDirection: "row",
    marginBottom: 10,
  },
  infoBoxWrapper: {
    borderBottomColor: "#dddddd",
    borderBottomWidth: 1,
    borderTopColor: "#dddddd",
    borderTopWidth: 1,
    flexDirection: "row",
    height: 100,
  },
  infoBox: {
    width: "50%",
    alignItems: "center",
    justifyContent: "center",
  },
  menuWrapper: {
    marginTop: 10,
  },
  menuItem: {
    flexDirection: "row",
    paddingVertical: 10,
    paddingHorizontal: 30,
  },
  menuItemText: {
    color: "#777777",
    marginLeft: 15,
    fontWeight: "600",
    fontSize: 15,
    lineHeight: 26,
  },
});
