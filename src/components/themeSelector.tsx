import React, { useContext } from "react";
import { Text, TouchableOpacity, StyleSheet } from "react-native";
import { ThemeContext, ThemeContextType } from "../ThemeContext/themeContext";

const ThemeSelector = () => {
  const { theme, changeTheme } = useContext(ThemeContext) as ThemeContextType;
  function changeThemeToAstrounaut() {
    changeTheme("astronautTheme");
  }

  const changeThemeToFirefigther = () => {
    changeTheme("firefighterTheme");
  };

  function changeThemeToDefault() {
    changeTheme("defaultTheme");
  }


  return (
    <>
      <TouchableOpacity
        onPress={changeThemeToAstrounaut}
        style={styles.DefaultThemeButton}
      >
        <Text style={styles.ButtonText}>Astrounaut theme</Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={changeThemeToFirefigther}
        style={styles.DefaultThemeButton}
      >
        <Text style={styles.ButtonText}>Firefighter theme</Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={changeThemeToDefault}
        style={styles.DefaultThemeButton}
      >
        <Text style={styles.ButtonText}>back to default theme</Text>
      </TouchableOpacity>
    </>
  );
};

export default ThemeSelector;

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
