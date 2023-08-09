import { View, Text, Image } from "react-native";
import React from "react";
import Colors from "../../Shared/Colors";

const CategoryItem = ({ category }) => {
  return (
    <View
      style={{
        padding: 5,
        alignItems: "center",
        margin: 7,
        width: 95,
        height: 95,
        justifyContent: "center",
        backgroundColor: Colors.WHITE,
        borderRadius: 15,
        elevation: 1,
      }}
    >
      <Image source={category.icon} style={{ width: 45, height: 37 }} />
      <Text style={{ fontSize: 14, fontFamily: "raleway", marginTop: 4 }}>
        {category.name}
      </Text>
    </View>
  );
};

export default CategoryItem;
