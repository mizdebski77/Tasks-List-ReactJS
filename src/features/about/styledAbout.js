import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const Paragraph = styled.p`
padding: 20px;
margin: 0;

@media (max-width: ${({theme}) => theme.breakPoint.mobileMax}px){
        padding: 12px;
    }
`;

export const BackLink = styled(NavLink)`
    color: white;
    display: flex;
    align-items: center;
    padding-right:20px;
    height: 27px;
    background: transparent;
    border: none;
    font-size: 17px;
    font-weight: normal;
    text-decoration: none;
    transition: .5s;

    &:hover {
        color:rgb(184, 119, 0) ;

    }

    @media (max-width: ${({theme}) => theme.breakPoint.mobileMax}px){
        justify-content: center;
    }
`;


export const HeaderContainer= styled.div`
display: flex;
justify-content: space-between;
`;