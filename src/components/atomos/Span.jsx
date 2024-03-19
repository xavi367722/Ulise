import styled from "styled-components";

const estiloSpan = styled.span`
display: block;
color: ${({color}) => color || 'black'};
font-size $${({size}) => size || '12px'};
font-weight:$${({line}) => line || '400'};
`;

export function Span ({nombre,color,size,line,weight}){
    return(
      <>
      <estiloSpan
        color={color}
        size={size}
        line={line}
        weight={weight}>
        {nombre}
      </estiloSpan>
      </>
    )
}
