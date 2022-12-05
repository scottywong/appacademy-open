import { useEffect , useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchGetAssignmentsByCourseId, fetchGetAssignmentsByTaskId } from '../../../../store/assignment';
import AssignmentListItem from '../AssignmentListItem';
import { useLocation } from 'react-router';
import './AssignmentList.css';

function AssignmentList({courseId,taskId}){

    const dispatch = useDispatch();
    const location = useLocation();
    const assignments = useSelector(state=>state.assignment);
   
    const [assignmentsTask,setAsssignmentsTask] = useState(false);
    const [assignmentsCourse,setAsssignmentsCourse] = useState(false);
    
    console.log('AssignmentList - tasks: ', assignmentsTask)
    // console.log('AssignmentList - courses: ', assignmentsCourse)

    console.log('al - taskId: ', taskId)

    useEffect(()=> {
        if(location.pathname.includes('/tasks') && assignments.assignmentsByTaskId){
            setAsssignmentsTask(Object.values(assignments.assignmentsByTaskId))
        }
        if(location.pathname.includes('/courses') && assignments.assignmentsByCourseId){
            setAsssignmentsCourse(Object.values(assignments.assignmentsByCourseId))  
        }
    },[assignments,assignments.assignmentsByCourseId,assignments.assignmentsByTaskId]);

    useEffect(()=> {
        if(location.pathname.includes('/courses')) dispatch(fetchGetAssignmentsByCourseId(courseId));
        if(location.pathname.includes('/tasks')) dispatch(fetchGetAssignmentsByTaskId(taskId));
    },[dispatch]);

    return  (assignmentsTask ||assignmentsCourse) && (

        <div className="AssignmentList-container"> 
        <h1> Assignment List </h1>
            {assignmentsTask && assignmentsTask?.map( assignment =>  <AssignmentListItem assignment={assignment} key={`at-${assignment.id}`} /> )}
            {assignmentsCourse&& assignmentsCourse?.map( assignment =>  <AssignmentListItem assignment={assignment} key={`ac-${assignment.id}`} /> )}
            {assignmentsTask?.length === 0 && assignmentsCourse?.length === 0 && <p>No assignments to display.</p>}
        </div>
    )
}

export default AssignmentList;