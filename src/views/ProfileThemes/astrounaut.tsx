import React, { useContext, useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import ThemeSelector from "../../components/themeSelector";
import { ThemeContext, ThemeContextType } from "../../ThemeContext/themeContext";

const AstrounautTheme = (props : any) => {
  const { theme } = useContext(ThemeContext) as ThemeContextType;
  return (
    <View style={styles.container}>
      <Text style={styles.text}>this is the {theme} theme </Text>
      <ThemeSelector />
    </View>
  );
};

export default AstrounautTheme;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: 'purple'
  },
  text: {
    fontSize: 30,
    fontWeight: "bold",
    color: 'white'
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
