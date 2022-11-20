// ******** Enrollment Constraints ********
const GET_ENROLLMENT = 'user/GET_ENROLLMENT';
const GET_ENROLLMENTS = 'admin/GET_ENROLLMENTS';
const GET_ENROLLMENTSBYCOURSEID = 'admin/GET_ENROLLMENTSBYCOURSEID';
// ******** Enrollment Actions ********'


const getEnrollments= (enrollments) =>({
    type: GET_ENROLLMENTS,
    payload: enrollments
});
const getEnrollmentSByCourseId= (enrollments) =>({
    type: GET_ENROLLMENTSBYCOURSEID,
    payload: enrollments
});

const getEnrollmentById = (enrollment) => ({
    type: GET_ENROLLMENT,
    payload: enrollment
  });



// ******** Enrollment THUNKs ********
export const fetchGetEnrollments = () => async (dispatch) => {
    const res = await fetch(`/api/enrollments/`);

    if (res.ok){
        const enrollments = await res.json();
        dispatch(getEnrollments(enrollments));
        return enrollments
    };
    return res;
}

export const fetchGetEnrollmentsByCourseId = (courseId) => async (dispatch) => {
    const res = await fetch(`/api/courses/${courseId}/enrollments`);

    if (res.ok){
        const enrollments = await res.json();
        dispatch(getEnrollmentSByCourseId(enrollments));
        return enrollments
    };
    return res;
}
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
            newState.one_enrollment = action.payload;
            return newState;
        case GET_ENROLLMENTS:
            newState.all_enrollments = {};
            action.payload['Enrollments'].forEach(enrollment => newState.all_enrollments[enrollment.id] = enrollment);
            return newState;
        case GET_ENROLLMENTSBYCOURSEID:
            newState.enrollments = {};
            action.payload['Enrollments'].forEach(enrollment => newState.enrollments[enrollment.id] = enrollment);
            return newState;
        default:
            return newState;
    }
}

export default enrollmentReducer;