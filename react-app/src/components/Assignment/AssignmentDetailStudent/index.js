import { useEffect } from 'react';
import { useParams } from 'react-router';
import {useSelector, useDispatch} from 'react-redux';
import {fetchGetAssignmentById} from '../../../store/assignment';

import './AssignmentDetailStudent.css';
import { fetchUserProgresses, fetchUpdateProgress } from '../../../store/user';

function AssignmentDetailStudent(){

    const {assignmentId} = useParams();
    const dispatch = useDispatch();

    const assignment = useSelector(state => state.assignment?.one_assignment);
    const myProgresses = useSelector(state => state.user.progresses);

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
    const styleObj = {
        height: '600px',
        width: '85vw'
      };
      
    return  (

        <div className='ads-container'>
            
            {assignment &&<>
            <div className='learnpage-title-container'><h1> {assignment?.Task?.title}</h1></div>
         
            <div style={styleObj} dangerouslySetInnerHTML={{__html: assignment?.Task?.detail}}></div>

            <div className='ads-buttons'>
                <button className="ads-CompleteBtn"onClick={handleComplete}> ✔︎ Mark As Complete</button>
                <button className="ads-IncompleteBtn"onClick={handleIncomplete}> Mark Incomplete</button>
            </div></>}
            {!assignment &&
                 <p>Something went wrong!</p>}   
       </div>
    )

}

export default AssignmentDetailStudent;