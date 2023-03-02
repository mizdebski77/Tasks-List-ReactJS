import { Links, LinkStyle, Wrapper } from "./styledNavi"

export const Navigation = () => {

    return (
        <Wrapper>
            <Links> <LinkStyle  to="/tasks"> Tasks</LinkStyle> </Links>
            <Links> <LinkStyle  to="/about"> About</LinkStyle> </Links>

        </Wrapper>
    )
}