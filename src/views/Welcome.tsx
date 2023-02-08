import React, { ChangeEvent, useContext } from "react";
import { View, Text, StyleSheet } from "react-native";
import ThemeSelector from "../components/themeSelector";
import { ThemeContext, ThemeContextType } from "../ThemeContext/themeContext";
import AstrounautTheme from "./ProfileThemes/astrounaut";
import DefaultTheme from "./ProfileThemes/default";
import FirefighterTheme from "./ProfileThemes/firefighter";

const Welcome = () => {
  const { theme } = useContext(ThemeContext) as ThemeContextType;

  switch (theme) {
    case "astronautTheme":
      return <AstrounautTheme />;
      break;
    case "firefighterTheme":
      return <FirefighterTheme />;

    default:
      return <DefaultTheme />;
  }
  return (
    <View style={styles.container}>
      <Text style={styles.text}>O tema atual é : {theme} </Text>
      <ThemeSelector />
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
