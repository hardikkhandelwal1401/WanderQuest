import {
  Linking,
  Platform,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useEffect, useState } from "react";
import { useRoute } from "@react-navigation/native";
import PlaceDetailItem from "./PlaceDetailItem";
import Colors from "../../Shared/Colors";
import GoogleMapView from "../Home/GoogleMapView";

const PlaceDetail = () => {
  const param = useRoute().params;
  const [place, setPlace] = useState([]);

  useEffect(() => {
    setPlace(param.place);
  }, []);

  const onDirectionClick = () => {
    console.log("click");
    const url = Platform.select({
      ios:
        "maps:" +
        place.geometry.location.lat +
        "," +
        place.geometry.location.lng +
        "?q=" +
        place.vicinity,
      android:
        "geo:" +
        place.geometry.location.lat +
        "," +
        place.geometry.location.lng +
        "?q=" +
        place.vicinity,
    });
    Linking.openURL(url);
  };
  return (
    <ScrollView
      style={{ padding: 15, backgroundColor: Colors.WHITE, flex: 1 }}
      bounces={false}
    >
      <PlaceDetailItem place={place} onDirectionClick={onDirectionClick} />
      <GoogleMapView placeList={[place]} />

      <TouchableOpacity
        onPress={() => onDirectionClick()}
        style={{
          backgroundColor: Colors.GREEN,
          padding: 15,
          alignContent: "center",
          alignItems: "center",
          borderRadius: 50,
          margin: 12,
          marginTop: 20,
        }}
      >
        <Text
          style={{
            textAlign: "center",
            fontFamily: "raleway",
            color: Colors.WHITE,
          }}
        >
          Get Directions on Google Map
        </Text>
      </TouchableOpacity>
      <View style={{ height: 15 }}></View>
    </ScrollView>
  );
};

export default PlaceDetail;
