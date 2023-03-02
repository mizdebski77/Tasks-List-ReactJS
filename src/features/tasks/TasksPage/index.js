import { Form } from './Form/form';
import { Tasks } from './Tasks/tasks'
import { Search } from '../Search/search';
import { Container } from '../../../common/Container/container';
import { Header } from '../../../common/Header/header';
import { Buttons } from '../TasksPage/Buttons/buttons';
import { Section } from '../../../common/Section/section';
import { DownloadButton } from '../DownloadButton/downloadButton';



function TasksPage() {
  return (
    <Container>

      <Header
        header="Task List"
      />
      <Section
        extraHeaderContent={<DownloadButton />}
        title="Add new Task"
        body={<Form />}
      />
      <Section
        title="Search"
        body={<Search />}
      />
      <Section
        title="Tasks List"
        extraHeaderContent={<Buttons/>}
        body={
        <Tasks />
        }
      />
    </Container>
  );
}

export default TasksPage;
