import { Button, ButtonsContainer } from "./styled";
import { useSelector, useDispatch } from "react-redux";
import { toggleHideDone, setAllDone, selectTasksState } from "../../tasksSlice";

export const Buttons = () => {
  const { tasks, hideDone } = useSelector(selectTasksState);
  const dispatch = useDispatch();


  if (tasks.length)

    return (
      <ButtonsContainer>
        <>
          <Button onClick={() => dispatch(toggleHideDone())}>
            {hideDone ? "Show" : "Hide"} Done
          </Button>
          <Button
            onClick={() => dispatch(setAllDone())}
            disabled={tasks.every(({ done }) => done)}>
            Done All
          </Button>
        </>
      </ButtonsContainer>
    );
};