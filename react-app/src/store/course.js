// ******** Course Constraints ********
const GET_COURSE = 'user/GET_COURSE';
const GET_COURSES = 'admin/GET_COURSES';
const CREATE_COURSE = 'admin/CREATE_COURSE';
const DELETE_COURSE = 'admin/DELETE_COURSE';
const UPDATE_COURSE = 'admin/UPDATE_COURSE';
// ******** Course Actions ********

const getCourses = (courses) =>({
    type: GET_COURSES,
    payload: courses
});

const getCourseById = (course) => ({
    type: GET_COURSE,
    payload: course
});

const createCourse = (course) => ({
    type: CREATE_COURSE,
    payload: course
})

const updateCourse = (course) => ({
    type: UPDATE_COURSE,
    payload: course
})

const deleteCourse = (courseId) => ({
    type: DELETE_COURSE,
    payload: courseId
})


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

export const fetchCreateCourse = (course) => async (dispatch) => {

    const res = await fetch(`/api/courses/`,{
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body : JSON.stringify(course)
      }
    );

    if (res.ok){
        const course = await res.json();
        dispatch(createCourse(course));
        return course;
    };
    
}

export const fetchUpdateCourse = (course,courseId) => async (dispatch) => {

    const res = await fetch(`/api/courses/${courseId}`,{
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body : JSON.stringify(course)
      }
    );

    if (res.ok){
        const course = await res.json();
        dispatch(updateCourse(course));
        return course;
    };
    
}
export const fetchDeleteCourse = (courseId) => async (dispatch) => {

    const res = await fetch(`/api/courses/${courseId}`,{
        method: 'DELETE'
    });
        
    if(res.ok){
        const course = await res.json();
        dispatch(deleteCourse(course));
        return course;
    }

    return res;
}

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
        case CREATE_COURSE:
            newState.created_course = action.payload;
            newState.all_courses[action.payload.id] = action.payload;
            return {...newState};
        case DELETE_COURSE:
            if(newState.all_courses){
                delete newState.all_courses[action.payload];
            }
            return {...newState,
                all_courses: {
                    ...newState.all_courses
                }
            
            };
        default:
            return newState;
    }
}

export default courseReducer;