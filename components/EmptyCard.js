import { useState } from 'react';
import {TextInput, Text, View, TouchableOpacity } from 'react-native';
import fontStyles from '../src/fontStyles';
import { getEngCard } from '../API/cardsAPI';

export default function EmptyCard( props ){
    const [initialText, setInitialText] = useState("");
    const [translatedText, setTranslatedText] = useState("Попробуйте что нибудь перевести!");
    const [isLoading, setIsLoading] = useState(true);
    
    
    handleTranslate = async () => {
        setIsLoading(true)
        if ( initialText === "" ) { 
            setTranslatedText("здесь будет перевод")
            props.cardDTOSetter({
                text: null,
                translation: null,
                cardID: null,
            })
            return
        };
        const cardInfo = await getEngCard(initialText);
        if( cardInfo.error) {
            console.log("catching error")
            console.log(cardInfo.error)
            setTranslatedText("Не переводится(")
            setIsLoading(false)
            return
        }
        const card = cardInfo.cards[0]
        setTranslatedText(card.eng)
        props.cardDTOSetter({
            text: initialText,
            translation: card.eng,
            cardID: card.id
        })
        setIsLoading(false)
    }
        
    checkIfWordChanged = (value) => {
        return (initialText === value)
    }

    return (
        <>
            <View className = " bg-grey/95  border-4 border-accent_1 rounded-3xl w-11/12 items-start justify-center pb-6" style = {{elevation:13}}>
                <View className = "w-11/12 ">
                        <TextInput 
                        className = {`w-full ml-3 p-4 text-3xl mt-5 border-2 rounded-lg border-white/50 ${initialText === "" ? "text-white/50" : "text-white/50"}`}
                        style= {[initialText === ""? fontStyles.CygreRegular : fontStyles.CygreExtraBold, {color: "white"}]}
                        placeholderTextColor={"white"}
                        placeholder="слово"
                        value={initialText} 
                            onChangeText={ async (value) => {
                                setInitialText(v => value)
                                setTimeout(() => {
                                    if (checkIfWordChanged(value)) {
                                        try{
                                            handleTranslate();
                                        } catch (err) { 
                                            alert(err)
                                        }
                                    }
                                }, 500);
                            }}  
                        />
                </View>
                <Text className = {`text-xl ${isLoading? "text-white/20 bg-accent_1/40" : "text-white bg-accent_1"}  mx-2 ml-3 p-3 mt-6 rounded-3xl text-center` }style={fontStyles.CygreRegular}> {!isLoading? `${translatedText}` : "перевод"} </Text>

            </View>
        </>
    )
}