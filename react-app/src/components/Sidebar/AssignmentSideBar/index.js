import AssignmentListItemStudent from '../../Assignment/AssignmentListItemStudent';
import { useHistory, useLocation } from 'react-router';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUserProgresses } from '../../../store/user';
import './AssignmentSideBar.css';

function AssignmentSideBar({assignments,enrollment}){

    const history = useHistory();
    const dispatch = useDispatch();
    const location = useLocation();
    
    const myProgresses = useSelector(state => state.user.progresses);
    const [loadedProgresses,setLoadedProgresses] = useState(false);

    useEffect( ()=> {
        if(myProgresses)setLoadedProgresses(myProgresses);
    },[myProgresses])
    
    useEffect( ()=> {
        dispatch(fetchUserProgresses())
    },[dispatch])


    return loadedProgresses && (
        <div className="AssignmentSideBar-container">
            
        <h3> Tasks </h3>
        <div className='AssignmentSideBar-Enrollment-header'>
            
            <div className='asb-arrow' onClick={() => 
            location.pathname.startsWith(`/learn/enrollments/${enrollment?.id}/assignments`) ? 
            history.push(`/learn/enrollments/${enrollment.id}/home`) :
            history.push(`/learn/home`)
            }>
            <i className="fa-solid fa-arrow-left"></i>
            </div>
            { location.pathname.startsWith(`/learn/enrollments/${enrollment?.id}/assignments`) && 
            <div className='AssignmentSideBar-Enrollment' onClick={() => history.push(`/learn/enrollments/${enrollment.id}/home`)}> {enrollment?.course_title}</div>}
            { location.pathname===`/learn/enrollments/${enrollment?.id}/home` && 
            <div className='AssignmentSideBar-Enrollment' onClick={() => history.push(`/learn/home`)}> {enrollment?.course_title}</div>}
        </div>
            {assignments && assignments.map(
                
                assignment => {
                        const existingProgress = Object.values(loadedProgresses).filter(progress=> progress['assignmentId'] === parseInt(assignment?.id) && progress['enrollmentId'] === parseInt(enrollment.id))
                        let completionStatus=0;
                        if(existingProgress.length === 1 && existingProgress[0].completion_status===parseInt(1)){
                            completionStatus=1;
                        }
                        return <AssignmentListItemStudent assignment={assignment} completionStatus={completionStatus}/>
                }
            
            )}

        </div>
        
        
    )

}

export default AssignmentSideBar;