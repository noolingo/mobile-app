import * as Font from 'expo-font'

const loadFonts = async () => {
    await Font.loadAsync({'Cygre-Regular': require('../assets/fonts/Cygre-Regular.ttf')})
    await Font.loadAsync({'Cygre-ExtraBold': require('../assets/fonts/Cygre-ExtraBold.ttf')})
    await Font.loadAsync({'PTSerif-BoldItalic': require('../assets/fonts/PTSerif-BoldItalic.ttf')})
    await Font.loadAsync({'PTSerif-Bold': require('../assets/fonts/PTSerif-Bold.ttf')})
    await Font.loadAsync({'PTSerif-Italic': require('../assets/fonts/PTSerif-Italic.ttf')})
    await Font.loadAsync({'PTSerif-Regular': require('../assets/fonts/PTSerif-Regular.ttf')})
    await Font.loadAsync({'CenturyGothic-Regular': require('../assets/fonts/CenturyGothic-Regular.ttf')})
}

export{
    loadFonts
} 
    