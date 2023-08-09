import { View, Text } from "react-native";
import React, { useContext, useEffect, useState } from "react";
import GoogleMapViewFull from "../components/Search/GoogleMapViewFull";
import SearchBar from "../components/Search/SearchBar";
import Constants from "expo-constants";
import { UserLocation } from "../Context/UserLocationContext";
import GlobalApi from "../Services/GlobalApi";
import BusinessList from "../components/Search/BusinessList";

const Search = () => {
  const [placeList, setPlaceList] = useState([]);
  const { location, setLocation } = useContext(UserLocation);

  const GetNearBySearchPlace = (value) => {
    GlobalApi.searchByText(value).then((resp) => {
      setPlaceList(resp.data.results);
    });
  };

  useEffect(() => {
    GetNearBySearchPlace("restaurant");
  }, []);

  return (
    <View style={{ marginTop: Constants.statusBarHeight }}>
      <View style={{ position: "absolute", zIndex: 20 }}>
        <SearchBar setSearchText={(value) => GetNearBySearchPlace(value)} />
      </View>

      <GoogleMapViewFull placeList={placeList} />

      <View style={{ position: "absolute", zIndex: 20, bottom: 0 }}>
        <BusinessList placeList={placeList} />
      </View>
    </View>
  );
};

export default Search;
