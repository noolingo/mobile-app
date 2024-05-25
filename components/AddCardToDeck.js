import { Text, View, TouchableOpacity} from 'react-native';
import Card from './Card';
import DeckList from './DeckList';
import { ArrowLeftCircleIcon} from 'react-native-heroicons/micro';
import fontStyles from '../src/fontStyles';


export default function AddCardToDeck({navigation , ...props}) {
    
    return (
        <>
                <View className = {` bg-lighterGrey low rounded-3xl w-screen h-2/3 items-center space-y-5`}>   
                        <TouchableOpacity className = "bg-lighterGrey w-screenabsolute left-2 top-2 z-20"
                            onPress={() => {
                                
                                props.toggleOverlay()
                            }}>
  
                            <ArrowLeftCircleIcon size = "55" color="white" />
                        </TouchableOpacity> 


                        <View className = ''>
                        <DeckList headerComponent = {
                            <View className = "w-11/12">
                                <Card 
                                    text = {props.cardDTO.text}
                                    translation = {props.cardDTO.translation}
                                    transcription = "|həˈləʊ|"
                                />
                                <Text className = "text-center font-bold text-white my-2 text-xl" style = {fontStyles.CygreExtraBold}> Выберите колоду:  </Text>
                            </View>
                        } 
                        navigation={navigation}
                        footerComponent = {
                            <>
                            <View className = "h-screen">
                                <TouchableOpacity className = "mt-2 h-96"
                                    onPress={ () => navigation.navigate("DeckManage", {
                                        cards: [{
                                            id: 0,
                                            text: props.cardDTO.text,
                                            translation: props.cardDTO.translation
                                        }]
                                    })}>
                                    <Text> </Text>
                                    <Text className = "text-white/50 text-3xl ml-2"                     
                                    style = {fontStyles.CygreExtraBold}>Новая колода</Text>
                                </TouchableOpacity>

                            </View>
                            </>
                        }/> 
                        </View>
                </View>
        </>
    );
}