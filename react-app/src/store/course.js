// ******** Course Constraints ********
const GET_COURSE = 'user/GET_COURSE';

// ******** Course Actions ********

const getCourseById = (course) => ({
    type: GET_COURSE,
    payload: course
  });



// ******** Course THUNKs ********

export const fetchGetCourseById = (courseId) => async (dispatch) => {
    const res = await fetch(`/api/courses/${courseId}`);

    if (res.ok){
        const course = await res.json();
        dispatch(getCourseById(course));
        return course
    };
    return res;
};

// ******** REDUCER ********
const initialState = {};

const courseReducer = (state = initialState, action) => {
    let newState = {...state};
    switch(action.type) {
        case GET_COURSE:
            newState = action.payload;
            return newState;
        default:
            return newState;
    }
}

export default courseReducer;