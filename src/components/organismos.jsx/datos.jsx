import { Acerca } from "../moleculas/Acerca";
import { AmigosPerfil } from "../moleculas/amigos";
import styled from "styled-components";

const contenedor = styled.div`
    width: 100%;
    height: fit-content;
    display: flex;
    justify-content: space-between;
`; 

export function datos(){
    return(
        <>
        <Container>
            <AcercaDe />
            <FriendsPerfil /> 
        </Container>
    </>
    )
}