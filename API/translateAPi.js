const translateApiBaseurl = 'https://translate.api.cloud.yandex.net/translate/v2/translate'
const IAM_TOKEN = 't1.9euelZrGyozLjZiVmpzPi8eJnM2Yke3rnpWax8qZzJGUnJ6cmY-ZlZiOkM3l9PcNWkNN-e8kFybZ3fT3TQhBTfnvJBcm2c3n9euelZrKkZaLzczKnZeKicaNz46Vju_8xeuelZrKkZaLzczKnZeKicaNz46Vjg.TJoA8qnGdh4WASgWE2tcqxxHPHf1oDRcdx6tubJ2EAJm6u6Sgg0ZL4eqoe6XUNteRNoVF27d6btjtdUArXVLCw'
const folderId = 'b1gbc7b7ho2mpgkuqpl0'
import { apiPostCall, apiGetCall } from "./commonAPI"



async function postTranslate(word) {
    return apiPostCall(
        translateApiBaseurl, 
        "",
        {
            'Content-type': 'application/json; charset=UTF-8',
            'Authorization': `Bearer ${IAM_TOKEN}`
        },
        {
            'folderId': folderId,
            'texts': [word],
            'targetLanguageCode': 'ru'
        }
    )
}


export {
    postTranslate,

}
