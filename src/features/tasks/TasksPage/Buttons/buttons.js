import { Button, ButtonsContainer } from "./styled";
import { useSelector, useDispatch } from "react-redux";
import { toggleHideDone, setAllDone, selectTasksState, removeAllTasks } from "../../tasksSlice";
import AlertConfirm from "react-alert-confirm";
import "react-alert-confirm/lib/style.css";

export const Buttons = () => {
  const { tasks, hideDone } = useSelector(selectTasksState);
  const dispatch = useDispatch();



  const openAlert = () => {
    AlertConfirm({
      title: "Are you sure?",
      desc: "You will delete all tasks",
      onOk: () => dispatch(removeAllTasks())
    })
  }


  if (tasks.length)

    return (
      <ButtonsContainer>
        <>
          <Button onClick={() => openAlert()} >
            Remove All Tasks
          </Button>
          <Button onClick={() => dispatch(toggleHideDone())}>
            {hideDone ? "Show" : "Hide"} Done
          </Button>
          <Button
            onClick={() => dispatch(setAllDone())}
            disabled={tasks.every(({ done }) => done)}>
            Done All
          </Button>
        </>
      </ButtonsContainer >
    );
};