import { Button, Item, List, Task, TasksLinks } from "./styled";
import { useSelector, useDispatch } from "react-redux";
import {toggleTaskDone, removeTask, selectTasksByQuery, selectHideDone } from "../../tasksSlice";
import { useLocation } from "react-router-dom";

export const Tasks = () => {
  const location = useLocation();
  const query = (new URLSearchParams(location.search).get("search"))
  const tasks = useSelector((state) => selectTasksByQuery(state, query));
  const hideDone = useSelector(selectHideDone);
  const dispatch = useDispatch();

  return (
    <List>
      {tasks.map(task => (
        <Item
          key={task.id}
          hidden={task.done && hideDone}
        >
          <Button
            toggle
            onClick={() => dispatch(toggleTaskDone(task.id))}
          > {task.done ? "✔" : ""}
          </Button>
          <Task done={task.done}>
          <TasksLinks  to={`/tasks/${task.id}`}> {task.content} </TasksLinks>
          </Task>
          <Button
            remove
            onClick={() => dispatch(removeTask(task.id))}>
            🗑
          </Button>
        </Item>
      ))}
    </List>
  )
}