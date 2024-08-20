import React from "react";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { useColorScheme } from "@/hooks/useColorScheme";
import HomeScreen from ".";
import TabTwoScreen from "./explore";

const Tab = createMaterialTopTabNavigator();

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tab.Navigator style={{ paddingTop: 20 }}>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Settings" component={TabTwoScreen} />
    </Tab.Navigator>
  );
}
