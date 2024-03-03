import { createSlice } from "@reduxjs/toolkit"
import { getTasksFromLocalStorage } from "./tasksLocalStorage";

const tasksSlice = createSlice({
    name: 'tasks',
    initialState: {
        tasisks: getTasksFromLocalStorage(),
        hideDone: false,
    },
    reducers: {
        addTask: ({ tasks }, { payload: task }) => {
            tasks.push(task);
        },

        toggleHideDone: state => {
            state.hideDone = !state.hideDone
        },

        toggleTaskDone: ({ tasks }, { payload: taskID }) => {
            const index = tasks.findIndex(({ id }) => id === taskID);
            tasks[index].done = !tasks[index].done;
        },

        removeTask: ({ tasks }, { payload: taskID }) => {
            const index = tasks.findIndex((({ id }) => id === taskID));
            tasks.splice(index, 1);
        },

        setAllDone: ({ tasks }) => {
            for (const task of tasks) {
                task.done = true;
            }
        },

        fetchExampleTasks: state => { 
            state.loading = true;
        },

        fetchExampleTasksSuccess: (state, { payload: tasks }) => {
            state.tasks = tasks;
            state.loading = false;
        },

                
        fetchExampleTasksError: (state) => { 
            state.loading = false;
        },

        removeAllTasks: ({ tasks }) => {
            tasks.splice(tasks)
         }


    },
});

export const selectTasksState = (state) => state.tasks;
export const selectTasks = (state) => selectTasksState(state).tasks;


export const {
    addTask,
    toggleHideDone,
    toggleTaskDone,
    removeTask,
    setAllDone,
    fetchExampleTasks,
    fetchExampleTasksError,
    fetchExampleTasksSuccess,
    removeAllTasks,
    setTasks } = tasksSlice.actions;


export const selectHideDone = (state) => selectTasksState(state).hideDone;
export const downloadListEmpty = (state) => selectTasks(state).length > 1;
export const selectIsListEmpty = (state) => selectTasks(state).length !== 0;


export const getTaskById = (state, taskId) =>
    selectTasks(state).find(({ id }) => id === taskId);

export const selectTasksByQuery = (state, query) => {
    const tasks = selectTasks(state);

    if (!query || query.trim() === "") {
        return tasks;
    }
    return tasks.filter(({ content }) =>
        content.toUpperCase().includes(query.trim().toUpperCase())
    );
};


export const selectLoading = (state) =>
  selectTasksState(state).loading;


export default tasksSlice.reducer;
