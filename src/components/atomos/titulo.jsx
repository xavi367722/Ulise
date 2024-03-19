import styled from "styled-components";
const Div = styled.div`
display: felx;
felx-direction: column;
margin: 4%;
width: 92%;
gap: .5vw;
h3{
    font-size 1.3vw;
}
span{
    font-size: 1vw;
}
`;
export function Titulo({Titulo,descripcion}){
    return(
        <Div>
            <h2>{Titulo}</h2>
            <span>{descripcion}</span>
        </Div>
    )
}