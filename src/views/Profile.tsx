import React from "react";
import { View, Text, StyleSheet } from "react-native";

const Welcome = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Profile screeen</Text>
    </View>
  );
};

export default Welcome;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  text: {
    fontSize: 30,
    fontWeight: "bold"
  }
});
