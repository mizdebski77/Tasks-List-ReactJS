import styled from "styled-components";

export const DateView = styled.div`
    text-align: right;
    padding: 10px;
    color: ${({theme}) => theme.color.white};
    font-family: monospace;
    font-size: 16px;

    @media (max-width: ${({theme})=> theme.breakPoint.mobileMax}px) {
        text-align: center;
        font-size: 12px;
  }
`;