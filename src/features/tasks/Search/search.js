import { useSelector } from "react-redux";
import { useHistory, useLocation } from "react-router-dom"
import { selectIsListEmpty } from "../tasksSlice";
import { Input, Wrapper } from "./styledSearch"

export const Search = () => {

    const location = useLocation();
    const history = useHistory();
    const query = (new URLSearchParams(location.search)).get("search");
    const isListEmpty = useSelector(selectIsListEmpty);

    const onInputChange = ({ target }) => {
        const searchParams = new URLSearchParams(location.search);

        if (target.value.trim() === "") {
            searchParams.delete("search");
        } else {
            searchParams.set("search", target.value);
        }
        history.push(`${location.pathname}?${searchParams.toString()}`);
    }

    return (
        <Wrapper>
            <Input disabled = {!isListEmpty}  placeholder="Filter Tasks"
                value={query || ""}
                onChange={onInputChange} />
        </Wrapper>
    )
}