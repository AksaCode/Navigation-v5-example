import React from "react";
// all navigation v5 import needed for this nav example
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createDrawerNavigator } from "@react-navigation/drawer";

import FirstScreen from "../screens/FirstScreen";
import SecondScreen from "../screens/SecondScreen";
import ThirdScreen from "../screens/ThirdScreen";
import ForthScreen from "../screens/ForthScreen";
import ParamsReceiver from "../screens/ParamsReceiver";
import BottomTabScreen from "../screens/BottomTabScreen";
// with createStackNavigator we create stack, it has:
// Navigator - it is wrapper for a screens
// Screen - option to all screen inside Stack
const Stack1 = createStackNavigator();
const Stack1Screen = () => (
  <Stack1.Navigator>
    <Stack1.Screen
      name="FirstScreen" // by the name screens are connected
      component={FirstScreen} // takes component to render
      options={{ title: "First screen page" }} // you can change all options for header here
    />
    <Stack1.Screen
      name="SecondScreen"
      component={SecondScreen}
      options={{ title: "Second screen page" }}
    />
  </Stack1.Navigator>
);

const Stack2 = createStackNavigator();
const Stack2Screen = () => (
  <Stack2.Navigator>
    <Stack2.Screen
      name="ThirdScreen"
      component={ThirdScreen}
      options={{ title: "Third screen page" }}
    />
    <Stack2.Screen
      name="ForthScreen"
      component={ForthScreen}
      options={{ title: "Forth screen page" }}
    />
  </Stack2.Navigator>
);

// this stack connect two other stack components
const Stack12 = createStackNavigator();
const Stack12Screen = () => (
  <Stack12.Navigator headerMode="none">
    <Stack12.Screen
      name="Stack1Screen"
      component={Stack1Screen}
      options={{ title: "Stack1" }}
    />
    <Stack12.Screen
      name="Stack2Screen"
      component={Stack2Screen}
      options={{ title: "Stack2" }}
    />
  </Stack12.Navigator>
);

//this component has only one screen
const StackBottomTab = createStackNavigator();
const StackBottomTabScreen = () => (
  <StackBottomTab.Navigator>
    <StackBottomTab.Screen
      name="BottomTabScreen"
      component={BottomTabScreen}
      options={{ title: "BottomTabScreen" }}
    />
  </StackBottomTab.Navigator>
);

//this component has only one screen
const StackParam = createStackNavigator();
const StackParamScreen = () => (
  <StackParam.Navigator>
    <StackParam.Screen
      name="ParamsReceiver"
      component={ParamsReceiver}
      options={{ title: "ParamsReceiver" }}
    />
  </StackParam.Navigator>
);

// this stack connect one stack with more screens with two stacks with only one screen
const Stack123 = createStackNavigator();
const Stack123Screen = () => (
  <Stack123.Navigator headerMode="none">
    <Stack123.Screen
      name="Stack12Screen"
      component={Stack12Screen}
      options={{ title: "Stack12" }}
    />
    <Stack123.Screen
      name="StackParamScreen"
      component={StackParamScreen}
      options={{ title: "ParamsReceiver" }}
    />
    <Stack123.Screen
      name="StackBottomTabScreen"
      component={StackBottomTabScreen}
      options={{ title: "BottomTabScreen" }}
    />
  </Stack123.Navigator>
);

// with createDrawerNavigator we create drawer
// it has the same options as createStackNavigator, same goes for properties
const Drawer = createDrawerNavigator();
const DrawerScreen = () => (
  <Drawer.Navigator initialRouteName="Fully working navigator">
    <Drawer.Screen name="First Screen component" component={FirstScreen} />
    <Drawer.Screen name="Second Screen component" component={SecondScreen} />
    <Drawer.Screen name="Fully working navigator" component={Stack123Screen} />
  </Drawer.Navigator>
);

// this stack connects drawer with a stack
const RootStack = createStackNavigator();
const RootStackScreen = () => (
  <RootStack.Navigator headerMode="none">
    <RootStack.Screen
      name="DrawerScreen"
      component={DrawerScreen}
      options={{
        animationEnabled: false,
      }}
    />
    <RootStack.Screen
      name="Stack123Screen"
      component={Stack123Screen}
      options={{
        animationEnabled: false,
      }}
    />
  </RootStack.Navigator>
);

const Navigator = () => {
  return (
    // in this way we are using created navigator
    // NavigationContainer needs to wrap custom nav component
    <NavigationContainer>
      <RootStackScreen />
    </NavigationContainer>
  );
};

export default Navigator;
