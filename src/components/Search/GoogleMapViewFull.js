import { View, Text, Dimensions } from "react-native";
import React, { useContext, useEffect, useState } from "react";
import { UserLocation } from "../../Context/UserLocationContext";
import MapView, { Marker, PROVIDER_GOOGLE } from "react-native-maps";
import PlaceMarker from "../Home/PlaceMarker";

const GoogleMapViewFull = ({ placeList }) => {
  const [mapRegion, setmapRegion] = useState([]);

  const { location, setLocation } = useContext(UserLocation);

  useEffect(() => {
    if (location) {
      setmapRegion({
        latitude: location.coords.latitude,
        longitude: location.coords.longitude,
        latitudeDelta: 0.0522,
        longitudeDelta: 0.0421,
      });
    }
  }, [location]);
  return (
    <View>
      {location ? (
        <MapView
          style={{
            width: Dimensions.get("screen").width,
            height: Dimensions.get("screen").height * 0.9,
          }}
          provider={PROVIDER_GOOGLE}
          showsUserLocation={true}
          region={mapRegion}
        >
          <Marker title="You" coordinate={mapRegion} />
          {placeList.map(
            (item, index) =>
              index <= 10 && <PlaceMarker item={item} key={index} />
          )}
        </MapView>
      ) : null}
    </View>
  );
};

export default GoogleMapViewFull;
