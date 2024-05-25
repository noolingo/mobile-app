import { getAccessToken } from "../utility/AccessToken";
import { apiBaseUrl, apiDeleteCall, apiGetCall, apiPostCall, apiPutCall } from "./commonAPI"


const postDeck = async (description, name) => {
    const accessToken = await getAccessToken();
    return apiPostCall(
        apiBaseUrl,
        "decks",
        {
            "Authorization": `Bearer ${accessToken}` 
        },
        { 
            "description": description,
            "name": name
        }
    )
}

const putCardInDeck = async (deckId, cardId) => {
    const accessToken = await getAccessToken();
    return apiPutCall(
        apiBaseUrl,
        `decks/cards`,
        {
            "Authorization": `Bearer ${accessToken}` 
        },
        { 
            "cardId": cardId,
            "deckId": deckId,
        }
    )
}

const deleteDeck = async (deckId) => {
    const accessToken = await getAccessToken();
    return apiDeleteCall(
        apiBaseUrl, 
        `decks/${deckId}`,
        {
            "Authorization": `Bearer ${accessToken}` 
        },
    )
}

const deleteCardFromDeck = async (deckId, cardId) => {
    const accessToken = await getAccessToken();
    return apiDeleteCall(
        apiBaseUrl, 
        `decks/${deckId}/cards/${cardId}`,
        {
            "Authorization": `Bearer ${accessToken}` 
        },
    )
}

const getDeck = async (deckId) => {
    const accessToken = await getAccessToken();
    return apiGetCall(
        apiBaseUrl,
        `decks/get/${deckId}`,
        {
            "Authorization": `Bearer ${accessToken}` 
        },
    )
} 

const getDeckList = async () => {
    const accessToken = await getAccessToken();
    return apiGetCall(
        apiBaseUrl,
        'decks/list',
        {
            "Authorization": `Bearer ${accessToken}` 
        },
    )
}

export {
    postDeck,
    putCardInDeck,
    getDeckList,
    getDeck, 
    deleteDeck,
    deleteCardFromDeck
}