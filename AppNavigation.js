import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import WelcomeScreen from "./screens/WelcomeScreen";
import SignUpScreen from "./screens/SignUpScreen";
import TabsNavigator from "./screens/TabsNavigator";
import DecksScreen from "./screens/DecksScreen";
import DeckLearning from "./screens/DeckLearning";
import SignInScreen from "./screens/SignInScreen";
import SettingsScreen from "./screens/SettingsScreen";
import SettingsHeader from "./components/SettingsHeader";
import DeckManage from "./screens/DeckManage";

const Stack = createNativeStackNavigator();

export default function AppNavigation(){ 
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Welcome">
                <Stack.Screen 
                    name = "Welcome" 
                    options = {{headerShown: false}} component={ WelcomeScreen } />
                <Stack.Screen 
                    name = "Settings" 
                    options={{ headerTitle: (props) => <SettingsHeader {...props} /> }} 
                    component={ SettingsScreen } />
                <Stack.Screen 
                    name = "Login" 
                    options = {{headerShown: false}} component={ SignInScreen } />
                <Stack.Screen 
                    name = "SignUp" 
                    options = {{headerShown: false}} component={ SignUpScreen } />
                <Stack.Screen 
                    name = "CardScreenTabs" 
                    options = {{headerShown: false}} component={ TabsNavigator } /> 
                <Stack.Screen 
                    name = "MainDecks" 
                    options = {{headerShown: false}} component={ DecksScreen } />
                <Stack.Screen 
                    name = "DeckManage" 
                    options = {{ title: 'Создание колоды'}} component={ DeckManage } />
                <Stack.Screen 
                    name = "DeckLearning" 
                    options = {{headerShown: false, title: "Learning a deck"}} 
                    component={ DeckLearning } 
                    initialParams={{name: "DECK-UNDEFINED"}}/>
            </Stack.Navigator>
        </NavigationContainer>
    )
}