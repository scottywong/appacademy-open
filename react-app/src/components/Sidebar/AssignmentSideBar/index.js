import AssignmentListItemStudent from '../../Assignment/AssignmentListItemStudent';
import { useHistory, useLocation } from 'react-router';
import './AssignmentSideBar.css';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUserProgresses } from '../../../store/user';

function AssignmentSideBar({assignments,enrollment}){

    const history = useHistory();
    const dispatch = useDispatch();
    const location = useLocation();


    const myProgresses = useSelector(state => state.user.progresses);
    const progress = useSelector(state=> state.progress)
    console.log('progress: ', progress)

    useEffect( ()=> {

        dispatch(fetchUserProgresses())
        
    },[dispatch])


    return (
        <div className="AssignmentSideBar-container">
            
        <h3> Tasks </h3>
        <div className='AssignmentSideBar-Enrollment-header'>
            
            <div className='asb-arrow'>
            <i className="fa-solid fa-arrow-left"></i>
            </div>
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
        
        
    )

}

export default AssignmentSideBar;