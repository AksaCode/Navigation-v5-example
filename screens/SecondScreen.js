import React, { useState } from "react";
import { StyleSheet, Text, View, Button } from "react-native";

// this screen sends some value to other screen
const SecondScreen = ({ navigation }) => {
  const [ssState, setSsState] = useState(2021);
  return (
    <View style={styles.container}>
      <Text>Second screen</Text>
      <Text>I am part of a first stacker</Text>
      <Button
        title="go to ParamsReceiver"
        color="#3e9ed1"
        onPress={() => {
          navigation.push("StackParamScreen", {
            screen: "ParamsReceiver",
            // use params:{} and inside brackets send all params that you need
            params: {
              secondScreenParam: ssState,
            },
          });
        }}
      />
    </View>
  );
};

export default SecondScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
