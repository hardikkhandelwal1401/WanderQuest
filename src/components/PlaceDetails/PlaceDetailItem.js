import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import { AntDesign, Ionicons } from "@expo/vector-icons";
import Colors from "../../Shared/Colors";
import Share from "../../Services/Share";

const PlaceDetailItem = ({ place, onDirectionClick }) => {
  return (
    <View>
      <Text style={{ fontSize: 26, fontFamily: "raleway-bold" }}>
        {place.name}
      </Text>

      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            gap: 5,
            marginTop: 6,
          }}
        >
          <AntDesign name="star" size={20} color={Colors.YELLOW} />
          <Text>{place.rating}</Text>
        </View>
        {place?.opening_hours ? (
          <Text
            style={{
              fontFamily: "raleway",
              paddingRight: 6,
              fontWeight: "bold",
              color: Colors.BLUE,
            }}
          >
            {place?.opening_hours?.open_now == true ? "Open" : "Closed"}
          </Text>
        ) : null}
      </View>

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
          style={{
            width: "100%",
            height: 170,
            borderRadius: 14,
            marginTop: 12,
          }}
        />
      ) : null}

      <Text
        style={{ fontSize: 15, marginTop: 10, color: Colors.DARK_GRAY }}
        numberOfLines={2}
      >
        {place.vicinity ? place.vicinity : place.formatted_address}
      </Text>

      <View
        style={{
          marginTop: 12,
          flexDirection: "row",
          gap: 12,
        }}
      >
        <TouchableOpacity
          onPress={() => onDirectionClick()}
          style={{
            flexDirection: "row",
            alignItems: "center",
            gap: 5,
            backgroundColor: Colors.GRAY,
            width: 120,
            padding: 3,
            borderRadius: 40,
            justifyContent: "center",
          }}
        >
          <Ionicons name="navigate-circle-outline" size={24} color="black" />
          <Text style={{ fontFamily: "raleway", fontSize: 15 }}>Direction</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => Share.SharePlace(place)}
          style={{
            flexDirection: "row",
            alignItems: "center",
            gap: 5,
            backgroundColor: Colors.GRAY,
            width: 90,
            padding: 3,
            borderRadius: 40,
            justifyContent: "center",
          }}
        >
          <Ionicons name="md-share-outline" size={24} color="black" />
          <Text style={{ fontFamily: "raleway", fontSize: 15 }}>Share</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default PlaceDetailItem;
