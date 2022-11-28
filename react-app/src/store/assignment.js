// ******** Assignment Constraints ********
const GET_ASSIGNMENT = 'assignment/GET_ASSIGNMENT';
const GET_ASSIGNMENTSBYCOURSEID = 'admin/GET_ASSIGNMENTSBYCOURSEID';
const GET_ASSIGNMENTSBYTASKID = 'admin/GET_ASSIGNMENTSBYTASKID';
const CREATE_ASSIGNMENT = 'admin/CREATE_ASSIGNMENT';
const DELETE_ASSIGNMENT = 'admin/DELETE_ASSIGNMENT';

// ******** Assignment Actions ********

const getAssignmentsByCourseId = (assignments) => ({
    type: GET_ASSIGNMENTSBYCOURSEID,
    payload: assignments
});

const getAssignmentsByTaskId = (assignments) => ({
    type: GET_ASSIGNMENTSBYTASKID,
    payload: assignments
});
const getAssignmentById = (assignment) => ({
    type: GET_ASSIGNMENT,
    payload: assignment
  });

const createAssignment = (assignment) => ({
    type: CREATE_ASSIGNMENT,
    payload: assignment
})

const deleteAssignment = (assignmentId) => ({
    type: DELETE_ASSIGNMENT,
    payload: assignmentId
})

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

export const fetchGetAssignmentsByTaskId = (taskId) => async (dispatch) => {
    const res = await fetch(`/api/tasks/${taskId}/assignments`);

    if (res.ok){
        const assignments = await res.json();
        dispatch(getAssignmentsByTaskId(assignments));
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

export const fetchCreateAssignment = (assignment) => async (dispatch) => {

    const res = await fetch(`/api/assignments/`,{
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body : JSON.stringify(assignment)
      }
    );

    if (res.ok){
        const assignment = await res.json();
        dispatch(createAssignment(assignment));
        return assignment;
    };
    
}
export const fetchDeleteAssignment = (assignmentId) => async (dispatch) => {

    const res = await fetch(`/api/assignments/${assignmentId}`,{
        method: 'DELETE'
    });
        
    if(res.ok){
        const assignment = await res.json();
        dispatch(deleteAssignment(assignment));
        return assignment;
    }

    return res;
}



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
        case GET_ASSIGNMENTSBYTASKID:
            newState.assignmentsByTaskId = {};
            action.payload['Assignments'].forEach( a => {
                newState.assignmentsByTaskId[a.id] = a;
            });
            return newState;
        case CREATE_ASSIGNMENT:
            newState.created_assignment = action.payload;
            if(newState.assignmentsByCourseId) newState.assignmentsByCourseId[action.payload?.courseId] = action.payload;
            if(newState.assignmentsByTaskId) newState.assignmentsByTaskId[action.payload?.taskId] = action.payload;
            return {...newState};
        case DELETE_ASSIGNMENT:
            if(newState.assignmentsByCourseId){
                delete newState.assignmentsByCourseId[action.payload?.courseId];
            }
            if(newState.assignmentsBytaskId){
                delete newState.assignmentsBytaskId[action.payload?.taskId];
            }
            return {...newState,
                assignmentsByCourseId: {
                    ...newState.assignmentsByCourseId
                },
                assignmentsBytaskId: {
                    ...newState.assignmentsBytaskId
                }
            
            };
        default:
            return newState;
    }
}

export default assignmentReducer;