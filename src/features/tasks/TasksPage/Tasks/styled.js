import { Link } from "react-router-dom";
import styled, { css } from "styled-components";

export const List = styled.ul`
    list-style: none;
    margin: 0;
    padding: 20px;

    @media (max-width: ${({theme}) => theme.breakPoint.mobileMax}px){
        padding: 10px;
    }
`

export const Item = styled.li`
    border-bottom: 1px solid #ddd;
    padding: 15px;
    display: grid;
    grid-template-columns: auto 1fr auto;
    grid-gap: 20px;
    align-items: center;

    ${({ hidden }) => hidden && css`
    display:none;
    `};

    @media (max-width: ${({theme}) => theme.breakPoint.mobileMax}px){
        padding: 10px;
    }
`;


export const Task = styled.span`
    ${({ done }) => done && css`
    text-decoration: line-through;
    `};
`;

export const TasksLinks = styled(Link)`
color: ${({ theme }) => theme.color.white};
text-decoration: none;
`;

export const Button = styled.button`
    height: 30px;
    width: 30px;
    border: none;
    transition: 0.5s;
    color: ${({ theme }) => theme.color.white};


    ${({ toggle }) => toggle && css`
    background:${({ theme }) => theme.color.green};


    &:hover {
    background:${({ theme }) => theme.color.malachite};
    cursor: pointer;
    transform: scale(1.05);
    }

    `}

    ${({ remove }) => remove && css`
    background:${({ theme }) => theme.color.red};
    font-weight: bold;
    font-size: 20px;


    &:hover {
    background:${({ theme }) => theme.color.chestnut};
    cursor: pointer;
    transform: scale(1.05);
    }
    `};
`;
