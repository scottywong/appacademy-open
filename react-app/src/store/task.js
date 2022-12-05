// ******** Task Constraints ********
const GET_TASK = 'task/GET_TASK';
const GET_TASKS = 'admin/GET_TASKS';
const CREATE_TASK = 'admin/CREATE_TASK';
const UPDATE_TASK = 'admin/UPDATE_TASK';
const DELETE_TASK = 'admin/DELETE_TASK';
// ******** Task Actions ********

const getTaskById = (task) => ({
    type: GET_TASK,
    payload: task
  });

  const getTasks = (tasks) => ({
    type: GET_TASKS,
    payload: tasks
  });

const createTask = (task) => ({
    type: CREATE_TASK,
    payload: task
})

const updateTask = (task) => ({
    type: UPDATE_TASK,
    payload: task
})
const deleteTask = (taskId) => ({
    type: DELETE_TASK,
    payload: taskId
})

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

export const fetchCreateTask = (task) => async (dispatch) => {
        
    const res = await fetch(`/api/tasks/`,{
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body : JSON.stringify(task)
      }
    );

    if (res.ok){
        const task = await res.json();
        dispatch(createTask(task));
        return task;
    };
    
}

export const fetchUpdateTask = (task, taskId) => async (dispatch) => {
    
const res = await fetch(`/api/tasks/${taskId}`,{
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body : JSON.stringify(task)
  }
);

if (res.ok){
    const task = await res.json();
    dispatch(updateTask(task));
    return task;
};

}
export const fetchDeleteTask = (taskId) => async (dispatch) => {

    const res = await fetch(`/api/tasks/${taskId}`,{
        method: 'DELETE'
    });
        
    if(res.ok){
        const returnMsg = await res.json();
        dispatch(deleteTask(taskId));
        return returnMsg;
    }

    return res;
}

// ******** REDUCER ********
const initialState = {
            all_tasks:null,
            created_task:null,
            one_task:null
        };

const taskReducer = (state = initialState, action) => {
    let newState = {...state};
    switch(action.type) {
        case GET_TASK:
            newState.one_task = action.payload;
            return newState;
        case GET_TASKS:
            newState.all_tasks=action.payload;
            return newState;
        case CREATE_TASK:
            newState.created_task = action.payload;
            newState.all_tasks[action.payload.id] = action.payload;
            return {...newState
            };
        case UPDATE_TASK:
            newState.one_task = action.payload;
            return newState;
        case DELETE_TASK:
            delete newState.all_tasks[action.payload];
            return newState;
        default:
            return newState;
    }
}

export default taskReducer;