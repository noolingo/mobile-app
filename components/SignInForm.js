import { View, useAnimatedValue} from "react-native";
import { useContext, useState } from "react";
import ButtonWithOnPress from "../components/ButtonWithOnPress";
import { getAuthStatusAndUserInfo, getUserInfo, postSignIn } from "../API/userAPI";
import { UserDTOContext } from "../UserDTOContext";
import { TextInput } from "react-native-paper";
import { themeColors } from "../theme";
import { setAccessToken } from "../utility/AccessToken";
import { useNavigation } from "@react-navigation/native";

export default function SignInForm(props) {
    
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const {userDTO, setUserDTO} = useContext(UserDTOContext)
    const navigation = useNavigation();
    const setIsLoading = props.setIsLoading

    
    const handleSubmit = async () => {
        setIsLoading(true)
        if ( email === "" || password === "") { return ("Не все поля заполнены!") };
        const response = await postSignIn({
            email: email,
            password: password,
        })
        setUserDTO({
            email: email
        })
        if(response.error != null){
            if (response.error.Error.includes("Forbidden") || response.error.Error.includes("NotFound")){
                return "Неправильно введен email или пароль!"
            } 
            return response.error.ErrorText
        }
        setAccessToken(response.accessToken)
        setUserDTO({email: email})
        
        setIsLoading(false)       
        return ("success")
    }
    
    return (
        <View className = "form my-12 space-y-3 w-full items-center">
            <TextInput 
                className = "w-11/12 text-xl"
                mode="outlined"
                label="Email"
                activeOutlineColor={themeColors.accent_1}
                value={email}
                onChangeText={email => setEmail(email)}
            />
            <TextInput 
                className = "w-11/12 text-xl"
                mode="outlined"
                label="Password"
                secureTextEntry = {true}
                activeOutlineColor={themeColors.accent_1}
                value={password}
                onChangeText={password => setPassword(password)}
            />
            <View className = "w-1/2 pt-10">
                <ButtonWithOnPress 
                onPress = {async () => {
                    const result = await handleSubmit()
                    if (result == "success"){
                        setIsLoading(true)
                        const userInfo = await getAuthStatusAndUserInfo()
                        setUserDTO({
                            email: userInfo.result.email,
                            name: userInfo.result.name
                        })
                        navigation.navigate('CardScreenTabs')
                        setTimeout(() => {
                            setIsLoading(false)
                        }, 200);
                    }
                    else {
                        alert(result)
                    }
                
                    setIsLoading(false)
                }}
                title = "Войти" 
                size = "small" 
                />
            </View>
        </View>
    )
}