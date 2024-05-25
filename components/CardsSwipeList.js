import {  View,  useWindowDimensions } from "react-native"
import CardWithReveal from "./CardWithReveal"
import Animated, { useAnimatedScrollHandler, useSharedValue} from "react-native-reanimated"

export default function CardsSwipeList( props ) { 

    const {width, height} = useWindowDimensions()    
    const translateX = useSharedValue(0)
    const setCardIndex = props.setCardIndex
    const scrollHandler = useAnimatedScrollHandler((event) => {
        try{
            translateX.value = event.contentOffset.x 
        } catch (err){
            console.error(err)
        }
    })

    const setIndexOnScrollEnd = () => {
        setCardIndex(Math.round(translateX.value / width))
    }

    const deck = props.deck


    return (
        <>

            <Animated.FlatList
                data = {deck}
                onScroll={scrollHandler}
                disableIntervalMomentum
                showsHorizontalScrollIndicator = {false}
                snapToAlignment={"center"}
                onMomentumScrollEnd={setIndexOnScrollEnd}
                snapToInterval={width}
                decelerationRate={0.1}
                className = "bg-lighterGrey "
                horizontal
                renderItem= { ({item, index}) => {
                        return(
                            <View key = {index.toString()} className = "flex-3 w-screen items-center justify-center">
                                <CardWithReveal index = {index} text = {item.text} translation = {item.translation} transcription = {item.transcription} translateX = {translateX} />
                            </View>
                        )}}
                />
        </>
    )
}