import { Buttons, Header, Sections } from "./styled";

export const Section = ({ title, body, extraHeaderContent }) => (

    <Sections>
        <Buttons >
            <Header> {title} </Header>
            {extraHeaderContent}
        </Buttons>
        {body}
    </Sections>
);