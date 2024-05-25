


import { useContext, useEffect, useState } from 'react';
import {TextInput, Text, View, SafeAreaView, Alert } from 'react-native';
import fontStyles from '../src/fontStyles';
import { UserCircleIcon, PencilSquareIcon, CheckIcon } from "react-native-heroicons/micro"
import { UserDTOContext } from '../UserDTOContext';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { themeColors } from '../theme';

export default function TextValueEdit(props) {

    const [isEditingValue, setIsEditingValue] = useState(false);
    const value = props.value
    const setValue = props.setValue
    const size = props.size? props.size : "small"

    const toggleEditingvalue = () => {
        if (!isEditingValue){ 
            setIsEditingValue(true)
            return
        }
        setIsEditingValue(false)
        
    }

    return(
    <>
    <View className = "flex-row w-full justify-between items-center" >
        {isEditingValue? 
            <TextInput 
                className = {` p-2 w-5/6  ${size=="small" ? "text-2xl" : "text-4xl"} mt-1 border-2 rounded-lg border-black/50`}
                style = {[fontStyles.CygreRegular, props.color? {color: props.color} : {}]}
                placeholder="Enter your value"
                value={value}
                onChangeText={ (text) => setValue(text) }
            /> :
            <Text 
                className = {`ml-3 ${size=="small" ? "text-2xl" : "text-4xl"} w-5/6 mt-1  border-black/50`}
                style = {[fontStyles.CygreRegular, props.color? {color: props.color} : {}]}>
                    {value} 
            </Text>
            }
            <TouchableOpacity 
            onPress={toggleEditingvalue}
            >
                { isEditingValue? 
                    <CheckIcon  size = "40" color={"white"} />
                    :
                    <PencilSquareIcon size = "40" color={"white"} style= {{marginTop:1}}/>
                }
            </TouchableOpacity>
    </View>   
    </>
    )
}


