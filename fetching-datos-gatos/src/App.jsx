import '../style.css'
import { useCatImage } from "./hooks/useCatImage"
import { useCatFact } from './hooks/useCatFact'

export function App() {
    const { fact, refreshRandomFact } = useCatFact()
    const { imageUrl } = useCatImage({ fact })

    const handleClick = () => {
        refreshRandomFact()
    }

    return (
        <main>
            <h1>Cat's App</h1>
            <button onClick={handleClick}>Get new fact</button>
            <section>
                {imageUrl && <img src={imageUrl}></img>}
                {fact && <p>{fact}</p>}
            </section>
        </main>
    )
}