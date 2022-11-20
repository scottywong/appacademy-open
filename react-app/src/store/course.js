// ******** Course Constraints ********
const GET_COURSE = 'user/GET_COURSE';
const GET_COURSES = 'admin/GET_COURSES';

// ******** Course Actions ********

const getCourses = (courses) =>({
    type: GET_COURSES,
    payload: courses
});

const getCourseById = (course) => ({
    type: GET_COURSE,
    payload: course
});



// ******** Course THUNKs ********
export const fetchGetCourses = () => async (dispatch) => {
    const res = await fetch(`/api/courses/`);

    if (res.ok){
        const courses = await res.json();
        dispatch(getCourses(courses));
        return courses
    };
    return res;
}

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
            newState.one_course = action.payload;
            return newState;
        case GET_COURSES:
            newState.all_courses = {};
            action.payload['Courses'].forEach(course => newState.all_courses[course.id] = course);
            return newState;
        default:
            return newState;
    }
}

export default courseReducer;