import { useParams } from "react-router";
import {useDispatch, useSelector } from "react-redux";
import EnrollmentDefaultPage from "../../DefaultPage/EnrollmentDefaultPage";
import AssignmentSideBar from "../../Sidebar/AssignmentSideBar";
import { useEffect } from "react";
import { fetchUserEnrollments } from "../../../store/user";

function EnrollmentHomePage(){

    const dispatch = useDispatch();
    const {enrollmentId,assignmentId} = useParams();
    console.log(enrollmentId);
    console.log(assignmentId);
    const myEnrollments = Object.values(useSelector(state=>state.user?.enrollments ? state.user.enrollments : state.user));
    
    useEffect(()=> {

        dispatch(fetchUserEnrollments());

    },[dispatch])
    return (
        <div className='EnrollmentHomePage-container'>
            <AssignmentSideBar/>
            <EnrollmentDefaultPage/>
        </div>
        );
}

export default EnrollmentHomePage;
