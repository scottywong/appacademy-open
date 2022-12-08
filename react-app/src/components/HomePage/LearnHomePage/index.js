
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import EnrollmentSideBar from "../../Sidebar/EnrollmentSideBar";
import LearnDefaultPage from "../../DefaultPage/LearnDefaultPage";
import { fetchUserEnrollments } from '../../../store/user';
import './LearnHomePage.css';

function LearnHomePage(){

    return     (
        <div className='LearnHomePage-container sidebar-active-content'>
       
            <LearnDefaultPage/>
        </div>
    )

}


export default LearnHomePage;