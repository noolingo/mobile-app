import { ActivityIndicator, Button, SafeAreaView, Text, View, ViewBase } from "react-native";
import { TextInput } from "react-native";
import { useContext, useEffect, useState } from "react";
import { themeColors } from "../theme";
import { postSignUp } from "../UserAPI";
import { UserDTOContext } from "../UserDTOContext";


export default function SignUpScreen() {
    userDTO = useContext(UserDTOContext)
    
    const [isLoading, setIsLoading] = useState(false)
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [userSignUpDTO, setUserSignUpDTO] = useState({
        name: "dummy",
        email: "1213@gmail.com",
        password: "password",
    })
    
    const sendSignUp = async (data) => {
        return response = await (postSignUp(data))
    }

    const handleSubmit = async () => {
        setIsLoading(true)
        if ( name === "" || email === "" || password === "") { throw new Error("Not all fields filled!") };

        setUserSignUpDTO(prevDTO => ({
            name: name,
            email: email,
            password: password,
        }))

        const response = await sendSignUp({
            name: name,
            email: email,
            password: password,
        })

        console.log(response)
        setIsLoading(false)
        
    }

    if (isLoading) return(
        <SafeAreaView className = "flex-1 justify-end items-center " style = {{backgroundColor: themeColors.secondary}}>

            <View className = "flex-1 justify-center">
                <Text className = "text-4xl font-bold text-center" style = {{color: themeColors.accent_1}}> Sign up </Text>
            </View>

            <View className = " justify-start items-center bg-white w-full h-3/4 r-5 rounded-tr-3xl r-5 rounded-tl-3xl" > 
                <ActivityIndicator size={"large"} className = 'my-32'/> 
            </View>
        </SafeAreaView>
    )

    return (
        <SafeAreaView className = "flex-1 justify-end items-center w-full" style = {{backgroundColor: themeColors.secondary}}>

            <View className = "flex-1 justify-center items-center w-full">
                <Text className = "text-4xl font-bold text-center bg-white w-1/2" style = {{color: themeColors.accent_1}}> Sign up </Text>
            </View>
            <View  className = " justify-start items-center bg-white w-full h-3/4 r-5 rounded-tr-3xl r-5 rounded-tl-3xl" > 
                <View className = "form my-12 space-y-2 w-full items-center">
                    <Text > Name </Text>
                    <TextInput 
                    className = "p-4 w-11/12 bg-gray-100 text-gray-700 ml-2 my-5" 
                    placeholder="Enter your name"
                    value={name} 
                    onChangeText={ setName } />

                    <Text > Email </Text>
                    <TextInput 
                    className = "p-4 w-11/12 bg-gray-100 text-gray-700 ml-2 my-5" 
                    placeholder="Enter your email"
                    value={email} 
                    onChangeText={ setEmail } />

                    <Text className = "mt-5"> Password </Text>
                    <TextInput 
                    className = "p-4 w-11/12 bg-gray-100 text-gray-700 ml-2 my-5" 
                    placeholder="Enter your password"
                    secureTextEntry
                    value={password} 
                    onChangeText={ setPassword } />

                    <Button 
                    className= "mt-5 px-12 rounded-5xl" 
                    style= {{backgroundColor: themeColors.accent_2}} 
                    title = "Submit"
                    disabled = {isLoading}
                    onPress={ () => {
                        try{
                            handleSubmit()
                            .catch((e) =>{
                                alert(e)
                                setIsLoading(false)
                            }
                            )
                        }
                        catch (e){
                            setIsLoading(false)
                        }}}/>

                    <Text> {userSignUpDTO.name} </Text>
                </View>
            </View>
        </SafeAreaView>
    )
}