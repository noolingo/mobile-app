import { SafeAreaView, Text, View } from "react-native"
import { useEffect, useState } from "react"
import CardsSwipeList from "../components/CardsSwipeList"
import fontStyles from "../src/fontStyles"
import { getAccessToken } from "../utility/AccessToken"
import { getDeck } from "../API/decksAPI"
import { getCardById } from "../API/cardsAPI"

export default function DeckLearning({route, navigation}) { 
    const { name } = route.params
    const {deckId} = route.params
    const [cardIndex, setCardIndex] = useState(0);


    const [deck, setDeck] = useState([]);
    
    const loadCards = async (cardIDS) => {
        let cards = []
        for (i = 0; i < cardIDS.length; i++){
            const card = await getCardById(cardIDS[i])
            console.log(card)
            const cardFormatted = {
                text: card.cards[0].eng,
                translation: card.cards[0].rus,
            }
            console.log(cardFormatted)
            cards.push(cardFormatted)
        }
        setDeck(cards)
    }

    useEffect(()=> {
        const loadDeck = async () => {
            const response = await getDeck(deckId)
            const ids = response.cardIds
            console.log(ids)
            console.log(response)
            loadCards(response.cardIds)
        }

        loadDeck()
        
        console.log("deck is")
        console.log(deck)
    }, [])

    return (
            <SafeAreaView className = "bg-grey flex-1 items-center">           
                <View className = "h-1/6 items-center justify-center"> 
                    <Text className =" text-white text-3xl sm:text-5xl   p-4 pt-6 rounded-xl" style = {fontStyles.CygreExtraBold}> {name} </Text>
                </View>

                <CardsSwipeList deck = {deck} cardIndex = {cardIndex} setCardIndex = {setCardIndex}/>
                <View className = " justify-end">
                    <Text className =" text-white/50 text-2xl  p-4 pt-6 rounded-xl" style = {fontStyles.CygreExtraBold}> {`Noolingo`} </Text>

                </View>
            </SafeAreaView>
        
    )
}