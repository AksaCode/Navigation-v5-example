import React from "react";
import { Button, StyleSheet, Text, View } from "react-native";
// this component will lead us to component with bottom tabs
const ForthScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text>Third screen</Text>
      <Text>I am part of a second stacker</Text>

      <Button
        title="go to bottom tabs screen"
        color="#3e9ed1"
        onPress={() => {
          navigation.push("StackBottomTabScreen");
        }}
      />
      <Button
        title="drawer open"
        color="#3e9ed1"
        onPress={() => {
          navigation.openDrawer();
        }}
      />
    </View>
  );
};

export default ForthScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
