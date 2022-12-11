import { NavLink } from "react-router-dom";
import { useHistory, useParams,useLocation } from "react-router";
import {useSelector,useDispatch} from 'react-redux';
import { fetchGetAssignmentById } from "../../../store/assignment";
import { useState, useEffect } from "react";
import './AssignmentListItemStudent.css';
import { fetchUserProgresses } from "../../../store/user";

function AssignmentListItemStudent({assignment}){
    const history = useHistory();
    const location = useLocation();
    const dispatch = useDispatch();
    const {enrollmentId} = useParams();
    const [isChecked,setIsChecked] = useState(false);


    const myProgresses = useSelector(state => state.user.progresses);

    const aliClass = location.pathname===`/learn/enrollments/${enrollmentId}/assignments/${assignment?.id}` ? 'selected-ali' : '';

    useEffect( ()=> {

        if(myProgresses){
            const existingProgress = Object.values(myProgresses).filter(progress=> progress['assignmentId'] === parseInt(assignment?.id) && progress['enrollmentId'] === parseInt(enrollmentId))
            console.log('ep:' , existingProgress)
            if(existingProgress.length === 1 && existingProgress[0].completion_status===parseInt(1)){

                console.log('only 1 found')
                setIsChecked(true)
            } else if(existingProgress.length > 1){
            
                console.log('More than one progress found with same assId and eId');
            }

        }
    },[myProgresses])


    return (
        
        
        <div className="ali-student-container">
        { assignment && 
            <div className={`ali-student-item ${aliClass}`} onClick={()=> {
                history.push(`/learn/enrollments/${enrollmentId}/assignments/${assignment.id}`)
                }} >
                <div className='ali-check'>
                    {isChecked && <i className="fa-solid fa-circle-check"></i>}
                    {!isChecked && <i className="fa-regular fa-circle"></i>}
                </div>

                <div className="ali-student-link" onClick={()=>history.push(`/learn/enrollments/${enrollmentId}/assignments/${assignment.id}`)}>{assignment.Task?.title}</div>
                
                <i className="fa-solid fa-arrow-right"></i>
            </div>
            } 
        </div>



    )

}

export default AssignmentListItemStudent;