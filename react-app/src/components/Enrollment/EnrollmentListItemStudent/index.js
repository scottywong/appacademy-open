import { NavLink } from "react-router-dom";

import { useHistory } from "react-router";
import './EnrollmentListItemStudent.css';

function EnrollmentListItemStudent({enrollment}){

    const history = useHistory();

    return (
        
        <div className='eli-student-container'>

            {enrollment && 
            <div onClick={()=> history.push(`/learn/enrollments/${enrollment.id}/home`)} className='eli-student-item'>
                <NavLink className="eli-student-link" to={`/learn/enrollments/${enrollment.id}/home`}>{enrollment.course_title}</NavLink>
                <i class="fa-solid fa-arrow-right"></i>
            </div>
            }

        </div>
    )
}

export default EnrollmentListItemStudent;