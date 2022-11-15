import { useParams } from "react-router";
import {useDispatch, useSelector } from "react-redux";
import EnrollmentDefaultPage from "../../DefaultPage/EnrollmentDefaultPage";
import AssignmentSideBar from "../../Sidebar/AssignmentSideBar";
import { useEffect } from "react";
import { fetchUserEnrollments } from "../../../store/user";
import { fetchGetCourseById } from "../../../store/course";
import './EnrollmentHomePage.css';

function EnrollmentHomePage(){

    const dispatch = useDispatch();
    const {enrollmentId,assignmentId} = useParams();
    console.log(enrollmentId);
    console.log(assignmentId);
    const myEnrollments = Object.values(useSelector(state=>state.user?.enrollments ? state.user.enrollments : state.user));
    const assignments = Object.values(useSelector(state=>state.course?.Assignments? state.course?.Assignments : state.course));

    useEffect(()=> {

        dispatch(fetchUserEnrollments());
        dispatch(fetchGetCourseById(enrollmentId));

    },[dispatch])
    return (
        <div className='EnrollmentHomePage-container'>
            <AssignmentSideBar assignments={assignments}/>
            <EnrollmentDefaultPage/>
        </div>
        );
}

export default EnrollmentHomePage;
