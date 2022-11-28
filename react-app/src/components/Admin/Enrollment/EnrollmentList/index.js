import { useSelector, useDispatch } from 'react-redux';
import { fetchGetEnrollmentsByCourseId } from '../../../../store/enrollment';
import { useEffect } from 'react';
import EnrollmentListItem from '../EnrollmentListItem';
import './EnrollmentList.css';

function EnrollmentList({courseId}){
    const dispatch = useDispatch();
    const enrollments = Object.values(useSelector(state => state.enrollment?.enrollments ?  state.enrollment?.enrollments :  [] ))
    
    useEffect (() => {
        dispatch(fetchGetEnrollmentsByCourseId(courseId));
    },[dispatch])

    return  (

        <div className="EnrollmentList-container"> 
        <h1> Enrollment List </h1>
            {enrollments?.map( enrollment =>  <EnrollmentListItem enrollment={enrollment} /> )}
            {enrollments?.length === 0 && <p>No enrollments to display.</p>}
        </div>
    )
}

export default EnrollmentList;