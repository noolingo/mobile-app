import axios from 'axios'

const apiBaseUrl = 'https://jsonplaceholder.typicode.com'

const apiGetCall = async (endPoint, params) => {

    let url = `${apiBaseUrl}${endPoint}`

    const options = {
        method: 'GET',
        url: url,
        params: params? params:{}
    }
    
    try{
        const response = await axios.request(options)
        return response.data
    } catch (error){
        console.log('error: ', error)
        return {}
    }
}

const apiPostCall = async (endPoint, params) => {

    let url = `${apiBaseUrl}${endPoint}`
    const response = await fetch(url, {
    method: 'POST',
    body: JSON.stringify({
        title: params.title,
        body: params.body,
        userId: 1,
    }),
    headers: {
        'Content-type': 'application/json; charset=UTF-8',
    },
    })
    const res = await response.json()
    return res



    // const options = {
    //     method: 'POST',
    //     url: url,
    //     params: params? {params} : {}
    // }
    // console.log("logging params")
    // console.log(options.params)
    // try{
    //     const response = await axios.request(options)
    //     console.log("loggin response")
    //     console.log(response.data)
    //     return response.data
    // } catch (error){
    //     console.log('error: ', error)
    //     return {}
    // }
    
}
export async function postSignUp(userDTO) {
    return apiPostCall(`/posts`, {
        title: userDTO.name,
        body: userDTO.email,
        userId: 1,
    })
}