import { Text, View } from "react-native"
import { Cog8ToothIcon } from "react-native-heroicons/micro"
import fontStyles from "../src/fontStyles"
import { themeColors } from "../theme"

export default function SettingsHeader() {
    return (
        <View className = "flex-row items-center justify-between ">
            <Text className = "  text-2xl text-center text-grey" style = {fontStyles.CygreRegular}>Настройки</Text>
        </View>
    )
}