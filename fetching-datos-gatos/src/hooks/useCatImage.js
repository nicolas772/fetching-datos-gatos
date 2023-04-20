import { useEffect, useState } from "react"
const CAT_ENDPOINT_IMAGE_URL = 'https://api.thecatapi.com/v1/images/search'

//este es un custom hook
//la diferencia con una funcion normal es que
//en las funciones, no podemos usar hooks de react dentro
//en los custom hooks podemos usar useState o useEffect por ejemplo
export function useCatImage({ fact }) {
    const [imageUrl, setImageUrl] = useState()
    //efecto para recuperar la imagen cada vez que tenemos una cita nueva
    useEffect(() => {
        if (!fact) return
        const firsrWord = fact.split(' ')[0]
        console.log(firsrWord)

        fetch(CAT_ENDPOINT_IMAGE_URL)
            .then(res => res.json())
            .then(response => {
                const { url } = response[0]
                setImageUrl(url)
            })
    }, [fact])

    return { imageUrl }
}