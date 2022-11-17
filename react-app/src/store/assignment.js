// ******** Assignment Constraints ********
const GET_ASSIGNMENT = 'assignment/GET_ASSIGNMENT';

// ******** Assignment Actions ********

const getAssignmentById = (assignment) => ({
    type: GET_ASSIGNMENT,
    payload: assignment
  });



// ******** Assignment THUNKs ********

export const fetchGetAssignmentById = (assignmentId) => async (dispatch) => {
    const res = await fetch(`/api/assignments/${assignmentId}`);

    if (res.ok){
        const assignment = await res.json();
        dispatch(getAssignmentById(assignment));
        return assignment
    };
    return res;
};

// ******** REDUCER ********
const initialState = {};

const assignmentReducer = (state = initialState, action) => {
    let newState = {...state};
    switch(action.type) {
        case GET_ASSIGNMENT:
            newState = action.payload;
            return newState;
        default:
            return newState;
    }
}

export default assignmentReducer;