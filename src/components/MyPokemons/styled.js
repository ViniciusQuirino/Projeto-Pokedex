import styled from "styled-components";

const MyContainer = styled.div`
width: 300px;
color:var(--sky-white);
background-color: var(--night-grey);
padding:1rem 2rem;
border-radius: 5px;
height: 370px;
overflow: auto;

    h2{
        font-size: 25px;
        text-align: center;
    }

    div{
        display: flex;
        align-items: center;
        justify-content: space-between;
        font-size: 19px;
    }
    
    svg{
        cursor: pointer;
        transform: scale(1.3);
    }

`


export default MyContainer;