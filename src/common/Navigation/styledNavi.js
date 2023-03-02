import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const Wrapper = styled.nav`
width: 100%;
height: 60px;
color: ${({ theme }) => theme.color.white};
background:${({ theme }) => theme.color.darkOrange};
border-bottom: 1px solid ${({ theme }) => theme.color.white};
display: flex;
justify-content: center;
align-items: center;
`;

export const Links = styled.li`
font-family: monospace;
font-size: 25px;
border: none;
list-style: none;
margin: 20px;
&:hover {
cursor: pointer;
}
`;
const activeClassName = "active";

export const LinkStyle = styled(NavLink).attrs(props => ({
    activeClassName,
}))`
color: ${({ theme }) => theme.color.white};
text-decoration: none;

&.${activeClassName} {
    font-weight: bold;
    border-bottom: 2px solid white;
}
`;