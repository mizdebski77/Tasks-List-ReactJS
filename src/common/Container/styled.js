import styled from "styled-components";

export const ContainerStyles = styled.main`
    max-width: 1000px;
    padding: 12px;
    box-shadow: 0 0 20px #2f3d70;
    border-radius: 20px;
    margin: 16px auto;
    
    @media (max-width: ${({theme})=> theme.breakPoint.mobileMax}) {
        padding: 20px;
  }
`;

export const HeaderContainer = styled.div`
display: flex;
justify-content: space-between;

`;


