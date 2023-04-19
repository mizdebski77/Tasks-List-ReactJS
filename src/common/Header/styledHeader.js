import styled from "styled-components";

export const ListHeader = styled.header `
    text-align: center;

    @media (max-width: ${({theme}) => theme.breakPoint.mobileMax}px){
        font-size: 14px;
    }
    
`;