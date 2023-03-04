import styled from "styled-components";

export const DownloadBtn = styled.button`
    background: transparent;
    border: none;
    color: ${({ theme }) => theme.color.orange};
    transition:  0.5s;
    padding: 20px;

    &:hover {
    cursor: pointer;
    color: ${({ theme }) => theme.color.galliano};
    transform: scale(1.1);
    }

    &:active {
        color: ${({ theme }) => theme.color.laRioja};
    }

    &:disabled {
     transform: none;
    color: #bbb;
    cursor: default;
  }
`;
