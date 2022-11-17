import { useEffect } from 'react';
import { useParams } from 'react-router';
import {useSelector, useDispatch} from 'react-redux';
import {fetchGetAssignmentById} from '../../../store/assignment';

import './AssignmentDetailStudent.css';

function AssignmentDetailStudent(){

    const {assignmentId} = useParams();
    const dispatch = useDispatch();

    const assignment = useSelector(state => state.assignment);

    console.log('adS: ', assignment);
    
    useEffect(()=> {

        dispatch(fetchGetAssignmentById(assignmentId));

    },[dispatch])

    const handleComplete = () => {


    }

    return (

        <div className='ads-container'>
            <p>{assignment.Task?.detail}</p>
            <button onClick={handleComplete}> Complete Task</button>
       </div>
    )

}

export default AssignmentDetailStudent;