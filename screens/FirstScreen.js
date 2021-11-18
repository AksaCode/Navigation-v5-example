import React from "react";
import { Button, StyleSheet, Text, View } from "react-native";

// this screen component is create for testing navigator to all other screens and usage of drawer
const FirstScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text>First screen</Text>
      <Text>I am part of a first stacker</Text>
      // if two screens are placed inside the same Stack they can navigate to
      each other with .push()
      <Button
        title="2nd screen"
        color="#3e9ed1"
        onPress={() => {
          navigation.push("SecondScreen");
        }}
      />
      // if two screens are connected by other stacks, we can use navigate that
      takes Stack screen name and then the name of a screen to jump to
      <Button
        title="3rd screen"
        color="#3e9ed1"
        onPress={() => {
          navigation.navigate("Stack12Screen", { screen: "Stack2Screen" });
        }}
      />
      // same goes here like for 3rd screen
      <Button
        title="4th screen"
        color="#3e9ed1"
        onPress={() => {
          navigation.navigate("Stack2Screen", { screen: "ForthScreen" });
        }}
      />
      // in this way we can open a drawer, there is also openDrawer() and
      closeDrawer() methods
      <Button
        title="drawer open"
        color="#3e9ed1"
        onPress={() => {
          navigation.toggleDrawer();
        }}
      />
    </View>
  );
};

export default FirstScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
