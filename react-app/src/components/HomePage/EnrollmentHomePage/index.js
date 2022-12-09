import { useParams } from "react-router";
import {useDispatch, useSelector } from "react-redux";
import EnrollmentDefaultPage from "../../DefaultPage/EnrollmentDefaultPage";
import AssignmentSideBar from "../../Sidebar/AssignmentSideBar";
import { useEffect, useState } from "react";
import { fetchUserEnrollments } from "../../../store/user";
import { fetchGetCourseById } from "../../../store/course";
import './EnrollmentHomePage.css';
import { fetchGetEnrollmentById } from "../../../store/enrollment";

function EnrollmentHomePage(){

    const dispatch = useDispatch();
    const enrollment = useSelector(state=>state.enrollment)
    const [title,setTitle]=useState(null)
    const [body,setBody]=useState(null)
    const {enrollmentId} = useParams();

    useEffect(()=> {

        if(enrollment.one_enrollment){
            setTitle(enrollment.one_enrollment.course_title)
            setBody(enrollment.one_enrollment.notes)
        }
    },[enrollment.one_enrollment])

    useEffect(()=> {

       dispatch(fetchGetEnrollmentById(enrollmentId))
        
    },[dispatch])

    return (
    
        <div className='EnrollmentHomePage-container title-container'>
          
            {/* <div className='EnrollmentHomePage-items '> */}

                <div className='learnpage-title-container'><h1>Welcome to {title}</h1></div>
                <p>{body}</p> 

            {/* </div> */}
          
          
        </div>
    
        )
}

export default EnrollmentHomePage;
