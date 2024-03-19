import styled from 'styled-components';
import { Span } from '../atoms/Span';

export const InteresPersona = styled.div`
    color: #7F7F7F;
    width: 50%;
    display: flex;
    flex-direction: column;
    gap: 1vw;

    .list-Interes {
        list-style: none;
        display: flex;
        flex-wrap: wrap;
        width: 90%;
        margin-left: 5%;
        gap: 1vw;
    }
`;

const InteresItem = styled.li`
    border-radius: 100vw;
    padding: .4vw 1vw;
    background-color: #EEEEEE;
    display: flex;
    flex-wrap: nowrap;
    align-items: center;    
    justify-content: center;
    font-size: 1vw;
`;

export function InteresPersona() {
    return (
        <InteresPersonContainer>
            <Span name={"Intereses"} color={"#7F7F7F"} size={"1.2vw"} line={"24.52px"} />
            <ul className='list-Interes'>
                <InteresItem>Materias</InteresItem>
                <InteresItem>Deportes</InteresItem>
                <InteresItem>Comida</InteresItem>
                <InteresItem>Hobbies</InteresItem>
                <InteresItem>Peliculas/Series</InteresItem>
            </ul>
        </InteresPersonContainer>
    )
}
