import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { FlatList } from "react-native";
import CategoryItem from "./CategoryItem";

const CategoryList = ({ setSelectedCategory }) => {
  const categoryList = [
    {
      id: 1,
      name: "Restaurants",
      value: "restaurant",
      icon: require("./../../../assets/food.png"),
    },
    {
      id: 2,
      name: "Cafe",
      value: "cafe",
      icon: require("./../../../assets/cafe.png"),
    },
    {
      id: 3,
      name: "Hospitals",
      value: "hospital",
      icon: require("./../../../assets/hospital.png"),
    },
    {
      id: 4,
      name: "Gas Station",
      value: "gas_station",
      icon: require("./../../../assets/gas.png"),
    },
    {
      id: 5,
      name: "ATM",
      value: "atm",
      icon: require("./../../../assets/atm.jpeg"),
    },
    {
      id: 6,
      name: "Temple",
      value: "hindu_temple",
      icon: require("./../../../assets/temple.jpeg"),
    },
    {
      id: 7,
      name: "Parking",
      value: "parking",
      icon: require("./../../../assets/parkingArea.jpeg"),
    },
    {
      id: 8,
      name: "Cinema Halls",
      value: "movie_theater",
      icon: require("./../../../assets/cinema.jpeg"),
    },
    {
      id: 9,
      name: "Spa",
      value: "spa",
      icon: require("./../../../assets/spa.jpeg"),
    },
  ];
  return (
    <View style={{ marginTop: 15 }}>
      <Text style={{ fontSize: 20, fontFamily: "raleway-bold" }}>
        Select Top Category
      </Text>

      <FlatList
        data={categoryList}
        horizontal
        showsHorizontalScrollIndicator={false}
        style={{ marginTop: 3 }}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => setSelectedCategory(item.value)}>
            <CategoryItem category={item} />
          </TouchableOpacity>
        )}
        key={(item) => item.id}
      />
    </View>
  );
};

export default CategoryList;
