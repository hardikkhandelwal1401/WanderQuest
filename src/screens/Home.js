import { ScrollView, Text, TextInput, View } from "react-native";
import React, { useContext, useEffect, useState } from "react";
import Header from "../components/Home/Header";
import GoogleMapView from "../components/Home/GoogleMapView";
import CategoryList from "../components/Home/CategoryList";
import GlobalApi from "../Services/GlobalApi";
import PlaceList from "../components/Home/PlaceList";
import { UserLocation } from "../Context/UserLocationContext";

const Home = () => {
  const [placeList, setPlaceList] = useState([]);
  const { location, setLocation } = useContext(UserLocation);
  useEffect(() => {
    if (location) {
      GetNearBySearchPlace("restaurant");
    }
  }, [location]);
  const GetNearBySearchPlace = (value) => {
    GlobalApi.nearByPlace(
      location.coords.latitude,
      location.coords.longitude,
      value
    ).then((resp) => {
      // console.log(resp.data.results);
      setPlaceList(resp.data.results);
    });
  };
  return (
    <ScrollView style={{ padding: 20 }}>
      <Header />
      <GoogleMapView placeList={placeList} />
      <CategoryList
        setSelectedCategory={(value) => GetNearBySearchPlace(value)}
      />
      {placeList ? <PlaceList placeList={placeList} /> : null}
    </ScrollView>
  );
};

export default Home;
