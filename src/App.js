import { HashRouter, Redirect, Route, Switch } from 'react-router-dom';
import { About } from './features/about/about';
import TasksPage from './features/tasks/TasksPage';
import TaskPage from './features/tasks/TaskPage';


function App() {
    return (
        <HashRouter>
            <Switch>
                <Route path="/tasks/:id"> <TaskPage /></Route>
                <Route path="/tasks"> <TasksPage /></Route>
                <Route path="/about"> <About /></Route>
                <Route path="/"><Redirect to="tasks" /> </Route>
            </Switch>
        </HashRouter>
    );
};
export default App;