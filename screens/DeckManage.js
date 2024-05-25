
import { useState } from 'react';
import {View } from 'react-native';
import TextValueEdit from '../components/TextValueEdit';
import { themeColors } from '../theme';
import WordList from '../components/WordList';
import ButtonWithOnPress from "../components/ButtonWithOnPress";
import { deleteDeck, getDeck, postDeck, putCardInDeck } from '../API/decksAPI';


export default function DeckManage({ route, navigation }) {

    
    console.log(route)
    const [deckName, setDeckName] = useState("Новая колода");
    const deckID = route.params.deckID

    const [cards, setCards] = useState(route.params.cards);
    

    const updateDeckName = async (newName) => {
        setDeckName(newName)

    }
    return(
    <>
    
    <View className = "bg-white flex-1 items-center ">
        <View className= "w-11/12 items-center justify-center h-1/6 rounded-3xl mt-10" style = {{backgroundColor: themeColors.grey, elevation: 20}}>
            <View className = "w-5/6">
                <TextValueEdit value = {deckName} size = {"lg"} setValue = {setDeckName} color = {themeColors.accent_1}/>
            </View>
        </View>
        <WordList navigation={navigation} cards = {cards} setCards = {setCards} deckID = {deckID}/>
        <View className = ' mb-2 mt-4'>
            <ButtonWithOnPress 
                size = "small" 
                title = "Создать колоду"
                onPress = {async () => {
                    const newDeck = await postDeck("", deckName)
                    console.log("Deck posted in btn")
                    for (i = 0; i < cards.length; i++ ){
                        const response = await putCardInDeck(newDeck.deckID, cards[i].id)
                        console.log(response)
                    }

                    const deleteDeckResponse = await deleteDeck(deckID)
                    navigation.navigate("DeckScreen", {refresh: "refreshed"})
                }}
            />
            
        </View>
    </View>
    </>

    )
}


