import { StatusBar } from 'expo-status-bar';
import { useMemo, useState } from 'react';
import AppNavigation from './AppNavigation';
import { UserDTOContext } from './UserDTOContext';
import { SettingsContext } from './Contexts/SettingsContext';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

export default function App() {

  
  const [userDTO, setUserDTO] = useState({
    email: "dummy@gmail.com",
    name: "dummy",
  });

  const [settings, setSettings] = useState({
    theme: "light",
    cardRevealPreference: "drag"
  })


  const userDTOvalue = useMemo(() => ( { userDTO, setUserDTO } ),
    [userDTO]
  )
  const settingsValue = useMemo(() => ( { settings, setSettings } ),
    [settings]
  )
  
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <SettingsContext.Provider value={settingsValue}>
        <UserDTOContext.Provider value = {userDTOvalue}>
          <AppNavigation/>
        </UserDTOContext.Provider>
      </SettingsContext.Provider>
    </GestureHandlerRootView>

  );
}


