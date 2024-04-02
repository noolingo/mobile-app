import { Button, SafeAreaView, Text, View, ViewBase } from "react-native";
import { TextInput } from "react-native";
import { useContext, useState } from "react";
import { themeColors } from "../theme";

export default function SignUpScreen() {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [userSignUpDTO, setUserSignUpDTO] = useState({
        name: "dummy",
        email: "1213@gmail.com",
        password: "password",
    });
    
    

    function handleSubmit(){
        if ( name === "" || email === "" || password === "") { throw new Error("Not all fields filled!") };

        setUserSignUpDTO({
            name: name,
            email: email,
            password: password,
        })
    }
    

    return (
        <SafeAreaView className = "flex-1 justify-end items-center" style = {{backgroundColor: themeColors.primary}}>

            <View className = "flex-1 justify-center">
                <Text className = "text-4xl font-bold text-center" style = {{color: themeColors.accent_2}}> Sign in</Text>
            </View>

            <View className = "flex-3 justify-start items-center bg-white w-full h-3/4 r-5 rounded-tr-3xl r-5 rounded-tl-3xl" > 
                <View className = "form my-12 space-y-2 w-full items-center">

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
                    onPress={ () => {
                        try{handleSubmit()}
                        catch (e){
                            alert(e);
                        }}}/>

                    <Text> {userSignUpDTO.name} </Text>
                </View>
            </View>
        </SafeAreaView>
    )
}