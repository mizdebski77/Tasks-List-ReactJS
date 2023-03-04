import { takeLatest, call, put, takeEvery, select, delay } from "redux-saga/effects";
import { getExampleTasks } from "./getExampleTasks";
import { saveTasksInLocalStorage } from "./tasksLocalStorage";
import { fetchExampleTasks, selectTasksState, fetchExampleTasksSuccess, fetchExampleTasksError } from "./tasksSlice";

function* fetchExampleTasksHandler() {
    try {
        yield delay(1000)
        const exampleTasks = yield call(getExampleTasks);
        yield put(fetchExampleTasksSuccess(exampleTasks))
    } catch (error) {
        yield put (fetchExampleTasksError());
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