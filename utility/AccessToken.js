import * as SecureStore from 'expo-secure-store';

const ACCES_TOKEN_KEY = "AccessToken"

const setAccessToken = async (value) => {
    await SecureStore.setItemAsync(ACCES_TOKEN_KEY, value)
}

const getAccessToken = async () => {
    let token = await SecureStore.getItemAsync(ACCES_TOKEN_KEY);
	return token
}




export {
	setAccessToken, 
	getAccessToken
}