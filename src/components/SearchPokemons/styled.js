import styled from "styled-components";

const SearchContainer = styled.form`
display: flex;
flex-direction: column;
width: 250px;
height: 220px;
background-color: var(--sky-white);
gap: 15px;
padding: 1rem 2rem;
border-radius: 5px;

    h2{
        text-align: center;
    }

    input{
        height: 35px;
        border: none;
        background-color: var(--transluce-grey);
        padding: 0px 1rem;
        border-radius: 5px;
    }

    input:focus{
        outline: 2px solid var(--salmon-red);
    }

    button{
        height: 35px;
        background-color: var(--salmon-red);
        border: none;
        color:var(--sky-white);
        border-radius: 5px;
    }

`

export default SearchContainer;