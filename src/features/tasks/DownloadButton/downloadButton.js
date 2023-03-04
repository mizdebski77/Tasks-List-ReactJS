import { useDispatch, useSelector } from "react-redux";
import { fetchExampleTasks, selectIsListEmpty, selectLoading } from "../tasksSlice";
import { DownloadBtn } from "./styledDownloadButton";

export const DownloadButton = () => {
    const dispatch = useDispatch();
    const loading = useSelector(selectLoading);
    const isListEmpty = useSelector(selectIsListEmpty);


    return (
        <DownloadBtn disabled={loading || isListEmpty} onClick={() => dispatch(fetchExampleTasks())}>
            {loading ? "Loading..." : " Download example tasks"}

        </DownloadBtn>

    );
};


