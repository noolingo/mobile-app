import { SafeAreaView, Text } from "react-native";
import { themeColors } from "../theme";


export default function HomeScreen() {
    return (
        <SafeAreaView className = "flex-1 justify-center items-center"
         style = {{ backgroundColor: themeColors.primary}}>
            <Text> HomeScreen </Text>
        </SafeAreaView>
    )
}