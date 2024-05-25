import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ProfileScreen from "./ProfileScreen";
const Stack = createNativeStackNavigator();

export default function ProfileStackNavigation(){ 
    return (
        <Stack.Navigator initialRouteName="MainDecks">
            <Stack.Screen name = "Profile" options = {{headerShown: false}} component={ ProfileScreen } />
        </Stack.Navigator>
    )
}