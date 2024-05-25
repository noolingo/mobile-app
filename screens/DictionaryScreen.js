import { useState, useEffect } from 'react';
import { Text, View, Keyboard, TouchableWithoutFeedback } from 'react-native';
import EmptyCard from '../components/EmptyCard';
import AddCardToDeck from '../components/AddCardToDeck';
import Animated, {useSharedValue, useAnimatedStyle,  withSpring, withDelay } from 'react-native-reanimated';
import { useWindowDimensions } from 'react-native';
import fontStyles from '../src/fontStyles';
import { LanguageIcon } from 'react-native-heroicons/micro';
import { SafeAreaView } from 'react-native-safe-area-context';
import ButtonWithOnPress from '../components/ButtonWithOnPress';


export default function DictionaryScreen({navigation}) {
    const [cardDTO, setCardDTO] = useState({
        text: null,
        translation: null,
    });
    const [overlayVisible, setOverlayVisible] = useState(true);
    const {height, width} = useWindowDimensions();
    

    function toggleOverlay(){
        if (!cardDTO.text || !cardDTO.translation) {
            alert ("Введите текст!")
            return
        }
        setOverlayVisible(!overlayVisible)
    }
    // Animation 
    const position = useSharedValue(height)
    const reanimatedStyle = useAnimatedStyle(() => {
      return {
        transform: [{translateY: position.value}]
      }
    }, [])
  
  
    useEffect(() => {
        position.value = withSpring(overlayVisible * height, {stiffness: 30, mass:0.3})

    }, [overlayVisible])

    
    return (
        <>
        <SafeAreaView className = "bg-white flex-1 items-center ">
            <View className = "bg-grey w-full h-32 flex-row justify-around items-center">
                <Text className = "text-white p-5 text-4xl ml-2"                     
                style = {fontStyles.CygreExtraBold}>Словарь</Text>
                <LanguageIcon size = "80" color = {"white"}/>
            </View>
            <TouchableWithoutFeedback onPress={Keyboard.dismiss} accesible={false}>
                <View className=  "bg-white flex-1 w-full items-center justify-center">
                    <EmptyCard cardDTOSetter = {setCardDTO} />
                    <View className = "mt-10 w-3/4">
                        <ButtonWithOnPress 
                            title = "Добавить в колоду" 
                            onPress={ () => {
                                Keyboard.dismiss()
                                toggleOverlay()}}
                            size = "small"
                            />
                    </View>
                    <Animated.View className = "absolute top-10 w-screen" style = {reanimatedStyle}>
                        <AddCardToDeck cardDTO = {cardDTO} navigation={ navigation } toggleOverlay = {toggleOverlay} /> 
                    </Animated.View> 
                </View>
            </TouchableWithoutFeedback>
        </SafeAreaView>
        
        </>
    );
}