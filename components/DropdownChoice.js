
import { useContext } from 'react';
import {View, SafeAreaView, StyleSheet, Text} from 'react-native';
import { UserDTOContext } from '../UserDTOContext';
import SelectDropdown from 'react-native-select-dropdown';
import { ChevronDownIcon, ChevronUpIcon } from 'react-native-heroicons/micro';

export default function DropdownChoice(props) {

    const data = props.data
    const setSelectedValue = props.setSelectedValue
    
    return(
    <>
            <SelectDropdown
                data={data}
                onSelect={(selectedItem, index) => {
                    setSelectedValue(selectedItem.title)
                }}
                renderButton={(selectedItem, isOpened) => {
                return (
                    <View style={styles.dropdownButtonStyle}>
                    <Text style={styles.dropdownButtonTxtStyle}>
                        {(selectedItem && selectedItem.title) || 'Выберите тему'}
                    </Text>
                    {isOpened? 
                    <ChevronUpIcon size = {30} color = {"black"}/>:
                    <ChevronDownIcon size = {30} color = {"black"}/>}
                    </View>
                );
                }}
                renderItem={(item, index, isSelected) => {
                return (
                    <View style={{...styles.dropdownItemStyle, ...(isSelected && {backgroundColor: '#D2D9DF'})}}>
                    <Text style={styles.dropdownItemTxtStyle}>{item.title}</Text>
                    </View>
                );
                }}
                showsVerticalScrollIndicator={false}
                dropdownStyle={styles.dropdownMenuStyle}
        />
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
