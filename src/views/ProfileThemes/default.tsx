import React from "react";
import { View, Text, StyleSheet } from "react-native";
import ThemeSelector from "../../components/themeSelector";

const DefaultTheme = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>this is the theme screeen</Text>
      <ThemeSelector />
    </View>
  );
};

export default DefaultTheme;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: 'white'
  },
  text: {
    fontSize: 30,
    fontWeight: "bold"
  },
  DefaultThemeButton: {
    backgroundColor: "grey",
    padding: 10,
    marginTop: 20
  },
  ButtonText: {
    fontSize: 20,
    fontWeight: "500",
    color: "white"
  }
});
