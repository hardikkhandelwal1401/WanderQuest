import { View, Dimensions, TouchableOpacity, FlatList } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { LinearGradient } from "expo-linear-gradient";
import BusinessItem from "./BusinessItem";
import Colors from "../../Shared/Colors";

const BusinessList = ({ placeList }) => {
  const navigation = useNavigation();
  return (
    <View>
      <LinearGradient
        colors={["transparent", Colors.WHITE]}
        style={{ padding: 20, width: Dimensions.get("screen").width }}
      >
        <FlatList
          data={placeList}
          horizontal={true}
          renderItem={({ item, index }) =>
            index <= 6 && (
              <TouchableOpacity
                onPress={() =>
                  navigation.navigate("place-detail", {
                    place: item,
                  })
                }
              >
                <BusinessItem place={item} />
              </TouchableOpacity>
            )
          }
        />
      </LinearGradient>
    </View>
  );
};

export default BusinessList;
