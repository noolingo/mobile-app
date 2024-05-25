const placeholderApiBaseUrl = 'https://jsonplaceholder.typicode.com'
const apiBaseUrl = "http://10.0.2.2:8088/"
import { useContext } from 'react'
import { getAccessToken } from '../utility/AccessToken'
import { apiGetCall, apiPostCall } from './commonAPI'
import { UserDTOContext } from '../UserDTOContext'


async function getUserInfo(accessToken){
    return apiGetCall(
        apiBaseUrl,
        'user/info',
        {
            "Authorization": `Bearer ${accessToken}` 
        },
    )
}

const getAuthStatusAndUserInfo = async () => {
	const token = await getAccessToken()
	const userInfo = await getUserInfo(token)
    
	if ("error" in userInfo) {
		return {"authorized" : false, ...userInfo}
	}

	return {"authorized" : true, ...userInfo}
}


async function postSignUp(signUpDTO) {
    return apiPostCall(
        apiBaseUrl,
        `auth/sign-up`, 
        {
            'Content-type': 'application/json;',
        },
        {
            email: signUpDTO.email,
            name: signUpDTO.name,
            password: signUpDTO.password,
            repeatedPassword: signUpDTO.repeatedPassword
        })
}

async function postSignIn(signInDTO) {
    return apiPostCall(
        apiBaseUrl,
        `auth/sign-in`, 
        {
            'Content-type': 'application/json;',
        },
        {
            email: signInDTO.email,
            password: signInDTO.password,
        })
        
}



export {
    postSignUp,
    postSignIn,
    getUserInfo,
    getAuthStatusAndUserInfo,
}