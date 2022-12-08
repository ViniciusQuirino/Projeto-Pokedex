import React from 'react'
import { PokemonContext } from '../../contexts/PokemonContext'
import { useContext } from 'react'
import Container from './styled'
import { TbMoodCrazyHappy } from 'react-icons/tb'
import { ToastContainer, toast } from 'react-toastify';

const ListPokemons = () => {

    const { pokemons, pokedex, setPokedex, filtrados } = useContext(PokemonContext)

    function adicionar(e) {
        const id = e.target.id
        const result = pokedex.some((elem) => elem.name === id)

        return (
            !result ?
                pokemons.map((elem, index) => {
                    elem.name == id &&
                        setPokedex([...pokedex, {
                            name: elem.name,
                            id: index
                        }])
                })
                : toast.error('Item já adicionado no carrinho!')
        )
    }


    return (
        <Container>
            <h2>Lista de pokemons</h2>

            {filtrados.length > 0 ?
                filtrados.map((elem, index) => (
                    <div key={index}>
                        <p>{elem.name}</p>
                        <TbMoodCrazyHappy id={elem.name} onClick={(e) => adicionar(e)} />
                    </div>
                ))
                :
                pokemons.map((elem, index) => (
                    <div key={index}>
                        <p>{elem.name}</p>
                        <TbMoodCrazyHappy id={elem.name} onClick={(e) => adicionar(e)} />
                    </div>
                ))
            }
        </Container>
    )
}

export default ListPokemons