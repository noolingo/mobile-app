import { View} from "react-native";
import { useContext, useState } from "react";
import { getAuthStatusAndUserInfo, postSignIn, postSignUp } from "../API/userAPI";
import { UserDTOContext } from "../UserDTOContext";
import TextInputWithHeader from "./TextInputWithHeader";
import ButtonWithOnPress from "./ButtonWithOnPress";
import { TextInput } from "react-native-paper";
import { themeColors } from "../theme";
import { useNavigation } from "@react-navigation/native";
import { setAccessToken } from "../utility/AccessToken";


export default function SignUpForm( props ) {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [repeatedPassword, setRepeatedPassword] = useState("");
    const [passwordsMatch, setPasswordsMatch] = useState(false);
    

    const {userDTO, setUserDTO} = useContext(UserDTOContext)
    const setIsLoading = props.setIsLoading
    const navigation = useNavigation()
    
    const handleSubmit = async () => {
        setIsLoading(true)
        if ( name === "" || email === "" || password === "" || repeatedPassword==="") { return ("Не все поля заполнены!") };
        
        const response = await postSignUp({
            name: name,
            email: email,
            password: password,
            repeatedPassword: repeatedPassword
        })

        if(password != repeatedPassword){
            return "Пароли не совпадают!"
        }
        if(response.error != null){
            if (response.error.ErrorText.includes("1062")){
                return "Пользователь с таким email уже существует!"
            } 
            return response.error.ErrorText
        }

        const loginResponse = await postSignIn({
            email: email,
            password: password,
        })
        setAccessToken(loginResponse.accessToken)

        
        setIsLoading(false)       
        return ("success")
    }

    return (
            <View className = "form my-12 space-y-5 w-full items-center ">
                <TextInput 
                    className = "w-11/12 text-xl"
                    mode="outlined"
                    label={"Имя"} 
                    activeOutlineColor={themeColors.accent_1}
                    value = {name}
                    onChangeText={name => {setName(name)}}
                 />
                <TextInput 
                    className = "w-11/12 text-xl"
                    mode="outlined"
                    label={"Email"} 
                    activeOutlineColor={themeColors.accent_1}
                    value = {email}
                    onChangeText={email => {setEmail(email)}}
                 />
                <TextInput 
                    className = "w-11/12 text-xl"
                    mode="outlined"
                    label={"Пароль"} 
                    activeOutlineColor={themeColors.accent_1}
                    secureTextEntry= {true}
                    value = {password}
                    onChangeText={password => {
                        setPasswordsMatch(password == repeatedPassword)
                        setPassword(password)
                    }}
                 />
                <TextInput 
                    className = "w-11/12 text-xl"
                    mode="outlined"
                    label={"Повторите пароль"} 
                    activeOutlineColor={password==repeatedPassword && repeatedPassword!= "" ? "#50C878" : "red"}
                    outlineColor={ password==repeatedPassword && repeatedPassword!= "" ? themeColors.accent_1 : "red"}
                    secureTextEntry= {true}
                    value = {repeatedPassword}
                    onChangeText={repeatedPassword => {
                        setPasswordsMatch(password == repeatedPassword)
                        setRepeatedPassword(repeatedPassword)
                    }}
                 />
                <View className = "h-10"/>
                <ButtonWithOnPress onPress = {async () => {
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
                    }
                }
                title = "Зарегистрироваться" size = "small"/>
            </View>
    )
}