import { useState, useEffect } from "react";

export const useFetch = (url) => {    
    const [data, setData] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState(null)

    useEffect(() => {
        setIsLoading(true)
        fetch(url)
            .then(res => {
                if(res.ok) {
                    return res.json()  
                }
                
                throw new Error({message: "Something went wrong"})
                
            })
            .then(json => setData(json))
            .catch(err => setError(err.message))
            .finally(() => setIsLoading(false))
    }, [url])

    return { data, isLoading, error }
    
}