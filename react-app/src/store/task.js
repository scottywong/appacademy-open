// ******** Task Constraints ********
const GET_TASK = 'task/GET_TASK';
const GET_TASKS = 'admin/GET_TASKS';
// ******** Task Actions ********

const getTaskById = (task) => ({
    type: GET_TASK,
    payload: task
  });

  const getTasks = (tasks) => ({
    type: GET_TASKS,
    payload: tasks
  });


// ******** Task THUNKs ********
export const fetchGetTasks = () => async (dispatch) => {
    const res = await fetch(`/api/tasks/`);

    if (res.ok){
        const tasks = await res.json();
        dispatch(getTasks(tasks));
        return tasks
    };
    return res;
}

export const fetchGetTaskById = (taskId) => async (dispatch) => {
    const res = await fetch(`/api/tasks/${taskId}`);

    if (res.ok){
        const task = await res.json();
        dispatch(getTaskById(task));
        return task
    };
    return res;
};

// ******** REDUCER ********
const initialState = {};

const taskReducer = (state = initialState, action) => {
    let newState = {...state};
    switch(action.type) {
        case GET_TASK:
            newState.one_task = action.payload;
            return newState;
        case GET_TASKS:
            newState.all_tasks = {};
            action.payload['Tasks'].forEach(task => newState.all_tasks[task.id] = task);
            return newState;
        default:
            return newState;
    }
}

export default taskReducer;