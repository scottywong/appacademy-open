import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchGetAssignmentsByCourseId, fetchGetAssignmentsByTaskId } from '../../../../store/assignment';
import AssignmentListItem from '../AssignmentListItem';
import './AssignmentList.css';

function AssignmentList({courseId,taskId,refreshAssignmentList}){

    const dispatch = useDispatch();
    const assignments = Object.values(useSelector(state=>state.assignment?.assignments ? state.assignment?.assignments :state.assignment));
    
    console.log('AssignmentList - assignments: ', Object.values(assignments)[0])

    const refreshAssignmentListTask = () => {

        dispatch(fetchGetAssignmentsByTaskId(taskId));
    }
    useEffect(()=> {
        dispatch(fetchGetAssignmentsByCourseId(courseId));
        dispatch(fetchGetAssignmentsByTaskId(taskId));
    },[dispatch]);

    return  (

        <div className="AssignmentList-container"> 
        <h1> Assignment List </h1>
            {assignments?.map( assignment =>  <AssignmentListItem assignment={Object.values(assignment)[0]} refreshAssignmentList={refreshAssignmentList}/> )}
        </div>
    )
}

export default AssignmentList;