import { useDispatch } from "react-redux";
import { fetchExampleTasks } from "../tasksSlice";
import { DownloadBtn } from "./styledDownloadButton";

export const DownloadButton = () => {
    const dispatch = useDispatch();

    return (
        <DownloadBtn onClick={() => dispatch(fetchExampleTasks())}>
            Download example tasks
        </DownloadBtn>

    );
};


