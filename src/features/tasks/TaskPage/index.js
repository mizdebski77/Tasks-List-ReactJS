import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { Container } from "../../../common/Container/container";
import { Header } from "../../../common/Header/header";
import { Section } from "../../../common/Section/section"
import { getTaskById } from '../tasksSlice';
import { Answer, BackLink, DoneInfo,   } from "./styledTaskPage";


function TaskPage() {
  const { id } = useParams();
  const task = useSelector((state) => getTaskById(state, id));
  return (
    <Container>
      <Header
        header={"Tasks details"}
      />

      <Section
        title={task.content}
        extraHeaderContent={
          <BackLink to="/tasks">
            🡸 Back
          </BackLink>
        }
        body={
        <DoneInfo><strong>Done : </strong><Answer>{task.done ? "Yes" : "No"} </Answer> </DoneInfo>
      }
      />
    </Container >
  );
};

export default TaskPage;