import { View, Text, Dimensions, TextInput, Image } from "react-native";
import React, { useState } from "react";
import { LinearGradient } from "expo-linear-gradient";
import Colors from "../../Shared/Colors";
import { Ionicons } from "@expo/vector-icons";

const SearchBar = ({ setSearchText }) => {
  const [searchInput, setSearchInput] = useState();
  return (
    <View>
      <LinearGradient
        colors={[Colors.WHITE, "transparent"]}
        style={{ padding: 20, width: Dimensions.get("screen").width }}
      >
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <Text style={{ fontFamily: "raleway-bold", fontSize: 36 }}>
            Discover
          </Text>
          <Image
            source={require("./../../../assets/user.png")}
            style={{ width: 50, height: 50, borderRadius: 50 }}
          />
        </View>

        <View
          style={{
            flexDirection: "row",
            marginTop: 5,
            padding: 10,
            gap: 5,
            elevation: 0.7,
            alignItems: "center",
            backgroundColor: Colors.WHITE,
            borderRadius: 5,
          }}
        >
          <Ionicons name="search" size={20} color={Colors.DARK_GRAY} />
          <TextInput
            placeholder="Search"
            onChangeText={(value) => setSearchInput(value)}
            style={{ backgroundColor: Colors.WHITE, width: "80%" }}
            onSubmitEditing={() => setSearchText(searchInput)}
          />
        </View>
      </LinearGradient>
    </View>
  );
};

export default SearchBar;
