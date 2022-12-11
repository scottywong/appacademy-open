import { useHistory, useParams,useLocation } from "react-router";
import './AssignmentListItemStudent.css';

function AssignmentListItemStudent({assignment,completionStatus}){
    const history = useHistory();
    const location = useLocation();
    const {enrollmentId} = useParams();

    const aliClass = location.pathname===`/learn/enrollments/${enrollmentId}/assignments/${assignment?.id}` ? 'selected-ali' : '';

    return (
        
        <div className="ali-student-container">
        { assignment && 
            <div className={`ali-student-item ${aliClass}`} onClick={()=> {
                history.push(`/learn/enrollments/${enrollmentId}/assignments/${assignment.id}`)
                }} >
                <div className='ali-check'>
                    {completionStatus===1 && <i className="fa-solid fa-circle-check"></i>}
                    {completionStatus===0 && <i className="fa-regular fa-circle"></i>}
                </div>

                <div className="ali-student-link" onClick={()=>history.push(`/learn/enrollments/${enrollmentId}/assignments/${assignment.id}`)}>{assignment.Task?.title}</div>
                
                <i className="fa-solid fa-arrow-right"></i>
            </div>
            } 
        </div>



    )

}

export default AssignmentListItemStudent;