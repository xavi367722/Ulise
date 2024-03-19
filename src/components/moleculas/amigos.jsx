import styled from "styled-components"
import {Perfil} from '../atomos/perfil'
import { Span } from "../atomos/Span"
import { Card_amigos } from "../atomos/Card_amigos"
import { Card_de_perfil } from "../atomos/perfil"
import { contenedor_amigos } from "../atomos/contenedor_amigo"
const Descripcion = styled.div`
    width: calc(100% - 2vw);
    display: flex;
    justify-content: space-between;
    margin: 0 0 .5vw 1vw;
`;
export function AmigosPerfil(){
    const user = { nombre: "Joan Rosenbaum", text: "Ing. Sistemas computacionales" }
    const user2 = { nombre: "John Doe", text: "Lic. Marketing Digital" }

return (
    <>
        <Card_amigos>
            <Span color='#000' size={"1.5vw"} name={"Amigos"} weigth={600} margin={".5vw 0 .5vw 1vw"} />
            <Descripcion>
                <Span color='#000' size={"1vw"} name={"123 amigos"} weigth={"500"} margin={"0"} />
                <u> <Span color='#7F7F7F' size={".8vw"} name={"Buscar amigos"} margin={"0"} />  </u>
            </Descripcion>
            <contenedor_amigos>
                <Perfil>
                    <Perfil usuario={user} size={".5wv"} margin={".5vw"} />
                </Perfil>
                <Card_de_perfil>
                    <Perfil usuario={user2} size={".5wv"} margin={".5vw"} />
                </Card_de_perfil>
                <Card_de_perfil>
                    <Perfil usuario={user} size={".5wv"} margin={".5vw"} />
                </Card_de_perfil>
                <Card_de_perfil>
                    <Perfil usuario={user2} size={".5wv"} margin={".5vw"} />
                </Card_de_perfil>
            </contenedor_amigos>
        </Card_amigos>
    </>
)
}