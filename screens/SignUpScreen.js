import { ActivityIndicator, SafeAreaView, Text, View } from "react-native";
import { useContext, useState } from "react";
import { UserDTOContext } from "../UserDTOContext";
import fontStyles from "../src/fontStyles";
import SignUpForm from "../components/SignUpForm";


export default function SignUpScreen() {    
    const [isLoading, setIsLoading] = useState(false)

    return (
        <SafeAreaView className = "flex-1 justify-end items-center w-full bg-grey">

            <View className = "flex-1 justify-center items-center w-full">
                <Text className = "text-center  text-accent_1" style = {[fontStyles.CygreExtraBold, {fontSize:60}]}>Sign up</Text>
            </View>

            {isLoading? 
            <View className = " justify-start items-center bg-white w-full h-3/4 r-5 rounded-tr-3xl r-5 rounded-tl-3xl" > 
                <ActivityIndicator size={"large"} className = 'my-32'/> 
            </View>
            :
            <View  className = " justify-start items-center bg-white w-full h-3/4 r-5 rounded-tr-3xl r-5 rounded-tl-3xl" > 
                <SignUpForm setIsLoading = {setIsLoading} />
            </View>
            }   
        </SafeAreaView>
    )
}