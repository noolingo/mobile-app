import { Pressable, SafeAreaView, Text, View } from "react-native";
import { themeColors } from "../theme";
import { TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useContext, useCallback, useState, useEffect } from "react";
import { UserDTOContext, useUserDTOContext } from "../UserDTOContext";
import { SettingsContext, useSettingsContext } from "../Contexts/SettingsContext";
import * as Font from 'expo-font'
import * as SplashScreen from "expo-splash-screen"
import fontStyles from "../src/fontStyles";
import { Cog8ToothIcon } from "react-native-heroicons/micro"
SplashScreen.preventAutoHideAsync()

export default function WelcomeScreen() {

    const navigation = useNavigation()
    const {userDTO} = useUserDTOContext(UserDTOContext)
    const {settings} = useSettingsContext(SettingsContext)
    const [appIsReady, setAppIsReady] = useState(false);

    useEffect(() => {
      async function prepare() {
        try {
            await Font.loadAsync({'Cygre-Regular': require('../assets/fonts/Cygre-Regular.ttf')})
            await Font.loadAsync({'Cygre-ExtraBold': require('../assets/fonts/Cygre-ExtraBold.ttf')})
            await Font.loadAsync({'PTSerif-BoldItalic': require('../assets/fonts/PTSerif-BoldItalic.ttf')})
            await Font.loadAsync({'PTSerif-Bold': require('../assets/fonts/PTSerif-Bold.ttf')})
            await Font.loadAsync({'PTSerif-Italic': require('../assets/fonts/PTSerif-Italic.ttf')})
            await Font.loadAsync({'PTSerif-Regular': require('../assets/fonts/PTSerif-Regular.ttf')})
            await Font.loadAsync({'CenturyGothic-Regular': require('../assets/fonts/CenturyGothic-Regular.ttf')})
            await SplashScreen.hideAsync()

        } catch (e) {
          console.warn(e);
        } finally {
          // Tell the application to render
          setAppIsReady(true);
        }
      }
  
      prepare();
    }, []);
  
    return (
    <>
        {appIsReady? 
        <SafeAreaView className = "flex-1 w-full justify-around items-center bg-white ">
            <TouchableOpacity className = "absolute top-16 right-3"
            onPress={()=> navigation.navigate('Settings')}>
                <Cog8ToothIcon  size = "50" color={"black"} />
            </TouchableOpacity>
            <View className = "flex-row flex justify-around my-4">
                <Text className = "  text-6xl text-center text-grey" style = {fontStyles.CygreExtraBold}>Let's get started!</Text>
            </View>

            <View className = "space-y-5 w-5/6">
                    <TouchableOpacity className = "w-full" onPress={()=> navigation.navigate('SignUp')}>
                        <View className= "rounded-xl py-3 bg-accent_1" >
                            <Text className= "text-white text-center text-4xl font-semibold" style = {fontStyles.CygreRegular}>Sign Up</Text>
                        </View>
                    </TouchableOpacity>

                <View className= ' my-2 flex-row justify-center items-center'>
                    <Text className = "text-grey " style = {fontStyles.CygreRegular}> {`Already have an account?`}</Text>
                    <TouchableOpacity onPress={()=> navigation.navigate('Login')}>
                        <Text className= "text-white text-center text-xl text-accent_2 mt-1" style = {fontStyles.CygreExtraBold}>Log in</Text>
                    </TouchableOpacity>
                </View>
                
                    <TouchableOpacity className = "w-full" onPress={()=> navigation.navigate('CardScreenTabs')}>
                        <View className= "rounded-xl py-3 bg-accent_1" >
                            <Text className= "text-white text-center text-sm font-semibold" > GO TO CARDS (этой кнопки не будет) </Text>
                        </View>
                    </TouchableOpacity>
            </View>
        </SafeAreaView> : <Text> balls </Text>}
    </>
    )
}