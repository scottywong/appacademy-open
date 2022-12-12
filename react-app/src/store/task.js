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
    // let responseClone; // 1

    const res = await fetch(`/api/tasks/`,{
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body : JSON.stringify(task)
      }
    )
//     .then(response => response.text()) // Parse the response as text
//   .then(text => {

//     console.log('what is this text:', text)
//   })
    // try {
    //   const data = JSON.parse(text); // Try to parse the response as JSON
    //   // The response was a JSON object
    //   // Do your JSON handling here
    //   console.log('text: ', text)
    //   console.log('data: ', data)
    // //   if (res.ok){
    //         // const task = await res.json();
    //         dispatch(createTask(data));
    //         return data;
    // } catch(err) {
    //   // The response wasn't a JSON object
    //   // Do your text handling here
    //   console.log('err: ', err)
    //   return err;
//     }
//   });
    // .then(function (response) {
//     responseClone = response.clone(); // 2
//     console.log(response)
//     return response.json();
//     })
//     .then(function (data) {
//         // const task = await res.json();
//         dispatch(createTask(data));
//         return data;
// }, function (rejectionReason) { // 3
//     console.log('Error parsing JSON from response:', rejectionReason, responseClone); // 4
//     responseClone.text() // 5
//     .then(function (bodyText) {
//         return bodyText;
//         console.log('Received the following instead of valid JSON:', bodyText); // 6
//     });
// });
          
    if (res.ok){
        const task = await res.json();
        dispatch(createTask(task));
        return task;
    } 
        return res;   
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

    return res;

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
            return {... newState};
        case DELETE_TASK:
            delete newState.all_tasks[action.payload];
            return newState;
        default:
            return newState;
    }
}

export default taskReducer;