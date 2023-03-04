import { NavLink } from "react-router-dom";
import styled from "styled-components";


export const DoneInfo = styled.div`
padding: 20px;
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
`;


export const HeaderContainer = styled.div`
display: flex;
justify-content: space-between;
`;

export const Answer = styled.text`
color: orange;
`
