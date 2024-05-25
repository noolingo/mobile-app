
import { Text, View, TouchableOpacity } from 'react-native';
import dataList from '../data.json'
import { themeColors } from '../theme';
import { SafeAreaView } from 'react-native-safe-area-context';
import { PlusCircleIcon, UserCircleIcon, ClipboardDocumentIcon, deck, Square3Stack3DIcon } from 'react-native-heroicons/micro';
import DeckList from '../components/DeckList';
import fontStyles from '../src/fontStyles';
import { useState } from 'react';
import { postDeck } from '../API/decksAPI';
import { useIsFocused } from '@react-navigation/native';

const Item = ({title, cardAmount, navigation}) => (
  <TouchableOpacity className = 'w-full items-center'
  onPress={ () => {
    navigation.navigate("DeckLearning", {name: title})
  }}>
    <View className = "my-2 bg-lighterGrey rounded-lg flex-row items-center justify-between py-3 w-11/12" style = {{elevation: 10}}>
      <Text className = "ml-3 text-3xl text-accent_1" >{title}</Text> 
      <Text className = "mr-3 text-2xl text-white">{cardAmount}</Text>
    </View>
  </TouchableOpacity>
);



export default function DecksScreen( {route, navigation}) {

	const isFocused = useIsFocused()
  return (
	isFocused?
    <>
	<Text> {route.refresh }</Text>
    <SafeAreaView className = "bg-white flex-1 items-center ">
        <View className = "bg-grey w-full h-32 flex-row justify-around items-center">
          <Text className = "text-white text-5xl ml-2"                     
          style = {fontStyles.CygreExtraBold}>Колоды</Text>
          <Square3Stack3DIcon size = "80" color = {"white"}/>
        </View>

        <DeckList 
        navigation={navigation}
        headerComponent = { <></> }  
        footerComponent = {
			<TouchableOpacity className = "mt-2 mb-10"
                onPress={ async () => {
					const response = await postDeck("", "Новая колода")
					console.log(response)
					navigation.navigate("DeckManage", 
					{
						cards: [],
						deckID: response.deckID
					}
					)
					console.log("Deck posted in deckscreen")
					}}>
            	<PlusCircleIcon size="65" color={themeColors.accent_1}/>
            </TouchableOpacity>}
		/>
    </SafeAreaView>
    </>
	:
	<></>
  )
}