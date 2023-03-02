import styled from "styled-components";

export const ContainerStyles = styled.main`
    max-width: 1000px;
    margin: 100px auto;
    padding: 20px;
    box-shadow: 0 0 20px #2f3d70;
    border-radius: 20px;
    
    @media (max-width: ${({theme})=> theme.breakPoint.mobileMax}) {
        padding: 20px;
        margin: 50px auto;
  }
`;

export const HeaderContainer = styled.div`
display: flex;
justify-content: space-between;
`;


