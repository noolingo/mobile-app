import { Pressable, SafeAreaView, Text, View } from "react-native";
import { themeColors } from "../theme";
import { TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useContext } from "react";
import { UserDTOContext, useUserDTOContext } from "../UserDTOContext";


export default function WelcomeScreen() {

    const navigation = useNavigation()
    const user = useUserDTOContext(UserDTOContext)

    return (
        <SafeAreaView className = "flex-1 justify-around items-center"
         style = {{ backgroundColor: themeColors.secondary}}>
            
            <View className = "flex-row flex justify-around my-4">
                <Text className = "text-white font-bold text-4xl text-center"> Let's get started! </Text>
            </View>

            <View>
                <View className= "rounded-xl y-2 w-5/6 flex-row justify-center items-center">
                    <TouchableOpacity className = "w-full" onPress={()=> navigation.navigate('SignUp')}>
                        <View className= "rounded-xl py-3"  style = {{backgroundColor: themeColors.accent_1}}>
                            <Text className= "text-white text-center text-xl font-semibold" style = {{}}> Sign Up </Text>
                        </View>
                    </TouchableOpacity>
                </View>

                <View className= ' my-2 flex-row justify-center items-center'>
                    <Text className = "text-white"> {`Already have an account?`}</Text>
                    <TouchableOpacity onPress={()=> navigation.navigate('Login')}>
                        <Text className= "text-white text-center text-xl font-semibold" style = {{color: themeColors.accent_2}}> Log in </Text>
                    </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView>
    )
}