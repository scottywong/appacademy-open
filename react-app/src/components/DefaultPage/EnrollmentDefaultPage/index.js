import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import './EnrollmentDefaultPage.css';

function EnrollmentDefaultPage(){

    const enrollment = useSelector(state=>state.enrollment)
    const [title,setTitle]=useState(false)
    const [body,setBody]=useState(false)
    useEffect(()=> {

        if(enrollment.one_enrollment){
            setTitle(enrollment.one_enrollment.course_title)
            setBody(enrollment.one_enrollment.notes)
        }
    },[enrollment.one_enrollment])
    return title && body && (
        
        <div className='EnrollmentDefaultPage-container'>
            <h1>Welcome to {title}</h1>
            <p>{body}</p>
        </div>
        )
}

export default EnrollmentDefaultPage;
