
import { Text, View, FlatList, TouchableOpacity } from 'react-native';
import { PlusCircleIcon } from 'react-native-heroicons/micro';
import { useEffect } from 'react';
import fontStyles from '../src/fontStyles';
import { getDeckList } from '../API/decksAPI';
import { useState } from 'react';
import { ActivityIndicator } from 'react-native-paper';




export default function DeckList( { navigation, ...props} ){

    const headerComponent = props.headerComponent
    const footerComponent = props.footerComponent
	const [deckList, setDeckList] = useState([]);
	const [isLoaded, setIsLoaded] = useState(false);
	
	useEffect(() => {
		const loadDecks = async() => {
			try{
				const lst = await getDeckList();
				setDeckList(lst.decks)
			} catch (e){
				console.log(e)
			} finally {
				setIsLoaded(true)
			}
		}
		loadDecks()

	}, [])

    const Item = ({title, cardAmount, deckId, navigation}) => (
        <TouchableOpacity className = 'w-full items-center'
        onPress={ () => {
          navigation.navigate("DeckLearning", {name: title, deckId: deckId})
        }}>
          <View 
          className = "my-2 bg-grey rounded-lg flex-row items-center justify-between py-3 w-10/12" style = {{elevation: 10}}
          >
            <Text className = "ml-3 w-5/6 max-w-20 flex-3 text-3xl text-accent_1" style= {fontStyles.CygreRegular}>{title}</Text> 
            <Text className = "mr-3 w-1/6 text-2xl text-right text-white" style= {fontStyles.CygreRegular}>{cardAmount}</Text>
          </View>
        </TouchableOpacity>
      
      );
    return (
		!isLoaded? 
		<ActivityIndicator/>
		:
		
        <>
        <FlatList
			data={deckList}
			contentContainerStyle = {{
				alignItems: "center",
				borderRadius: 20,
				paddingTop:10,
			
			}}
			renderItem={({item}) => {
			console.log(item)
			return(
			<Item title={item.name} cardAmount={item.cardAmount} deckId = {item.id} navigation={navigation}/>
			)
			}}  
			ItemSeparatorComponent={<View className = 'w-full h-1 bg-white rounded-sm opacity-5'/>}
			keyExtractor={item => item.id}
			ListEmptyComponent={
				<Text className = "text-xl text-center text-white p-5 bg-lighterGrey rounded-lg my-24  " style= {fontStyles.CygreRegular}>{`Как то тут пусто :(\nСкорее создай свою первую колоду!`}</Text>
				}
			ListHeaderComponent={ 
				headerComponent? 
				headerComponent: 
				<Text> Cards </Text>}
			ListFooterComponent={
				footerComponent? 
				footerComponent :    
				<TouchableOpacity className = "mt-2 "
					onPress={ () => navigation.navigate("DeckManage", {refresher: setRefresh})}>
					<PlusCircleIcon size="65" color={themeColors.accent_1}/>
				</TouchableOpacity>}
				
			/>
        </>
    )
}