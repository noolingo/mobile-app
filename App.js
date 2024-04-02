import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import AppNavigation from './AppNavigation';
import { UserDTOContext } from './UserDTOContext';

export default function App() {
  const [UserDTO, setUserDTO] = useState({
    email: "dummy@gmail.com",
    name: "dummy",
  });
  
  return (
    <UserDTOContext.Provider value = {UserDTO}>
      <AppNavigation/>
    </UserDTOContext.Provider>
  );
}


