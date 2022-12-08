import MyContainer from "./styled";
import { BiTrash } from 'react-icons/bi'
import { PokemonContext } from '../../contexts/PokemonContext'
import { useContext } from 'react'
import React from 'react'

function MyPokemons() {
    const { pokedex, setPokedex } = useContext(PokemonContext)
    function remover(obj) {
        const result = pokedex.filter((elem) => elem.id !== obj)
        setPokedex(result)
    }


    return (
        <MyContainer>
            <h2>Meu time de pokemons</h2>

            {pokedex.map((elem, index) => (

                <div key={index}>
                    <p>{elem.name}</p>
                    <BiTrash onClick={() => remover(elem.id)} />
                </div>
            ))}


        </MyContainer>
    )
}

export default MyPokemons