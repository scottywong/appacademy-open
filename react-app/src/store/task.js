// ******** Task Constraints ********
const GET_TASK = 'task/GET_TASK';

// ******** Task Actions ********

const getTaskById = (task) => ({
    type: GET_TASK,
    payload: task
  });



// ******** Task THUNKs ********

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
            newState = action.payload;
            return newState;
        default:
            return newState;
    }
}

export default taskReducer;