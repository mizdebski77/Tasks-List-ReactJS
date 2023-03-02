import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import {Container} from "../../../common/Container/container";
import {Header} from "../../../common/Header/header";
import {Section} from "../../../common/Section/section"
import {getTaskById} from '../tasksSlice';


function TaskPage () {
    const {id} = useParams();
    const task = useSelector((state) => getTaskById(state, id));
    return (
        <Container>
      <Header
        header={"Tasks details"}
      />
      <Section
        title={task.content}
        body={<><strong>Done: </strong> </>}
      />
    
    </Container>
    );
};

export default TaskPage;