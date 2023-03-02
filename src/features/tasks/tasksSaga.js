import { takeLatest, call, put, takeEvery, select, delay } from "redux-saga/effects";
import { getExampleTasks } from "./getExampleTasks";
import { saveTasksInLocalStorage } from "./tasksLocalStorage";
import { fetchExampleTasks, selectTasksState, setTasks } from "./tasksSlice";

function* fetchExampleTasksHandler() {
    try {
        const exampleTasks = yield call(getExampleTasks);
        yield delay(2000)
        yield put(setTasks(exampleTasks))
    } catch (error) {
        yield call(alert, "something went wrong");
    }
}

function* saveTasksInLocalStorageHandler() {
    const {tasks} = yield select(selectTasksState);
    yield call (saveTasksInLocalStorage, tasks);
}

export function* watchFetchExampleTasks() {
    yield takeLatest(fetchExampleTasks.type, fetchExampleTasksHandler);
    yield takeEvery("*", saveTasksInLocalStorageHandler);
}