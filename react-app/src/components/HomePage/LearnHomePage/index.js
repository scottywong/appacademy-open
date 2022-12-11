
import React from 'react';
import { useSelector } from 'react-redux';
import LearnDefaultPage from "../../DefaultPage/LearnDefaultPage";
import './LearnHomePage.css';

function LearnHomePage(){

    const sessionUser = useSelector(state=> state.session.user)

    return     (
        <div className='LearnHomePage-container page-container'>
       
            {/* <LearnDefaultPage/> */}
            <div className='learnpage-title-container'><h1>Hello, {sessionUser.username} </h1></div>
                <p>This is your home page.</p>
        </div>
    )

}


export default LearnHomePage;