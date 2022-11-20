import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchGetEnrollmentsByCourseId } from '../../../../store/enrollment';
import AssignmentListItem from '../AssignmentListItem';
import './AssignmentList.css';

function AssignmentList({courseId}){

    const dispatch = useDispatch();
    const assignments = Object.values(useSelector(state=>state.enrollment?.one_enrollment?.Assignments? state.enrollment.one_enrollment?.Assignments : state.enrollment));

    //get all assignments by CourseId
    useEffect(()=> {
        // dispatch(fetchGetEnrollmentsByCourseId(courseId);
    },[dispatch]);

    return  (

        <div className="AssignmentList-container"> 
            {assignments?.map( assignment =>  <AssignmentListItem assignment={assignment} /> )}
        </div>
    )
}

export default AssignmentList;