
import { Text, View, FlatList, TouchableOpacity } from 'react-native';
import { ChevronDownIcon, PlusCircleIcon, TrashIcon } from 'react-native-heroicons/micro';
import { useState } from 'react';
import fontStyles from '../src/fontStyles';
import { themeColors } from '../theme';
import EmptyCard from './EmptyCard';
import Animated, { useAnimatedStyle, useSharedValue, withSpring } from 'react-native-reanimated';
import TextValueEdit from './TextValueEdit';


export const EditableCardItem = ({deleteCard, id, text, translation}) => 
    {
        const scaleY = useSharedValue(0)
        const translateY = useSharedValue(20)
        const [isClosed, setIsClosed] = useState(true)
        const [changableText, setChangableText] = useState(text);
        const [changableTranslation, setChangableTranslation] = useState(translation);
        const bottomTabAnimatedStyle = useAnimatedStyle(() => {
            return {
              transform: [
                {scaleY: scaleY.value},
                {translateY: translateY.value}
            ]
            }
          }, [])


        return(
            
            <View 
                className = "my-2 bg-grey rounded-lg py-3 w-10/12 items-center overflow-visible" style = {{elevation: 10}}
                >
                <View className = "w-full flex-row items-center justify-start ">
                    <View className = "w-5/6">
                        {
                            !isClosed? 
                            <TextValueEdit value = {changableText} setValue = {setChangableText} color = {themeColors.accent_1} size = {"large"} /> 
                            :
                            <Text className = "ml-3 w-5/6 max-w-20 flex-3 text-4xl text-accent_1" style= {fontStyles.CygreRegular}>{changableText}</Text>
                        }
                    </View>
                    {/*   */}
                    <TouchableOpacity
                        onPress={() => {
                            setIsClosed(!isClosed)
                            scaleY.value = withSpring( isClosed? 1 : 0.6, {duration: 200} )
                        } }>
                        <ChevronDownIcon size = {55} color={"white"}/>
                    </TouchableOpacity>
                </View>
                {isClosed? <></> :
                <Animated.View className = "bg-lighterGrey min-h-fit justify-around flex-row  min-w-full z-50 mb-5 items-center" style = {[bottomTabAnimatedStyle]}>
                    <View className = "w-5/6 max-w-xsm p-2">
                        <TextValueEdit value = {changableTranslation} setValue = {setChangableTranslation} color = {"white"} size = {"large"} />
                    </View>
                    <TouchableOpacity 
                        onPress={() => {
							deleteCard(id)
						}}>
                    	<TrashIcon className = " justify-self-start"size = {40} color = {"white"}/>
					</TouchableOpacity>
                </Animated.View>
                }

            </View>
        )
    };


