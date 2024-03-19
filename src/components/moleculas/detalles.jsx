import styled from "styled-components";
import { Span } from "../atomos/Span";
const Nombre = styled.h1 `
    font-size: 2vw;
    color: #000;
`;
export function Detalles(){
    return(
        <div>
            <Span name ={"Ing. Sistemas de la información"} color={"black"} size={"1.5vw"} line={"38px"}/>
            <Span name ={"Chiapas, México"} color={"#7F7F7F"} size={"1.4vw"} line={"20.36px"} /> 
        </div>
    )
}