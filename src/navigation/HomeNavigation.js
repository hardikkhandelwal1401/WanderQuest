import { View, Text } from "react-native";
import React from "react";
import {
  createStackNavigator,
  TransitionPresets,
} from "@react-navigation/stack";
import Home from "../screens/Home";
import PlaceDetail from "../components/PlaceDetails/PlaceDetail";

const Stack = createStackNavigator();

const HomeNavigation = () => {
  const isAndroid = true;
  return (
    <Stack.Navigator
      screenOptions={{
        gestureEnabled: true,
        headerBackTitleVisible: false,
        headerShown: false,
        ...(isAndroid && TransitionPresets.ModalPresentationIOS),
      }}
    >
      <Stack.Screen name="home-screen" component={Home} />
      <Stack.Screen
        name="place-detail"
        component={PlaceDetail}
        options={{
          presentation: "modal",
        }}
      />
    </Stack.Navigator>
  );
};

export default HomeNavigation;
