import AssignmentListItemStudent from '../../Assignment/AssignmentListItemStudent';
import { useHistory, useLocation } from 'react-router';
import './AssignmentSideBar.css';

function AssignmentSideBar({assignments,enrollment}){

    const history = useHistory();
    const location = useLocation();

    return (
        <div className="AssignmentSideBar-container">
        <h3> åTasks </h3>
        <div className='AssignmentSideBar-Enrollment-header' >
            <i className="fa-solid fa-arrow-left"></i>
            { location.pathname.startsWith(`/learn/enrollments/${enrollment?.id}/assignments`) && 
            <div className='AssignmentSideBar-Enrollment' onClick={() => history.push(`/learn/enrollments/${enrollment.id}/home`)}> {enrollment?.course_title}</div>}
            { location.pathname===`/learn/enrollments/${enrollment?.id}/home` && 
            <div className='AssignmentSideBar-Enrollment' onClick={() => history.push(`/learn/home`)}> {enrollment?.course_title}</div>}
        </div>
            {assignments && assignments.map(
                
                assignment => {
                return <AssignmentListItemStudent assignment={assignment}/>
                }
            )}

        </div>
        );


}

export default AssignmentSideBar;