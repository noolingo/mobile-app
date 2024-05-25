import { getAccessToken } from "../utility/AccessToken";
import { apiGetCall, apiBaseUrl } from "./commonAPI";


const getEngCard = async (word) => {
    const accessToken = await getAccessToken();
    return apiGetCall(
        apiBaseUrl,
        `card/words/eng/${word}`,
        {
            "Authorization": `Bearer ${accessToken}` 
        }
    )
}

const getRusCard = async (word) => {
    const accessToken = await getAccessToken();
    return apiGetCall(
        apiBaseUrl,
        `card/words/rus/${word}`,
        {
            "Authorization": `Bearer ${accessToken}` 
        }
    )
}

const getCardById = async (id) => {
    const accessToken = await getAccessToken();
    return apiGetCall(
        apiBaseUrl,
        `card/words/${id}`,
        {
            "Authorization": `Bearer ${accessToken}` 
        }
    )
}

export {
    getEngCard,
    getRusCard,
    getCardById
}