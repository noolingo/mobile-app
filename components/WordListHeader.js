
import { Text, View, FlatList, TouchableOpacity } from 'react-native';
import { PlusCircleIcon} from 'react-native-heroicons/micro';
import { useState,useEffect } from 'react';
import fontStyles from '../src/fontStyles';
import { themeColors } from '../theme';
import EmptyCard from './EmptyCard';
import { EditableCardItem } from './EditableCardItem';

export default function WordListHeader( props ){

    const [cardDTO, setCardDTO] = useState({
        text: null,
        translation: null,
        cardID: null
    });

    const addCard = props.addCard

    return (


	    <View className = "w-5/6 justify-center items-center flex-row py-10">
	    	<EmptyCard cardDTOSetter = {setCardDTO} />
	    	<TouchableOpacity 
                onPress={() => {
                    if (cardDTO.text == null || cardDTO.translation == null) {
                        alert("Нельзя добавить пустую карту!")
                        return
                    }
                    addCard({
                            id: cardDTO.cardID,
                            text: cardDTO.text,
                            translation: cardDTO.translation
                        }
                    )
                }
                }
                className = "mt-2 ">
	    		<PlusCircleIcon size="65" color={themeColors.accent_1} style= {{elevation:10}}/>
	    	</TouchableOpacity>
	    </View>
    )
}