// ******** Assignment Constraints ********
const GET_ASSIGNMENTS = 'assignment/GET_ASSIGNMENTS';
const GET_ASSIGNMENT = 'assignment/GET_ASSIGNMENT';
const GET_ASSIGNMENTSBYCOURSEID = 'admin/GET_ASSIGNMENTSBYCOURSEID';
const GET_ASSIGNMENTSBYTASKID = 'admin/GET_ASSIGNMENTSBYTASKID';
const CREATE_ASSIGNMENT = 'admin/CREATE_ASSIGNMENT';
const CREATE_ASSIGNMENTS = 'admin/CREATE_ASSIGNMENTS';
const DELETE_ASSIGNMENT = 'admin/DELETE_ASSIGNMENT';

// ******** Assignment Actions ********

const getAssignments = (assignments) => ({
    type: GET_ASSIGNMENTS,
    payload: assignments
});
const getAssignmentById = (assignment) => ({
    type: GET_ASSIGNMENT,
    payload: assignment
  });

const getAssignmentsByCourseId = (assignments) => ({
    type: GET_ASSIGNMENTSBYCOURSEID,
    payload: assignments
});

const getAssignmentsByTaskId = (assignments) => ({
    type: GET_ASSIGNMENTSBYTASKID,
    payload: assignments
});

const createAssignment = (assignment) => ({
    type: CREATE_ASSIGNMENT,
    payload: assignment
})
const createAssignments = (assignments,parentType) => ({
    type: CREATE_ASSIGNMENTS,
    parentType: parentType,
    payload: assignments
})
const deleteAssignment = (assignmentId) => ({
    type: DELETE_ASSIGNMENT,
    payload: assignmentId
})

// ******** Assignment THUNKs ********
export const fetchGetAssignments = () => async (dispatch) => {
    const res = await fetch(`/api/assignments`);

    if (res.ok){
        const assignments = await res.json();
        dispatch(getAssignments(assignments));
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


export const fetchCreateAssignments = (payload) => async (dispatch) => {

    const res = await fetch(`/api/assignments/list`,{
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body : JSON.stringify(payload)
      }
    );

    if (res.ok){
        const assignments = await res.json();
        dispatch(createAssignments(assignments,payload.parent_type));
        return assignments;
    };
    
}
export const fetchDeleteAssignment = (assignmentId) => async (dispatch) => {

    const res = await fetch(`/api/assignments/${assignmentId}`,{
        method: 'DELETE'
    });

    if(res.ok){
        const returnMsg = await res.json();
        dispatch(deleteAssignment(assignmentId));
        return returnMsg;
    }

    return res;
}



// ******** REDUCER ********
const initialState = {  all_assignments:{},
                        one_assignment:{},
                        assignmentsByCourseId:{},
                        assignmentsByTaskId:{},
                        created_assignment:{},
                        created_assignments:{}
                        };

const assignmentReducer = (state = initialState, action) => {
    let newState = {...state};
 
    switch(action.type) {
        case GET_ASSIGNMENTS:
            newState.all_assignments = action.payload;
            return newState;
        case GET_ASSIGNMENT:
            newState.one_assignment = action.payload;
            return newState;
        case GET_ASSIGNMENTSBYCOURSEID: 
            newState.assignmentsByCourseId = action.payload;
            return {...newState};
        case GET_ASSIGNMENTSBYTASKID:
            newState.assignmentsByTaskId = action.payload;
            return {...newState};
        case CREATE_ASSIGNMENT:
            newState.created_assignment = action.payload;
            if(newState.assignmentsByCourseId) newState.assignmentsByCourseId[action.payload?.courseId] = action.payload;
            if(newState.assignmentsByTaskId) newState.assignmentsByTaskId[action.payload?.taskId] = action.payload;
            return {...newState};
        case CREATE_ASSIGNMENTS:
            newState.created_assignments = action.payload;
            newState.all_assignments = Object.assign(newState.all_assignments,action.payload) 
            if(action.parentType==='course') newState.assignmentsByCourseId = Object.assign(newState.assignmentsByCourseId,action.payload) 
            if(action.parentType==='task') newState.assignmentsByTaskId=Object.assign(newState.assignmentsByTaskId,action.payload) 
            return {...newState};
        case DELETE_ASSIGNMENT:
            if(newState.assignmentsByCourseId[action.payload]) delete newState.assignmentsByCourseId[action.payload];
            if(newState.assignmentsByTaskId[action.payload]) delete newState.assignmentsByTaskId[action.payload];
            return {...newState};
        default:
            return newState;
    }
}

export default assignmentReducer;