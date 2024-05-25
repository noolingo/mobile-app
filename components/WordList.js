
import { Text, View, FlatList, TouchableOpacity } from 'react-native';
import { PlusCircleIcon} from 'react-native-heroicons/micro';
import { useEffect, useState } from 'react';
import fontStyles from '../src/fontStyles';
import { themeColors } from '../theme';
import EmptyCard from './EmptyCard';
import { EditableCardItem } from './EditableCardItem';
import WordListHeader from './WordListHeader';
import { deleteCardFromDeck, getDeck, putCardInDeck } from '../API/decksAPI';

export default function WordList( { navigation, ...props} ){
    const headerComponent = props.headerComponent
    const footerComponent = props.footerComponent
	const deckID = props.deckID
	const cards = props.cards
	const setCards = props.setCards
	
	const [newWordDTO, setNewWordDTO] = useState({
		text: null,
        translation: null,
	});


	const addCard = async (newCard) => {
		const response = await putCardInDeck(deckID, newCard.id)
		setCards([newCard, ...cards])

		const checkAdded = await getDeck(deckID)
		console.log("adding card:")
		console.log(newCard)
	}


	const deleteCard = async (id, cardID) => {
		const response = await deleteCardFromDeck(deckID, cardID)
		setCards( cards.filter( (card) => card.id != id))
	}
    return (
        <>
        <FlatList
			data={cards}
			contentContainerStyle = {{
				alignItems: "center",
				borderRadius: 20,
				paddingTop:10,
			
			}}
			renderItem={({item}) => {
			return(
			<EditableCardItem deleteCard = {deleteCard} id ={item.id} text={item.text} translation={item.translation}/>
			)
			}}  
			keyExtractor={item => item.id}
			ListEmptyComponent={
				<Text className = "text-xl text-center text-white p-10  bg-lighterGrey rounded-lg mb-10  " style = {fontStyles.CygreRegular}>Эта колода пустая. Попробуйте добавить какое нибудь слово!</Text>
				}
			ListHeaderComponent={ 
				headerComponent? 
				headerComponent: 
				<View className = "w-screen items-center">
					<WordListHeader addCard = {addCard} cards = {cards} setCards = {setCards} />
				</View>
			}
			ListFooterComponent={
				footerComponent? 
				footerComponent :  
				
				<></>
			}
			/>
        </>
    )
}