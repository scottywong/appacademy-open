// ******** Enrollment Constraints ********
const GET_ENROLLMENT = 'user/GET_ENROLLMENT';
const GET_ENROLLMENTS = 'admin/GET_ENROLLMENTS';
const GET_ENROLLMENTSBYCOURSEID = 'admin/GET_ENROLLMENTSBYCOURSEID';
const CREATE_ENROLLMENT = 'admin/CREATE_ENROLLMENT';
const CREATE_ENROLLMENTS = 'admin/CREATE_ENROLLMENTS';
const DELETE_ENROLLMENT = 'admin/DELETE_ENROLLMENT';

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
const createEnrollment = (enrollment) => ({
    type: CREATE_ENROLLMENT,
    payload: enrollment
})
const createEnrollments = (enrollments) => ({
    type: CREATE_ENROLLMENTS,
    payload: enrollments
})


const deleteEnrollment = (enrollmentId) => ({
    type: DELETE_ENROLLMENT,
    payload: enrollmentId
})


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
    console.log('this is res hha', res)
    return res;
};

export const fetchCreateEnrollment = (enrollment) => async (dispatch) => {

    const res = await fetch(`/api/enrollments/`,{
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body : JSON.stringify(enrollment)
      }
    );

    if (res.ok){
        const enrollment = await res.json();
        dispatch(createEnrollment(enrollment));
        return enrollment;
    };
    
}

export const fetchCreateEnrollments = (payload) => async (dispatch) => {

    const res = await fetch(`/api/enrollments/list`,{
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body : JSON.stringify(payload)
      }
    );

    if (res.ok){
        const enrollments = await res.json();
        dispatch(createEnrollments(enrollments));
        return enrollments;
    };
    
}
export const fetchDeleteEnrollment = (enrollmentId) => async (dispatch) => {

    const res = await fetch(`/api/enrollments/${enrollmentId}`,{
        method: 'DELETE'
    });
        
    if(res.ok){
        const returnMsg = await res.json();
        dispatch(deleteEnrollment(enrollmentId));
        return returnMsg;
    }

    return res;
}

// ******** REDUCER ********
const initialState = {  one_enrollment:{},
                        all_enrollments:{},
                        enrollments:{},
                        created_enrollment:{}
                    };

const enrollmentReducer = (state = initialState, action) => {
        
    let newState = {...state};
    switch(action.type) {
        case GET_ENROLLMENT:
            newState.one_enrollment = action.payload;
            return newState;
        case GET_ENROLLMENTS:
            newState.all_enrollments = action.payload;
            return newState;
        case GET_ENROLLMENTSBYCOURSEID:
            newState.enrollments = action.payload;
            return newState;
        case CREATE_ENROLLMENT:
            newState.created_enrollment = action.payload;
            newState.enrollments[action.payload?.id] = action.payload;
            if(newState.all_enrollments) newState.all_enrollments[action.payload?.id] = action.payload;
            return {...newState};
        case CREATE_ENROLLMENTS:
            newState.all_enrollments = Object.assign(newState.all_enrollments,action.payload);
            newState.enrollments = Object.assign(newState.enrollments,action.payload)
            return {...newState};
        case DELETE_ENROLLMENT:
            if(newState.all_enrollments[action.payload]) delete newState.all_enrollments[action.payload];
            if(newState.enrollments[action.payload]) delete newState.enrollments[action.payload];
            return {...newState};
        default:
            return newState;
    }
}

export default enrollmentReducer;