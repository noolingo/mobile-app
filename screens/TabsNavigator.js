import { createMaterialBottomTabNavigator } from 'react-native-paper/react-navigation';
import { Square3Stack3DIcon, UserIcon, LanguageIcon } from 'react-native-heroicons/micro';
import DictionaryStackNavigation from './DictionaryStackNavigation';
import DecksStackNavigation from './DecksStackNavigation';
import ProfileStackNavigation from './ProfileStackNavigation';
import { themeColors } from '../theme';

const Tab = createMaterialBottomTabNavigator();

const DeckIcon = (focused, color, size) => {
  return (
    <Square3Stack3DIcon size={"30"} color={focused.focused? themeColors.accent_1: themeColors.grey}/>
  )
}

const ProfileIcon = (focused) => {
  return (
    <UserIcon size={"30"} color={focused.focused? themeColors.accent_1: themeColors.grey}/>
  )
}

const TranslateIcon = (focused) => {
  return (
    <LanguageIcon size={"30"} color={focused.focused? themeColors.accent_1: themeColors.grey}/>
  )
}


function TabsNavigator() {

  return (
    <Tab.Navigator activeColor={themeColors.accent_1} theme={{colors: {secondaryContainer: ""}}}>
      <Tab.Screen options = {{tabBarIcon: TranslateIcon, tabBarLabel: 'Словарь', }}  name="DictionaryStack" component={DictionaryStackNavigation} />
      <Tab.Screen options = {{tabBarIcon: DeckIcon, tabBarLabel: 'Колоды', color: "white"}} name="DeckStack" component={DecksStackNavigation} />
      <Tab.Screen options = {{tabBarIcon: ProfileIcon, tabBarLabel: 'Профиль', }} name="ProfileStack" component={ProfileStackNavigation} />
    </Tab.Navigator>
  );
}

export default TabsNavigator