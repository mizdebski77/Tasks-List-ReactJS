import { ContainerStyles } from "./styled";
import { Clock } from './Clock/clock'
import { Navigation } from "../Navigation/navi";



export const Container = ({ children }) => {
    return (
        <>
            <Navigation />
            <ContainerStyles>
                <Clock />
                {children}
            </ContainerStyles>
        </>




    );
}

