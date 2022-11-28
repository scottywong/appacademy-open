import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchGetAssignmentsByCourseId, fetchGetAssignmentsByTaskId } from '../../../../store/assignment';
import AssignmentListItem from '../AssignmentListItem';
import { useLocation } from 'react-router';
import './AssignmentList.css';

function AssignmentList({courseId,taskId,refreshAssignmentList}){

    const dispatch = useDispatch();
    const location = useLocation();
    const assignmentsTask = Object.values(useSelector(state=>state.assignment?.assignmentsByTaskId ? state.assignment?.assignmentsByTaskId : {}));
    const assignmentsCourse = Object.values(useSelector(state=>state.assignment?.assignmentsByCourseId ? state.assignment?.assignmentsByCourseId : {}));
    console.log('AssignmentList - tasks: ', assignmentsTask)
    console.log('AssignmentList - courses: ', assignmentsCourse)

    useEffect(()=> {
        dispatch(fetchGetAssignmentsByCourseId(courseId));
        dispatch(fetchGetAssignmentsByTaskId(taskId));
    },[dispatch]);

    return  (

        <div className="AssignmentList-container"> 
        <h1> Assignment List </h1>
            {location.pathname.includes('tasks') && assignmentsTask?.map( assignment =>  <AssignmentListItem assignment={assignment} refreshAssignmentList={refreshAssignmentList}/> )}
            {location.pathname.includes('courses') && assignmentsCourse?.map( assignment =>  <AssignmentListItem assignment={assignment} refreshAssignmentList={refreshAssignmentList}/> )}
            {assignmentsTask?.length === 0 && assignmentsCourse?.length === 0 && <p>No assignments to display.</p>}
        </div>
    )
}

export default AssignmentList;