import { Button, SafeAreaView, Text, View, ViewBase } from "react-native";
import { TextInput } from "react-native";
import fontStyles from "../src/fontStyles";

export default function TextInputWithHeader( props ) {
    const header = props.header
    const value = props.value
    const setValue = props.setValue    

    return (
        <>
        <View className = "w-11/12">
            <Text className = "text-xl text-black/50" style = {fontStyles.CygreExtraBold}>
                 {header}
            </Text>
            <TextInput 
            className = "p-4 text-2xl mt-1 border-2 rounded-lg border-black/50"
            style = {fontStyles.CygreRegular}
            placeholder={`Введите ${header}`}
            value={value} 
            onChangeText={ setValue } />
        </View>
        </>
    )
}