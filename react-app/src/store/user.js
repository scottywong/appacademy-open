// ******** User Constraints ********
const GET_ALLUSERS = 'admin/GET_all_users';
const GET_USERENROLLMENTS = 'user/GET_user_enrollments';
const GET_USERPROGRESSES = 'user/GET_user_progresses';
const UPDATE_PROGRESS = 'progress/UPDATE_PROGRESS';

// ******** User Actions ********
const getAllUsers = (users) => ({
    type: GET_ALLUSERS,
    payload: users
  });
const getUserEnrollments = (enrollments) => ({
    type: GET_USERENROLLMENTS,
    payload: enrollments
  });
const getUserProgresses = (progresses) => ({
    type: GET_USERPROGRESSES,
    payload: progresses
})
const updateProgressById = (progress) => ({
    type: UPDATE_PROGRESS,
    payload: progress
});

// ******** User THUNKs ********
export const fetchUsers = () => async (dispatch) => {
    const res = await fetch(`/api/users/`);

    if (res.ok){
        const users = await res.json();
        dispatch( getAllUsers(users));
        return users
    };
    return res;
};
export const fetchUserEnrollments = () => async (dispatch) => {
    const res = await fetch(`/api/users/enrollments`);

    if (res.ok){
        const enrollments = await res.json();
        dispatch( getUserEnrollments(enrollments));
        return enrollments
    };
    return res;
};

export const fetchUserProgresses = () => async (dispatch) => {
    const res = await fetch(`/api/users/progresses`);

    if (res.ok){
        const progresses = await res.json();
        dispatch( getUserProgresses(progresses));
        return progresses
    };
    return res;
};


export const fetchUpdateProgress = (id,completionStatus) => async (dispatch) => {

    const res = await fetch(`/api/progresses/${id}`,{
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body : JSON.stringify({'completion_status' : parseInt(completionStatus)})
      }
    );

    if (res.ok){
        const progress = await res.json();
        dispatch(updateProgressById(progress));
        return progress
    };
    
    return res;
};

// ******** REDUCER ********
const initialState = {all_users:{},enrollments:{},progresses:{}};

const userReducer = (state = initialState, action) => {
    let newState = {...state};
    switch(action.type) {
        case GET_ALLUSERS:
            newState.all_users=action.payload;
            return newState;
        case GET_USERENROLLMENTS:
            newState.enrollments=action.payload;
            return newState;
        case GET_USERPROGRESSES:
            newState.progresses=action.payload;
            return newState;
        case UPDATE_PROGRESS:
            // newState.progresses[action.payload.assignmentId] = action.payload;
            // return {...newState, ...newState.progresses:  };
            return {
                ...newState,
                progresses: {
                  ...newState.progresses,
                  [action.payload.assignmentId]: {
                    ...action.payload
                  }
                }
              }
        default:
            return newState;
    }
}

export default userReducer;