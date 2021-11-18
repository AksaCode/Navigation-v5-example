import React from "react";
import { StyleSheet, Text, View } from "react-native";

const RightBar = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text>Right bar here</Text>
    </View>
  );
};

export default RightBar;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
