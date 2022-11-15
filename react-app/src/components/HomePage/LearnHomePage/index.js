
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import EnrollmentSideBar from "../../Sidebar/EnrollmentSideBar";
import LearnDefaultPage from "../../DefaultPage/LearnDefaultPage";
import { fetchUserEnrollments } from '../../../store/user';
import './LearnHomePage.css';

function LearnHomePage(){

    const dispatch = useDispatch();
    const myEnrollments = Object.values(useSelector(state=>state.user?.enrollments ? state.user.enrollments : state.user));
    
    console.log(myEnrollments)

    useEffect(()=>{
        dispatch(fetchUserEnrollments());
    },[dispatch])
    return (
        <div className='LearnHomePage-container'>
            <EnrollmentSideBar enrollments={myEnrollments}/>
            <LearnDefaultPage/>
        </div>
    )

}


export default LearnHomePage;