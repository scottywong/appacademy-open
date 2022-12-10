// ******** Progress Constraints ********
const GET_PROGRESS = 'progress/GET_PROGRESS';
const UPDATE_PROGRESS = 'progress/UPDATE_PROGRESS';
// ******** Progress Actions ********

const getProgressById = (progress) => ({
    type: GET_PROGRESS,
    payload: progress
  });

const updateProgressById = (progress) => ({
    type: UPDATE_PROGRESS,
    payload: progress
});



// ******** Progress THUNKs ********

export const fetchGetProgressById = (progressId) => async (dispatch) => {
    const res = await fetch(`/api/progresses/${progressId}`);

    if (res.ok){
        const progress = await res.json();
        dispatch(getProgressById(progress));
        return progress
    };
    return res;
};

export const fetchUpdateProgress = (id,assignmentId,enrollmentId,completionStatus) => async (dispatch) => {

    const res = await fetch(`/api/progresses/${id}`,{
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body : JSON.stringify({
            'completion_status' : parseInt(completionStatus),
            'assignmentId': parseInt(assignmentId),
            'enrollmentId': parseInt(enrollmentId)})
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
const initialState = {};

const progressReducer = (state = initialState, action) => {
    let newState = {...state};
    switch(action.type) {
        case GET_PROGRESS:
            newState = action.payload;
            return newState;
        case UPDATE_PROGRESS:
            newState = action.payload;
            
            return newState;
        default:
            return newState;
    }
}

export default progressReducer;