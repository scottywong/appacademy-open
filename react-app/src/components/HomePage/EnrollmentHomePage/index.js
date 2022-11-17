import { useParams } from "react-router";
import {useDispatch, useSelector } from "react-redux";
import EnrollmentDefaultPage from "../../DefaultPage/EnrollmentDefaultPage";
import AssignmentSideBar from "../../Sidebar/AssignmentSideBar";
import { useEffect } from "react";
import { fetchUserEnrollments } from "../../../store/user";
import { fetchGetCourseById } from "../../../store/course";
import './EnrollmentHomePage.css';
import { fetchGetEnrollmentById } from "../../../store/enrollment";

function EnrollmentHomePage(){

    const dispatch = useDispatch();
    const {enrollmentId} = useParams();
    const myEnrollments = useSelector(state=>state.user?.enrollments ? state.user.enrollments : state.user);
    const enrollment = useSelector(state=>state.enrollment);

    console.log('EnrollmentHomePage - enrollment: ', enrollment);
    const assignments = Object.values(useSelector(state=>state.enrollment?.Assignments? state.enrollment?.Assignments : state.enrollment));


    useEffect(()=> {

        dispatch(fetchUserEnrollments())
        .then(dispatch(fetchGetEnrollmentById(enrollmentId)));

    },[dispatch])
    return (
    
        <div className='EnrollmentHomePage-container'>
           {myEnrollments && myEnrollments[enrollment.id] && 
            <div className='EnrollmentHomePage-items'>
                <AssignmentSideBar assignments={assignments}/>
                <EnrollmentDefaultPage/>
            </div>
            }
          
        </div>
    
        )
}

export default EnrollmentHomePage;
