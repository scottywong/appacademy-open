// ******** Assignment Constraints ********
const GET_ASSIGNMENT = 'assignment/GET_ASSIGNMENT';
const GET_ASSIGNMENTSBYCOURSEID = 'admin/GET_ASSIGNMENTSBYCOURSEID';


// ******** Assignment Actions ********

const getAssignmentsByCourseId = (assignments) => ({
    type: GET_ASSIGNMENTSBYCOURSEID,
    payload: assignments
  });

const getAssignmentById = (assignment) => ({
    type: GET_ASSIGNMENT,
    payload: assignment
  });



// ******** Assignment THUNKs ********

export const fetchGetAssignmentsByCourseId = (courseId) => async (dispatch) => {
    const res = await fetch(`/api/courses/${courseId}/assignments`);

    if (res.ok){
        const assignments = await res.json();
        dispatch(getAssignmentsByCourseId(assignments));
        return assignments
    };
    return res;
};

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
            newState.one_assignment = action.payload;
            return newState;
        case GET_ASSIGNMENTSBYCOURSEID: 
            newState.assignmentsByCourseId = {};
            action.payload['Assignments'].forEach( a => {
                newState.assignmentsByCourseId[a.id] = a;
            });
            return newState;
        
        default:
            return newState;
    }
}

export default assignmentReducer;