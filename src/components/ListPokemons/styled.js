import styled from "styled-components";

const Container = styled.div`
color:var(--sky-white);
height: 400px;
width: 340px;
background-color: var(--salmon-red);
overflow: auto;
padding: 0 2rem;
border-radius: 5px;

    h2{
        font-size: 30px;
        text-align: center;
        padding-bottom: 10px;
        border-bottom: 2px solid var(--sky-white);
    }

    div{
        display: flex;
        align-items: center;
        justify-content: space-between;
        font-size:20px;
    }

    svg{
        cursor: pointer;
        transform: scale(1.3);
    }

`

export default Container;