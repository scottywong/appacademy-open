import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchGetCourses } from '../../../../store/course';
import CourseListItem from '../CourseListItem';
import './CourseList.css';

function CourseList(){

    const courses = Object.values(useSelector(state => state.course?.all_courses ?  state.course?.all_courses :  [] ))
    const dispatch = useDispatch();
    console.log('courses: ', courses)

    useEffect (() => {

        dispatch(fetchGetCourses());

    },[dispatch])


    return  (

        <div className="CourseList-container"> 
        <h1> Course List </h1>
            {courses?.map( course =>  <CourseListItem course={course} /> )}
        </div>
    )
}

export default CourseList;