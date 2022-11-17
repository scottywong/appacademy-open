import { NavLink } from "react-router-dom";
import { useHistory, useParams } from "react-router";
import './AssignmentListItemStudent.css';

function AssignmentListItemStudent({assignment}){
    const history = useHistory();
    const {enrollmentId} = useParams();

    console.log('ALIStudent: ', assignment)

    return (
        
        <div className="ali-student-container">
        { assignment && 
            <div onClick={()=> history.push(`/learn/enrollments/${enrollmentId}/assignments/${assignment.id}`)} className='ali-student-item'>
                <NavLink className="ali-student-link" to={`/learn/enrollments/${enrollmentId}/assignments/${assignment.id}`}>{assignment.Task?.title}</NavLink>
                <i className="fa-solid fa-arrow-right"></i>
            </div>
            } 
        </div>



    )

}

export default AssignmentListItemStudent;