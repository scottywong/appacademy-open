// ******** Enrollment Constraints ********
const GET_ENROLLMENT = 'user/GET_ENROLLMENT';

// ******** Enrollment Actions ********

const getEnrollmentById = (enrollment) => ({
    type: GET_ENROLLMENT,
    payload: enrollment
  });



// ******** Enrollment THUNKs ********

export const fetchGetEnrollmentById = (enrollmentId) => async (dispatch) => {
    const res = await fetch(`/api/enrollments/${enrollmentId}`);

    if (res.ok){
        const enrollment = await res.json();
        dispatch(getEnrollmentById(enrollment));
        return enrollment
    };
    return res;
};

// ******** REDUCER ********
const initialState = {};

const enrollmentReducer = (state = initialState, action) => {
    let newState = {...state};
    switch(action.type) {
        case GET_ENROLLMENT:
            newState = action.payload;
            return newState;
        default:
            return newState;
    }
}

export default enrollmentReducer;