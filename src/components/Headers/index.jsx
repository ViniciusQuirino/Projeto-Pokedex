import React from 'react'
import Container from './styled'
import bola from '../../img/bola.png'


function Headers() {
    return (
        <Container>
            <h1>Minha <span>Pokedex</span></h1>
            <img src={bola} alt="" />
        </Container>
    )
}

export default Headers

