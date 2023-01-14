
import React from 'react';
import { useSelector } from 'react-redux';
import LearnDefaultPage from "../../DefaultPage/LearnDefaultPage";
import './LearnHomePage.css';

function LearnHomePage(){

    const sessionUser = useSelector(state=> state.session.user)

    return     (
        <div className='LearnHomePage-container page-container'>
    
            <div className='learnpage-title-container'><h1>Hello, {sessionUser.username} </h1></div>
     
            <div className='learnpage-title-container-text'>

                <p> Welcome to Build Academy!</p>

                <p>Our mission is to empower students like you to learn the skills of the future and excel in the field of computer programming. 
                Our portal offers a wide range of coding resources, including interactive tutorials, coding challenges, and expert-led video lessons. 
                Our comprehensive curriculum covers a variety of programming languages and technologies, making it easy for you to find the right resources for your specific learning needs. 
                Whether you're just starting to code or looking to advance your skills, our portal has something for everyone. 
                With 24/7 access, you can learn at your own pace and on your own schedule. </p>
                
                <p>Start your coding journey today and discover how our portal can help you become a proficient coder and achieve your career goals.</p>
            </div>
        </div>
    )

}


export default LearnHomePage;