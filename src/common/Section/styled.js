import styled from "styled-components";

export const Sections = styled.section`
    border-radius: 5px;
    border: 1px solid rgb(223, 140, 16);
    padding: 0px;
    margin: 20px;

    @media(max-width: ${({ theme }) => theme.breakPoint.mobileMax}px){
        margin: 0;
    }
`;

export const Header = styled.h2`
    padding: 20px;
    margin: 0;

    @media(max-width: ${({ theme }) => theme.breakPoint.mobileMax}px){
        padding: 10px;
        font-size: 20px;
        text-align: center;
    }
`;



export const Buttons = styled.div`
    align-items: center;
    display: grid;
    grid-template-columns: 1fr auto;
    border-bottom: 1px solid white;
    grid-gap: 20px;

    @media(max-width: ${({ theme }) => theme.breakPoint.mobileMax}px){
        display: grid;
        grid-template-columns: 1fr;
        padding: 10px;
        grid-gap: 12px;

    }
`;



