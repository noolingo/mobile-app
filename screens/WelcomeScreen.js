import { SafeAreaView, Text, View, Image } from "react-native";
import { TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useState, useEffect, useContext } from "react";
import * as SplashScreen from "expo-splash-screen"
import fontStyles from "../src/fontStyles";
import { Cog8ToothIcon } from "react-native-heroicons/micro"
import ButtonWithOnPress from "../components/ButtonWithOnPress";
import { themeColors } from "../theme";
import { getAccessToken } from "../utility/AccessToken";
import { loadFonts } from "../utility/FontLoader";
import { getAuthStatusAndUserInfo, getUserInfo } from "../API/userAPI";
import { UserDTOContext } from "../UserDTOContext";

SplashScreen.preventAutoHideAsync()

export default function WelcomeScreen() {

    const navigation = useNavigation()
    const [appIsReady, setAppIsReady] = useState(false);
    const {userDTO, setUserDTO} = useContext(UserDTOContext)
    useEffect(() => {
        async function prepare() {
            const token = await getAccessToken()
            try {
                await loadFonts()
            } catch (e) {
                console.warn(e);
            } finally {
                const userInfo = await getAuthStatusAndUserInfo()
                if (userInfo.authorized) {
                    setUserDTO({
                        email: userInfo.result.email,
                        name: userInfo.result.name
                    })
                    navigation.navigate('CardScreenTabs')
                }
                setAppIsReady(true);
                setTimeout(() => {
                    SplashScreen.hideAsync()
                }, (200));
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
                <Cog8ToothIcon size = "50" color={themeColors.grey} />
            </TouchableOpacity>
            <View className = "items-center w-1/2">
                <Image className= " w-72 h-36  mt-20" style = {{resizeMode:"contain"}}source={require('../assets/logo_transparent_bg_dark.png')} />
                <Text className = "text-center text-xl text-black/25" style = {fontStyles.CygreExtraBold}>С каждой карточкой ближе к мастерству</Text>
            </View>
            <View className = "space-y-5 items-center ">
                    <ButtonWithOnPress onPress={()=> navigation.navigate('SignUp')} title = "   Регистрация    " />

                <View className= ' my-2 flex-row justify-center items-center'>
                    <Text className = "text-grey text-xl" style = {fontStyles.CygreRegular}> {`Уже зарегистрированы?`}</Text>
                    <TouchableOpacity onPress={()=> navigation.navigate('Login')}>
                        <Text className= " text-center text-2xl text-accent_2 mt-1 ml-2" style = {fontStyles.CygreExtraBold}>Войти</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView> : <></>}
    </>
    )
}