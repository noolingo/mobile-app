import { ActivityIndicator, SafeAreaView, Text, View} from "react-native";
import { useState } from "react";
import fontStyles from "../src/fontStyles";
import SignInForm from "../components/SignInForm";

export default function SignInScreen() {
    const [isLoading, setIsLoading] = useState(false)

    return (
        <SafeAreaView className = "flex-1 justify-end items-center w-full bg-grey">

            <View className = "flex-1 justify-center items-center w-full">
                <Text className = "text-center  text-accent_1" style = {[fontStyles.CygreExtraBold, {fontSize:60}]}>Вход</Text>
            </View>

            {isLoading? 
            <View className = " justify-start items-center bg-white w-full h-3/4 r-5 rounded-tr-3xl r-5 rounded-tl-3xl" > 
                <ActivityIndicator size={"large"} className = 'my-32'/> 
            </View>
            :
            <View  className = " justify-start pt-16 items-center bg-white w-full h-3/4 r-5 rounded-tr-3xl r-5 rounded-tl-3xl" > 
                <SignInForm setIsLoading = {setIsLoading} />
            </View>
            }   
        </SafeAreaView>
    )
}