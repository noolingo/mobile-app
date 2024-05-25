import { useCallback } from "react";
import { useFonts } from "expo-font"
import { View, Text } from "react-native"
import fontStyles from "../src/fontStyles";


export default function Card( props ){
    const text = props.text
    const translation = props.translation
    const transcription = props.transcription


    return (
        <>
            <View className = " bg-grey/95 border-4 border-accent_1 rounded-3xl min-w-full min-h-1/2 items-start ">
                <Text className = "mx-4 mt-10 text-3xl text-white" style = {fontStyles.CygreExtraBold}>{`${text}`} </Text>
                <View>

                <Text className = "text-2xl bg-accent_1 mx-2 p-3 mt-2 rounded-full " style = {fontStyles.CygreRegular} > {`${translation}`} </Text>
                <Text className = "text-3xl text-white/75 my-8 mx-2 rounded-full "> {`${transcription}`} </Text>
                </View>
            </View>
        </>
    )
}