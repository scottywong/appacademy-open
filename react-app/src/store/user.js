// ******** User Constraints ********
const GET_USERENROLLMENTS = 'user/GET_enrollments';
const GET_USERPROGRESSES = 'user/GET_progresses';

// ******** User Actions ********

const getUserEnrollments = (enrollments) => ({
    type: GET_USERENROLLMENTS,
    payload: enrollments
  });



// ******** User THUNKs ********

export const fetchUserEnrollments = () => async (dispatch) => {
    const res = await fetch(`/api/users/enrollments`);

    if (res.ok){
        const enrollments = await res.json();
        dispatch( getUserEnrollments(enrollments));
        return enrollments
    };
    return res;
};

// ******** REDUCER ********
const initialState = {};

const userReducer = (state = initialState, action) => {
    let newState = {...state};
    switch(action.type) {
        case GET_USERENROLLMENTS:
            newState.enrollments = {};
            action.payload['My Enrollments'].forEach(e => newState.enrollments[e.id] = e);
            return newState;
        case GET_USERPROGRESSES:
            newState.progresses = {};
            action.payload['My Progresses'].forEach(p => newState.progress[p.id] = p);
            return newState;
        default:
            return newState;
    }
}

export default userReducer;