import { useCallback, useState} from "react";
import { useFonts } from "expo-font"
import { View, Text, useWindowDimensions } from "react-native"
import fontStyles from "../src/fontStyles";
import Animated, { Extrapolation, interpolate, useAnimatedStyle, useSharedValue, withDecay, withDelay, withSpring } from "react-native-reanimated";
import { Gesture, GestureDetector } from "react-native-gesture-handler";
import ButtonWithOnPress from "./ButtonWithOnPress";

export default function Component( props ){
    const text = props.text
    const translation = props.translation
    const transcription = props.transcription

    const translateX = props.translateX
    const index = props.index 
    const {width, height} = useWindowDimensions()
    const [translationHidden, setTranslationHidden] = useState(true);
    const [textVisible, setTextVisible] = useState(true);
    

    const cardRStyle = useAnimatedStyle(() => {

        const scale = interpolate(
            translateX.value,
            [(index - 1) * width, index * width, (index + 1) * width],
            [0, 1, 0],
            Extrapolation.CLAMP
        )
        const rotation = interpolate(
            translateX.value,
            [(index - 1) * width, index * width, (index + 1) * width],
            [90, 0, -90],
            Extrapolation.CLAMP
        )
        return { 
            transform: 
            [
                {scale},
                {rotateZ: `${rotation.toString()}deg`}
            ]
        }
    })

    const isTextVisible = useSharedValue(true)
    const isDraggingText = useSharedValue(false) 
    const textOffset = useSharedValue(0)

    const textRStyle = useAnimatedStyle(() => {
        return { 
            transform: [
                { translateX: withSpring(textOffset.value, {stiffness: 50, mass: 0.2,})}, 
                { scale: withSpring(isDraggingText.value ? 1.04 : 1, {stiffness: 50, mass: 0.2,})}, 
                
              ],
            opacity:  withSpring(textVisible ? 1 : 0),
        }
    })
    const start = useSharedValue(0)

    const textPanGesture = Gesture.Pan()
        .onBegin(() => {
            isDraggingText.value = true

        })
        .onUpdate((e) => {
            textOffset.value = e.translationX + start.value
        })
        .onEnd(() => {
            textOffset.value = start.value
        })
        .onFinalize(() => {
            isDraggingText.value = false
        })

    return (
        <>
            <Animated.View className = " bg-grey border-4 border-accent_1  rounded-3xl min-w-11/12 w-11/12 items-center justify-between min-h-1/2 z-40 h-5/6 overflow-hidden " style = {cardRStyle}>
                        {index == 0? 
                        <Text className = " text-white/50 text-center mt-2 text-xl z-20 " style = {fontStyles.CygreExtraBold}>Потяните за текст, чтобы увидеть перевод </Text> 
                        :
                         <Text className = " text-3xl text-white/50 mt-6" style = {fontStyles.CygreRegular}>{`Карта ${index+1}`}</Text>}
                    <View className= "flex-1 w-full items-center">    
                        <View className = "absolute justify-center flex-row items-center h-full w-11/12 overflow-hidden z-30">
                            <GestureDetector gesture={ textPanGesture }>
                                <Animated.View className = " bg-accent_1 overflow-hidden w-11/12 h-1/2 z-30 items-center justify-center rounded-md" style = {textRStyle}>
                                        <Text className = " text-white text-center  text-3xl z-20 " style = {fontStyles.CygreExtraBold}>{`${text}`} </Text>
                                </Animated.View>
                            </GestureDetector>
                        </View>
                        <View className = "absolute items-center justify-center h-full w-11/12 max-w-10 z-10">
                            <View className = "w-11/12 items-center justify-center h-2/3 overflow-scroll">
                                <Text className = "text-4xl  bg-accent_2 rounded-xl z-10 " style = {fontStyles.CygreRegular} > {`${translation}`} </Text>
                            </View>
                        </View>
                    </View>
                    <View className = "mb-5 z-50">
                        <ButtonWithOnPress 
                            title = {`${textVisible ? "Показать перевод" : "Скрыть перевод"}`}
                            size = "small" 
                            onPress = {() => {
                                console.log(isTextVisible.value)
                                setTextVisible(prev => !prev)
                            }}/> 
                    </View>
                </Animated.View>
        </>
            
    )
}
