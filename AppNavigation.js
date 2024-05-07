import { View, Text } from "react-native";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./screens/HomeScreen";
import WelcomeScreen from "./screens/WelcomeScreen";
import SignUpScreen from "./screens/SignUpScreen";
import TabsNavigator from "./screens/TabsNavigator";
import DecksScreen from "./screens/DecksScreen";
import DeckCreation from "./screens/DeckCreation";
import DeckLearning from "./screens/DeckLearning";
import SignInScreen from "./screens/SignInScreen";
import SettingsScreen from "./screens/SettingsScreen";
import SettingsHeader from "./components/SettingsHeader";

const Stack = createNativeStackNavigator();

export default function AppNavigation(){ 
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Welcome">
                <Stack.Screen name = "Home" options = {{headerShown: false}} component={ HomeScreen } />
                <Stack.Screen name = "Welcome" options = {{headerShown: false}} component={ WelcomeScreen } />
                <Stack.Screen name = "Settings" options={{ headerTitle: (props) => <SettingsHeader {...props} /> }} component={ SettingsScreen } />
                <Stack.Screen name = "Login" options = {{headerShown: false}} component={ SignInScreen } />
                <Stack.Screen name = "SignUp" options = {{headerShown: false}} component={ SignUpScreen } />
                <Stack.Screen name = "CardScreenTabs" options = {{headerShown: false}} component={ TabsNavigator } /> 
                <Stack.Screen name = "MainDecks" options = {{headerShown: false}} component={ DecksScreen } />
                <Stack.Screen name = "DeckCreation" options = {{headerShown: false, title: 'Creating a deck'}} component={ DeckCreation } />
                <Stack.Screen name = "DeckLearning" options = {{headerShown: false, title: "Learning a deck"}} component={ DeckLearning } initialParams={{name: "DECK-UNDEFINED"}}/>

            </Stack.Navigator>
        </NavigationContainer>
    )
}