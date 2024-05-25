
import { useContext, useEffect, useState } from 'react';
import {View, SafeAreaView, StyleSheet, Text} from 'react-native';
import { UserDTOContext } from '../UserDTOContext';
import SelectDropdown from 'react-native-select-dropdown';
import DropdownChoice from '../components/DropdownChoice';
import { SettingsContext } from '../contexts/SettingsContext';
import fontStyles from '../src/fontStyles';

export default function SettingsScreen() {

    const {settings, setSettings} = useContext(SettingsContext)

    const [theme, setTheme] = useState("light");
    


    const themes = [
        {title: 'Dark'},
        {title: 'Light'},
      ];

    useEffect( () => {
        setSettings((prev) => ({...prev, theme: theme}))
    }, [theme])
    return(
    <>
        <SafeAreaView className = "bg-white flex-1">
            <View className = "form my-12 space-y-2 w-full items-center ">
                <View className = "w-11/12 ">
                    <View className= "flex-row items-center justify-between">
                    <Text className = "text-3xl" style = {[fontStyles.CygreExtraBold]}>Тема:</Text>
                        <DropdownChoice data = {themes} setSelectedValue = {setTheme}/>
                    </View>
                </View>
                <View className = "bg-black/25 w-11/12 h-1 rounded-xl" />
            </View>
        </SafeAreaView>
    </>
    )
}

const styles = StyleSheet.create({
    dropdownButtonStyle: {
      width: 200,
      height: 50,
      backgroundColor: '#E9ECEF',
      borderRadius: 12,
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      paddingHorizontal: 12,
    },
    dropdownButtonTxtStyle: {
      flex: 1,
      fontSize: 18,
      fontWeight: '500',
      color: '#151E26',
    },
    dropdownButtonArrowStyle: {
      fontSize: 28,
    },
    dropdownButtonIconStyle: {
      fontSize: 28,
      marginRight: 8,
    },
    dropdownMenuStyle: {
      backgroundColor: '#E9ECEF',
      borderRadius: 8,
    },
    dropdownItemStyle: {
      width: '100%',
      flexDirection: 'row',
      paddingHorizontal: 12,
      justifyContent: 'center',
      alignItems: 'center',
      paddingVertical: 8,
    },
    dropdownItemTxtStyle: {
      flex: 1,
      fontSize: 18,
      fontWeight: '500',
      color: '#151E26',
    },
    dropdownItemIconStyle: {
      fontSize: 28,
      marginRight: 8,
    },
  });
