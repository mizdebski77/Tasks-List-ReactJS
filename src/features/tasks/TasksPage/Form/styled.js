import styled from "styled-components";

export const Container = styled.form`
    padding: 20px;
    display: grid;
    grid-template-columns: 1fr auto;
    grid-gap: 20px;

    @media (max-width:767px) {
        padding: 10px;
        display: grid;
        grid-template-columns: auto;
        grid-gap: 10px;
    }
`;

export const Input = styled.input`
    padding: 10px;
    color: ${({ theme }) => theme.color.black};
    border-radius: 5px;
    border: none;
    font-weight: 600;
`;

export const Button = styled.button`
    padding: 10px;
    border: none;
    color:  ${({ theme }) => theme.color.white};
    background: ${({ theme }) => theme.color.darkOrange};
    transition:  0.5s;
    border-radius: 5px;

    &:hover {
    cursor: pointer;
    background: ${({ theme }) => theme.color.galliano};
    transform:  scale(1.1);

    @media(max-width: ${({ theme }) => theme.breakPoint.mobileMax}px){
        transform: none;
        background: ${({ theme }) => theme.color.darkOrange};
    }
    }

    &:active {
    background: ${({ theme }) => theme.color.laRioja};
    }

    

    
`;

