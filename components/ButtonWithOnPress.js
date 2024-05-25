import {  Text, View } from "react-native";
import { TouchableOpacity } from "react-native";
import fontStyles from "../src/fontStyles";

export default function ButtonWithOnPress(props) {
    return (
    <TouchableOpacity 
    onPress={ props.onPress }
        className = "w-full items-center justify-center">
        <View className = "w-11/12 bg-yellow py-3 rounded-xl " style = {{elevation: 4}}>
            <Text className= {`text-center ${props.size == "small"? "text-2xl":"text-4xl"} font-semibold text-white pt-2`} style = {fontStyles.CygreExtraBold}s> {`${props.title? props.title : "Подтвердить"}`} </Text>
        </View>
    
    </TouchableOpacity>

    )
}