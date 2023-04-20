import { useState, useEffect } from "react"
import { getRandomFact } from "../services/facts"


export const useCatFact = () => {
    const [fact, setFact] = useState()
    const refreshRandomFact = () => {
        //getRandomFact().then(setFact) es lo mismo de abajo
        getRandomFact().then(newFact => setFact(newFact))
    }
    //efecto para recuperar la cita al cargar la pagina
    useEffect(refreshRandomFact, [])
    return { fact, refreshRandomFact }
}