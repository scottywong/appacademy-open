import { useParams,useHistory } from "react-router";
import {useDispatch, useSelector } from "react-redux";
import EnrollmentDefaultPage from "../../DefaultPage/EnrollmentDefaultPage";
import AssignmentSideBar from "../../Sidebar/AssignmentSideBar";
import AssignmentDetailStudent from "../../Assignment/AssignmentDetailStudent";
import { useEffect, useState } from "react";
import { fetchUserEnrollments, fetchUserProgresses } from "../../../store/user";
import { fetchGetEnrollmentById } from "../../../store/enrollment";
import './EnrollmentDetailPage.css';

function EnrollmentDetailPage(){

    const dispatch = useDispatch();
    const {enrollmentId,assignmentId} = useParams();

    const myEnrollments = useSelector(state=>state.user?.enrollments)
    const enrollment = useSelector(state=>state.enrollment);
    const assignments = Object.values(useSelector(state=>state.enrollment?.Assignments? state.enrollment?.Assignments : state.enrollment));
    
    let enrolled = false;

    // const refreshUserProgress = () => {

    //     dispatch(fetchUserProgresses());
    // }
    useEffect(() => {
        dispatch(fetchUserEnrollments())
        .then(dispatch(fetchGetEnrollmentById(enrollmentId)))
    },[dispatch]);
    
    if(myEnrollments && myEnrollments[enrollment.id]) enrolled = true;

    return (
        <div className='EnrollmentDetailPage-container'>
            {enrolled  && 
            <div className='EnrollmentDetailPage-items'>
                    <AssignmentSideBar assignments={assignments}/>
                    <AssignmentDetailStudent assignmentId={assignmentId}/>
            </div>
            }
            {!enrolled &&
                <p>Something went wrong!</p>
            }            
         </div>
        )
}

export default EnrollmentDetailPage;
