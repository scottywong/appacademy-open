import { useEffect,useState } from 'react';
import { useParams } from 'react-router';
import {useSelector, useDispatch} from 'react-redux';
import {fetchGetAssignmentById} from '../../../store/assignment';
import { fetchUserProgresses, fetchUpdateProgress } from '../../../store/user';
import './AssignmentDetailStudent.css';

function AssignmentDetailStudent(){

    const {assignmentId,enrollmentId} = useParams();
    const dispatch = useDispatch();

    const assignment = useSelector(state => state.assignment?.one_assignment);
    const user = useSelector(state => state.user);
    const [adsProgress,setadsProgress] = useState(0);
    const [errors,setErrors] = useState([]);

    useEffect( ()=> {
       if(user.progresses){
           const existingProgress = Object.values(user.progresses).filter(progress=> progress['assignmentId'] === parseInt(assignmentId) && progress['enrollmentId'] === parseInt(enrollmentId))
           if(existingProgress.length > 0 ){
               setadsProgress(existingProgress[0]?.id)
           }
       }
    },[user.progresses,adsProgress,assignmentId])
    
    useEffect(()=> {
        dispatch(fetchUserProgresses());
        dispatch(fetchGetAssignmentById(assignmentId));

    },[dispatch,assignmentId])

    const handleIncomplete = async (e) => {

        e.preventDefault();
        dispatch(fetchUpdateProgress(adsProgress,assignmentId,enrollmentId,0));
    }

    const handleComplete = async (e) => {
        e.preventDefault();
        dispatch(fetchUpdateProgress(adsProgress,assignmentId,enrollmentId,1))
        .then(async(res) => {
            if(res.ok === false) {
              const data = await res.json()
              if (data && data.errors) setErrors(data.errors)
            } else {
                setadsProgress(res.id)
            }
          });
    }
    const styleObj = {
        padding:'20px',
        width: '60vw'
      };
      
    return  (

        <div className='ads-container'>

            {assignment &&<>
            <div className='learnpage-title-container'><h1> {assignment?.Task?.title}</h1></div>
         
            <div style={styleObj} dangerouslySetInnerHTML={{__html: assignment?.Task?.detail}}>
            </div>
            <ul className='errorMsg'>
                {errors.map((error, idx) => (
                    <li className='errors' key={idx}>
                    {error}
                    </li>
                ))}
            </ul>

            <div className='ads-buttons'>
                <button className="ads-button ads-CompleteBtn"onClick={handleComplete}> ✔︎ Mark As Complete</button>
                <button className="ads-button ads-IncompleteBtn"onClick={handleIncomplete}> Mark Incomplete</button>
            </div>
            </>}
            {!assignment &&
                 <p>Something went wrong!</p>}   
       </div>
    )

}

export default AssignmentDetailStudent;