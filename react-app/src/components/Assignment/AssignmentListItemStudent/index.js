import { NavLink } from "react-router-dom";
import { useHistory, useParams,useLocation } from "react-router";
import {useSelector,useDispatch} from 'react-redux';
import { fetchGetAssignmentById } from "../../../store/assignment";
import { useState, useEffect } from "react";
import './AssignmentListItemStudent.css';

function AssignmentListItemStudent({assignment}){
    const history = useHistory();
    const location = useLocation();
    const dispatch = useDispatch();
    const {enrollmentId} = useParams();
    const [isChecked,setIsChecked] = useState(false);

    const myProgresses = useSelector(state => state.user.progresses);

    const aliClass = location.pathname===`/learn/enrollments/${enrollmentId}/assignments/${assignment?.id}` ? 'selected-ali' : '';
    
    const refreshADS = (assignmentId) => {
        dispatch(fetchGetAssignmentById(assignmentId))
    }

    useEffect( ()=> {

        if(myProgresses &&  myProgresses[assignment?.id] && myProgresses[assignment?.id].completion_status===1) setIsChecked(true)
        if(myProgresses &&  myProgresses[assignment?.id] && myProgresses[assignment?.id].completion_status===0) setIsChecked(false)

    },[myProgresses])
    return (
        
        
        <div className="ali-student-container">
        { assignment && 
            <div className={`ali-student-item ${aliClass}`} onClick={()=> {
                history.push(`/learn/enrollments/${enrollmentId}/assignments/${assignment.id}`)
                refreshADS(assignment?.id)}} >
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