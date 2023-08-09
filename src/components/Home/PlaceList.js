import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import PlaceItem from "./PlaceItem";
import PlaceItemBig from "./PlaceItemBig";

const PlaceList = ({ placeList }) => {
  const navigation = useNavigation();
  const onPlaceClick = (item) => {
    navigation.navigate("place-detail", { place: item });
  };
  return (
    <ScrollView>
      <Text style={{ fontSize: 23, fontFamily: "raleway-bold", marginTop: 7 }}>
        Found {placeList.length} Places
      </Text>
      <FlatList
        data={placeList}
        renderItem={({ item, index }) => (
          <TouchableOpacity key={index} onPress={() => onPlaceClick(item)}>
            {index % 4 == 0 ? (
              <PlaceItemBig place={item} />
            ) : (
              <PlaceItem place={item} />
            )}
          </TouchableOpacity>
        )}
        key={(item) => item.id}
      />
    </ScrollView>
  );
};

export default PlaceList;
