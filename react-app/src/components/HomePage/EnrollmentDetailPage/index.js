import { useParams,useHistory } from "react-router";
import {useDispatch, useSelector } from "react-redux";
import AssignmentDetailStudent from "../../Assignment/AssignmentDetailStudent";
import { useEffect, useState } from "react";
import { fetchUserEnrollments } from "../../../store/user";
import { fetchGetEnrollmentById } from "../../../store/enrollment";

import './EnrollmentDetailPage.css';

function EnrollmentDetailPage(){

    const dispatch = useDispatch();
    const history = useHistory();
    const {enrollmentId,assignmentId} = useParams();

    const myEnrollments = useSelector(state=>state.user?.enrollments)
    const enrollment = useSelector(state=>state.enrollment?.one_enrollment);

    const [enrolled,setEnrolled] =useState(false);
    const [loaded,setLoaded] =useState(false);
    
    useEffect(() => {
        if(myEnrollments && myEnrollments[enrollment.id]) setEnrolled(true)
    },[myEnrollments,enrollment])

    useEffect(() => {
        dispatch(fetchUserEnrollments())
        dispatch(fetchGetEnrollmentById(enrollmentId))
        .then((res) => {
            if(res.ok===false){
             history.push('/learn/enrollments/not-found');
         } else {
             setLoaded(true);
         }})
    },[dispatch,assignmentId]);
    
    return loaded && (
        <div className='EnrollmentDetailPage-container page-container'>
            {enrolled  && 
                <AssignmentDetailStudent  assignmentId={assignmentId}/>
            }     
            {!enrolled &&
                 <p>Something went wrong!</p>}       
         </div>
        ) 
        
        
}

export default EnrollmentDetailPage;
