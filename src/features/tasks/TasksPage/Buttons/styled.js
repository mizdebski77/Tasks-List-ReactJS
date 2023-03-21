import styled from "styled-components";

export const Wrapper = styled.div`
display: flex;
flex-wrap: wrap;
`;


export const ButtonsContainer = styled.div`
    display: grid;
    grid-template-columns: auto auto auto;
    grid-gap: 20px;
    padding: 10px;

    @media (max-width: ${({ theme }) => theme.breakPoint.mobileMax}px){
        display: grid;
        grid-template-columns: 1fr;
        grid-gap: 20px;
  }
`;

export const Button = styled.button`
    background: transparent;
    border: none;
    color: ${({ theme }) => theme.color.orange};
    transition:  0.5s;

    &:hover {
    cursor: pointer;
    color: ${({ theme }) => theme.color.galliano};
    transform: scale(1.1);
    }

    &:active {
        color: ${({ theme }) => theme.color.laRioja};
    }

    &:disabled {
    color: ${({ theme }) => theme.color.darkBlue};
    transform: scale(1);
    }
`;