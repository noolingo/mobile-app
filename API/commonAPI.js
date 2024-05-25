const apiBaseUrl = "http://10.0.2.2:8088/"



const apiGetCall = async (apiBaseUrl, endPoint, headers) => {

    let url = `${apiBaseUrl}${endPoint}`
    const response = await fetch(url, 
        {
            method: 'Get',
            headers: headers
        }
    )

    const res = await response.json()
    return res
}



const apiPostCall = async (apiBaseUrl, endPoint, headers, params) => {

    let url = `${apiBaseUrl}${endPoint}`
    const response = await fetch(url, 
        {
            method: 'POST',
            headers: headers,
            body: JSON.stringify(params),
        }
    )
    
    const res = await response.json()
    return res
}

const apiPutCall = async (apiBaseUrl, endPoint, headers, params) => {

    let url = `${apiBaseUrl}${endPoint}`
    const response = await fetch(url, 
        {
            method: 'PUT',
            headers: headers,
            body: JSON.stringify(params),
        }
    )
    
    const res = await response.json()
    return res
}

const apiDeleteCall = async (apiBaseUrl, endPoint, headers, params) => {

    let url = `${apiBaseUrl}${endPoint}`
    const response = await fetch(url, 
        {
            method: 'DELETE',
            headers: headers
        }
        
    )
    
    const res = await response.json()
    return res
}




export {
    apiGetCall,
    apiPostCall,
    apiPutCall,
    apiDeleteCall,
    apiBaseUrl
}