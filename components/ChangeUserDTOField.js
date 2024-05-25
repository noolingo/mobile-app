


import { useContext, useEffect, useState } from 'react';
import {Text, View, SafeAreaView, Alert } from 'react-native';
import fontStyles from '../src/fontStyles';
import { UserCircleIcon, PencilSquareIcon, CheckIcon } from "react-native-heroicons/micro"
import { UserDTOContext } from '../UserDTOContext';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { themeColors } from '../theme';
import { TextInput } from 'react-native-paper';

export default function ChangeUserDTOField(props) {
    const updateDTO = props.updateDTO
    let initialValue = props.initialValue
    const field = props.field

    const [isEditingValue, setIsEditingValue] = useState(false);
    const [value, setValue] = useState(initialValue);

    const toggleEditingvalue = () => {
        if (!isEditingValue){ 
            setValue(initialValue)
            setIsEditingValue(true)
            return
        }
        if (value.toString() == initialValue){
            setIsEditingValue(false)
            return
        }
        Alert.alert(`Подтвердите смену ${field} на ${value.toString()}?`, "", [
            {
                text: "Cancel",
                onPress: () => {
                    setValue(initialValue)
                    setIsEditingValue(false)
                }
            },
            {
                text: "Подтвердить",
                onPress: () => {
                    updateDTO( value )
                    initialValue = value
                    setValue(initialValue)
                    setIsEditingValue(false)
                    return
                }
            }
        ])
        
    }
    return(
    <>
                    <Text className = "text-xl text-accent_1 ml-3" style = {fontStyles.CygreExtraBold}>
                        {`${field}`}
                    </Text>
                    <View className = "flex-row justify-between">
                        {isEditingValue? 
                            <TextInput 
                                className = "h-10 w-5/6 text-2xl mt-1 border-2 rounded-lg border-black/50" 
                                mode = "outlined"
                                style = {fontStyles.CygreRegular}
                                placeholder=""
                                value={value}
                                onChangeText={ (text) => setValue(text) }
                            /> :
                            <Text 
                                className = {`h-10  ml-3  text-2xl mt-1  border-black/50`}
                                style = {fontStyles.CygreRegular}>
                                    {value} 
                            </Text>
                            }
                            <TouchableOpacity 
                            onPress={toggleEditingvalue}
                            >
                                { isEditingValue? 
                                    <CheckIcon  size = "40" color = {themeColors.grey} style= {{marginTop:10}}/>
                                    :
                                    <PencilSquareIcon size = "40" color = {themeColors.grey} />
                                }
                            </TouchableOpacity>
                    </View>   
    </>
    )
}


