import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";

import LeftBar from "./LeftBar";
import RightBar from "./RightBar";

const Tab = createMaterialBottomTabNavigator();

const BottomTabScreen = ({ navigation }) => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="LeftBar"
        component={LeftBar}
        options={{
          tabBarLabel: "Left one",
          tabBarIcon: () => <Text style={{ color: "white" }}>L</Text>,
        }}
      />
      <Tab.Screen
        name="RightBar"
        component={RightBar}
        options={{
          tabBarLabel: "Right one",
          tabBarIcon: () => <Text style={{ color: "white" }}>R</Text>,
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTabScreen;
