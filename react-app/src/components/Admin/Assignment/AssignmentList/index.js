import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchGetAssignmentsByCourseId } from '../../../../store/assignment';
import AssignmentListItem from '../AssignmentListItem';
import './AssignmentList.css';

function AssignmentList({courseId}){

    const dispatch = useDispatch();
    const assignments = Object.values(useSelector(state=>state.assignment?.assignments ? state.assignment?.assignments :state.assignment));
    console.log('AssignmentList - assignments: ', assignments)

    useEffect(()=> {
        dispatch(fetchGetAssignmentsByCourseId(courseId));
    },[dispatch]);

    return  (

        <div className="AssignmentList-container"> 
        <h1> Assignment List </h1>
            {assignments?.map( assignment =>  <AssignmentListItem assignment={Object.values(assignment)[0]} /> )}
        </div>
    )
}

export default AssignmentList;