
import { TextInput } from 'react-native-paper';
import { useContext, useEffect, useState } from 'react';
import { Text, View, Alert } from 'react-native';
import fontStyles from '../src/fontStyles';
import { SafeAreaView } from 'react-native-safe-area-context';
import { UserCircleIcon, PencilSquareIcon, CheckIcon } from "react-native-heroicons/micro"
import { UserDTOContext } from '../UserDTOContext';
import { TouchableOpacity } from 'react-native-gesture-handler';
import ChangeUserDTOField from '../components/ChangeUserDTOField';
import { setAccessToken } from '../utility/AccessToken';
import { useNavigation } from '@react-navigation/native';

export default function ProfileScreen() {

    const {userDTO, setUserDTO} = useContext(UserDTOContext)

    const navigation = useNavigation();
    
    const updateContextName = (name) => {
        setUserDTO((prev) => ({...prev, name: name}))
    }
    const updateContextEmail = (email) => {
        setUserDTO((prev) => ({...prev, email: email}))
    }
    return(
    <>
      <SafeAreaView className = "bg-white flex-1 items-center ">
            <View className = "bg-grey w-full h-32 flex-row justify-around items-center">
                <Text className = "text-white text-5xl ml-2"                     
                style = {fontStyles.CygreExtraBold}>Профиль</Text>
                <UserCircleIcon  size = "80" color={"white"} />
            </View>
            <View className = "flex-1  my-12 space-y-2 w-full  items-center justify-between">
                <View className = "w-11/12 ">
                    <ChangeUserDTOField updateDTO = {updateContextEmail} field = "Email" initialValue = {userDTO.email}/>
                    <ChangeUserDTOField updateDTO = {updateContextName} field = "Имя" initialValue = {userDTO.name}/>
                </View>
                <TouchableOpacity
                    onPress={() => {
                        setAccessToken("")
                        navigation.navigate('Welcome')
                    }}>
                    <Text 
                        className = {`h-10 text-center  ml-3  text-2xl mt-1 border-black/50`}
                        style = {fontStyles.CygreExtraBold}>
                            Выйти 
                    </Text>
                </TouchableOpacity>
            </View>
      </SafeAreaView>
    </>
    )
}


