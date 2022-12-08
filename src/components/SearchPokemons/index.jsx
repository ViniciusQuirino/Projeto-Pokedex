import React from 'react'
import SearchContainer from './styled';
import { useState } from 'react';
import { PokemonContext } from '../../contexts/PokemonContext'
import { useContext } from 'react'

function SeachPokemons() {
  const [input, setInput] = useState('')
  const { pokemons, setFiltrados } = useContext(PokemonContext)

  function pesquisarPokemon(e) {
    e.preventDefault()
    const result = pokemons.filter(elem => elem.name.includes(input))
    setFiltrados(result)
  }

  return (
    <SearchContainer onSubmit={(e) => pesquisarPokemon(e)}>
      <h2>Buscar meu pokemon</h2>
      <span>Nome do pokemon</span>
      <input type="text" placeholder='Nome do pokemon' onChange={(e) => setInput(e.target.value)} />
      <button type="submit">Adicionar</button>
    </SearchContainer>
  )
}

export default SeachPokemons;