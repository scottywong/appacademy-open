
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import EnrollmentSideBar from "../../Sidebar/EnrollmentSideBar";
import LearnDefaultPage from "../../DefaultPage/LearnDefaultPage";
import { fetchUserEnrollments } from '../../../store/user';
import './LearnHomePage.css';

function LearnHomePage(){

    const dispatch = useDispatch();
    // const myEnrollments = Object.values(useSelector(state=>state.user?.enrollments ? state.user.enrollments : state.user));
    const [userEnrollments,setUserEnrollments] = useState(false);
    const user = useSelector(state=>state.user)
    
    useEffect(()=>{
        if(user.enrollments){
            setUserEnrollments(Object.values(user.enrollments));
        }

    },[user])

    useEffect(()=>{
        dispatch(fetchUserEnrollments());
    },[dispatch])
    return userEnrollments && (
        <div className='LearnHomePage-container'>
            <EnrollmentSideBar enrollments={userEnrollments}/>
            <LearnDefaultPage/>
        </div>
    )

}


export default LearnHomePage;