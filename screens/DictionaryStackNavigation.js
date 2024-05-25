import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import TranslateScreen from "./DictionaryScreen";

const Stack = createNativeStackNavigator();

export default function DictionaryStackNavigation(){ 
    return (
        <Stack.Navigator initialRouteName="TranslateScreen">
            <Stack.Screen name = "TranslateScreen" options = {{headerShown: false}} component={ TranslateScreen } />
        </Stack.Navigator>
    )
}