import { useState } from 'react';
import { Text, View, TextInput } from 'react-native';
import { ArrowDownIcon, SparklesIcon } from "react-nsative-heroicons/micro";
import { themeColors } from '../theme';


export default function TranslateWord(props) {
    const [initialText, setInitialText] = useState("");
    const [translatedText, setTranslatedText] = useState("Попробуйте что нибудь перевести!");
    const [translatedTextDTO, settranslatedTextDTO] = useState({
        text: '',
        detectedLanguageCode: ''
    });
    const [isLoading, setIsLoading] = useState(true);
    
    
    // handleTranslate = async () => {
    //     setIsLoading(true)
    //     if ( initialText === "" ) { 
    //         setTranslatedText("...")
    //         props.cardDTOSetter({
    //             text: initialText,
    //             translation: ""
    //         })
    //         setIsLoading(false)
    //         return
    //     };
    //     const response = await postTranslate(initialText)
    //     console.log(response)
    //     setTranslatedText(response.translations[0].text)
    //     props.cardDTOSetter({
    //         text: initialText,
    //         translation: response.translations[0].text
    //     })
    //     setIsLoading(false)
    // }
        
    checkIfWordChanged = (value) => {
        return (initialText === value)
    }

    return (
        <>
            <View className = " justify-start items-center w-5/6 rounded-3xl my-12 mt-24 max-h-96 min-h-dvh"> 
                <View className = "form my-12 space-y-2 w-full items-center">
                    <TextInput 
                            placeholder="Введите что нибудь"
                            className = "p-4 w-full bg-lighterGrey/50 text-white  text-2xl rounded-md border-4 border-black/20" 
                            value={initialText} 
                            onChangeText={ async (value) => {
                                setInitialText(v => value)
                                setTimeout(() => {
                                    if (checkIfWordChanged(value)) {
                                        try{
                                            handleTranslate();
                                        } catch (err) { 
                                            alert(err)
                                        }
                                    }
                                }, 500);
                            }} />
                    <ArrowDownIcon size = "55" color="white" opacity= {0.5} /> 
                    {/* className = "p-4 w-full bg-lighterGrey/50 text-white placeholder-white text-2xl rounded-md border-4 border-black/20"  */}

                    <Text  className = {`p-4 pb-2 w-full bg-lighterGrey/50 ${!isLoading ? "text-white" : "text-black/60"} rounded-md text-2xl border-4 border-black/20`} > 
                        {!isLoading? `${translatedText}` : "awaiting"}
                     </Text>
                </View>

            </View>
            
        </>
    )
}
