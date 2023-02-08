import React, { useState, useEffect, useContext, ChangeEvent } from "react";
import Home from "./Welcome";
import Profile from "./Profile";
import { NavigationContainer } from "@react-navigation/native";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import ThemeProvider, { ThemeContext, ThemeContextType, ThemeType } from "../ThemeContext/themeContext";

const Tab = createMaterialBottomTabNavigator();



const InitialPage = ({ children } : any) => {

  return (
    <ThemeProvider value={children}>
      <NavigationContainer>
        <Tab.Navigator>
          <Tab.Screen name="Home" component={Home} />
          <Tab.Screen name="Profile" component={Profile} />
        </Tab.Navigator>
      </NavigationContainer>
     </ThemeProvider>
  );
};

export default InitialPage;
