import { View, Text, Image } from "react-native";
import React from "react";
import { AntDesign } from "@expo/vector-icons";
import Colors from "../../Shared/Colors";

const PlaceItem = ({ place }) => {
  return (
    <View
      style={{
        flexDirection: "row",
        alignItems: "center",
        marginTop: 20,
        alignItems: "center",
        gap: 15,
      }}
    >
      {place?.photos ? (
        <Image
          source={{
            uri:
              "https://maps.googleapis.com/maps/api/place/photo" +
              "?maxwidth=400" +
              "&photo_reference=" +
              place?.photos[0]?.photo_reference +
              "&key=AIzaSyAlIDUiTW6M9p6qb7mHsMCvqk0_OMO3MV0",
          }}
          style={{ width: 110, height: 110, borderRadius: 15 }}
        />
      ) : (
        <Image
          source={require("./../../../assets/placeholder.jpg")}
          style={{ width: 110, height: 110, borderRadius: 15 }}
        />
      )}

      <View style={{ flex: 1 }}>
        <Text
          numberOfLines={2}
          style={{ fontSize: 18, marginBottom: 2, fontFamily: "raleway-bold" }}
        >
          {place.name}
        </Text>

        <Text
          numberOfLines={2}
          style={{ fontSize: 16, marginBottom: 5, color: Colors.DARK_GRAY }}
        >
          {place.vicinity}
        </Text>

        <View
          style={{
            alignItems: "center",
            gap: 5,
            flexDirection: "row",
          }}
        >
          {place.rating >= 3.5 ? (
            <AntDesign name="star" size={18} color={Colors.YELLOW} />
          ) : (
            <AntDesign name="star" size={18} color={Colors.RED} />
          )}
          <Text>{place.rating}</Text>
        </View>
      </View>

      {/* <View>
        <View
          style={{ borderWidth: 0.3, marginTop: 10, borderColor: Colors.GRAY }}
        ></View>
      </View> */}
    </View>
  );
};

export default PlaceItem;
