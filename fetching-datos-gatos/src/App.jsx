import { useEffect, useState } from "react"
const CAT_ENDPOINT_RANDOM_FACT = 'https://catfact.ninja/fact'
const CAT_ENDPOINT_IMAGE_URL = 'https://api.thecatapi.com/v1/images/search'
import './App.css'

export function App() {
    const [fact, setFact] = useState()
    const [imageUrl, setImageUrl] = useState()

    //efecto para recuperar la cita al cargar la pagina
    useEffect(() => {
        fetch(CAT_ENDPOINT_RANDOM_FACT)
            .then(res => res.json())
            .then(data => {
                const { fact } = data
                setFact(fact)
            })
    }, [])

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

    return (
        <main>
            <h1>App de gatitos</h1>
            <section>
                {imageUrl && <img src={imageUrl}></img>}
                {fact && <p>{fact}</p>}
            </section>
        </main>
    )
}