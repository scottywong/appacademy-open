import EnrollmentList from '../../Enrollment/EnrollmentList';
import AssignmentList from '../../Assignment/AssignmentList';
import './CourseDetail.css';
import { useParams } from 'react-router';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchGetCourseById } from '../../../../store/course';

function CourseDetail(){

    const dispatch = useDispatch();
    const {courseId} = useParams();

    const course = useSelector(state => state.course?.one_course);

    useEffect(()=> {
        dispatch(fetchGetCourseById(courseId));
    },[dispatch]);

    return (

        <div className='CourseDetail-container'>
            <h1 className='CourseDetail-title'> {course?.title} </h1>
           
            <div className='CourseDetail-btns'>
                <button> Edit Course </button>
                <button> Delete Course </button>
                <button> Add Assignment </button>
                <button> Add Enrollment </button>
            </div>
            <div className='CourseDetail-lists'>
                <AssignmentList courseId={courseId}/>
                <EnrollmentList courseId={courseId}/>
            </div>
        </div>
    );
}

export default CourseDetail;