import { createContext, useState } from "react";
import { useEffect } from "react";
import api from '../api'

export const PokemonContext = createContext()


const Pokedex = ({ children }) => {
    const [pokemons, setPokemons] = useState([])
    const [pokedex, setPokedex] = useState([])
    const [filtrados, setFiltrados] = useState([])


    useEffect(() => {
        async function returnApi() {
            try {
                const retorno = await api.get('')
                setPokemons(retorno.data.results)
            } catch (error) {
                console.error(error)
            }
        }
        returnApi()
    }, [])



    return (
        <PokemonContext.Provider value={{ pokemons, pokedex, setPokedex, filtrados, setFiltrados }}>
            {children}
        </PokemonContext.Provider>
    )
}

export default Pokedex;