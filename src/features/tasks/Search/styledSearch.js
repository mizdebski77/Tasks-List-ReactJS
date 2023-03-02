import styled from "styled-components";

export const Wrapper = styled.div`
padding: 20px;
grid-gap: 20px;
`;

export const Input = styled.input`
    padding: 10px;
    color: ${({ theme }) => theme.color.black};
    border-radius: 5px;
    border: none;
    font-weight: 600;
    width:100%;

`;
