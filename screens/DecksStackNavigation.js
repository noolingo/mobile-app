import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import TranslateScreen from "./DictionaryScreen";
import DecksScreen from "./DecksScreen";
import DeckManage from "./DeckManage";
import DeckLearning from "./DeckLearning";
const Stack = createNativeStackNavigator();

export default function DecksStackNavigation(){ 
    return (
        <Stack.Navigator initialRouteName="DeckScreen">
            <Stack.Screen name = "DeckScreen" options = {{headerShown: false}} component={ DecksScreen } />
            <Stack.Screen name = "DeckManage" options = {{ title: 'Создание колоды'}} component={ DeckManage }/>
            <Stack.Screen name = "DeckLearning" options = {{headerShown: false, title: "Learning a deck"}} component={ DeckLearning } initialParams={{name: "DECK-UNDEFINED"}}/>
        </Stack.Navigator>
    )
}