import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";
// this component receive some params from other screen
const ParamsReceiver = ({ route, navigation }) => {
  // use route for catching params
  // by doing code above, we are taking secondScreenParam from route.params
  const { secondScreenParam } = route.params;
  return (
    <View style={styles.container}>
      <Text>This is what is received from the second screen:</Text>
      <Text>Second screen sent me a year: {secondScreenParam}</Text>
      <Button
        title="back to the first screen"
        color="#3e9ed1"
        onPress={() => {
          navigation.navigate("FirstScreen");
        }}
      />
    </View>
  );
};

export default ParamsReceiver;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
