import { useEffect } from 'react';
import { useParams } from 'react-router';
import {useSelector, useDispatch} from 'react-redux';
import {fetchGetAssignmentById} from '../../../store/assignment';

import './AssignmentDetailStudent.css';
import { fetchUserProgresses, fetchUpdateProgress } from '../../../store/user';
// import { fetchUpdateProgress } from '../../../store/progress';

function AssignmentDetailStudent(){

    const {assignmentId} = useParams();
    const dispatch = useDispatch();

    const assignment = useSelector(state => state.assignment?.one_assignment);
    const myProgresses = useSelector(state => state.user.progresses);

    console.log('adS-assignment: ', assignment);
    console.log('adS-progresses: ', myProgresses);
    let adsProgress;

    if(myProgresses){
        adsProgress = myProgresses[assignmentId];
    }
    
    useEffect(()=> {

        dispatch(fetchGetAssignmentById(assignmentId));
        dispatch(fetchUserProgresses());

    },[dispatch])

    const handleIncomplete = async (e) => {

        e.preventDefault();
        dispatch(fetchUpdateProgress(adsProgress.id,0));
    }

    const handleComplete = async (e) => {
        e.preventDefault();
        dispatch(fetchUpdateProgress(adsProgress.id,1));

    }


    return (

        <div className='ads-container'>
            <h1> {assignment.Task?.title}</h1>
            <p>{assignment.Task?.detail}</p>
            <button className="ads-CompleteBtn"onClick={handleComplete}> ✔︎ Mark As Complete</button>
            <button className="ads-IncompleteBtn"onClick={handleIncomplete}> Mark Incomplete</button>
       </div>
    )

}

export default AssignmentDetailStudent;