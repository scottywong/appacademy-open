import { NavLink } from "react-router-dom";
import { useHistory, useParams } from "react-router";
import {useSelector} from 'react-redux';
import { useState, useEffect } from "react";

import './AssignmentListItemStudent.css';

function AssignmentListItemStudent({assignment}){
    const history = useHistory();
    const {enrollmentId} = useParams();
    const [isChecked,setIsChecked] = useState(false);

    const myProgresses = useSelector(state => state.user.progresses);
    // const myOneProgress = useSelector(state => state.progress)
    // console.log('ALIStudent: ', assignment)
    // console.log('ALIStudent-myProgresses', myProgresses)
    // console.log('ALIStudent-MyOneProgress', myOneProgress.completion_status)
    useEffect( ()=> {

        if(myProgresses && myProgresses[assignment?.id].completion_status===1) setIsChecked(true)
        if(myProgresses && myProgresses[assignment?.id].completion_status===0) setIsChecked(false)

    },[myProgresses])
    return (
        
        <div className="ali-student-container">
        { assignment && 
            <div onClick={()=> history.push(`/learn/enrollments/${enrollmentId}/assignments/${assignment.id}`)} className='ali-student-item'>
                {isChecked && <i className="fa-solid fa-circle-check"></i>}
                {!isChecked && <i className="fa-regular fa-circle"></i>}
                <NavLink className="ali-student-link" to={`/learn/enrollments/${enrollmentId}/assignments/${assignment.id}`}>{assignment.Task?.title}</NavLink>
                <i className="fa-solid fa-arrow-right"></i>
            </div>
            } 
        </div>



    )

}

export default AssignmentListItemStudent;