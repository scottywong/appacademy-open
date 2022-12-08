import { useParams,useHistory } from "react-router";
import {useDispatch, useSelector } from "react-redux";
import EnrollmentDefaultPage from "../../DefaultPage/EnrollmentDefaultPage";
import AssignmentSideBar from "../../Sidebar/AssignmentSideBar";
import AssignmentDetailStudent from "../../Assignment/AssignmentDetailStudent";
import { useEffect, useState } from "react";
import { fetchUserEnrollments } from "../../../store/user";
import { fetchGetEnrollmentById } from "../../../store/enrollment";
import { fetchGetAssignmentById } from "../../../store/assignment";
import './EnrollmentDetailPage.css';

function EnrollmentDetailPage(){

    const dispatch = useDispatch();
    const {enrollmentId,assignmentId} = useParams();

    const myEnrollments = useSelector(state=>state.user?.enrollments)
    const enrollment = useSelector(state=>state.enrollment?.one_enrollment);

    const [enrolled,setEnrolled] =useState(false);
    
    useEffect(() => {
        if(myEnrollments && myEnrollments[enrollment.id]) setEnrolled(true)
    },[myEnrollments,enrollment])

    useEffect(() => {
        dispatch(fetchUserEnrollments())
        .then(dispatch(fetchGetEnrollmentById(enrollmentId)))
    },[dispatch,assignmentId]);
    
    return enrolled && (
        <div className='EnrollmentDetailPage-container title-container'>
            {enrolled  && 
                <AssignmentDetailStudent  assignmentId={assignmentId}/>
            }             
         </div>
        ) || 
        (!enrolled &&
        <p>Something went wrong!</p>)
        
}

export default EnrollmentDetailPage;
