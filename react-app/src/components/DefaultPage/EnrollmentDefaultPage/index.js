import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, useHistory } from 'react-router';
import { fetchGetEnrollmentById } from '../../../store/enrollment';

import './EnrollmentDefaultPage.css';

function EnrollmentDefaultPage(){

    const dispatch = useDispatch();
    const enrollment = useSelector(state=>state.enrollment)
    const [title,setTitle]=useState(null)
    const [body,setBody]=useState(null)
    const {enrollmentId} = useParams();
    const history = useHistory();


    useEffect(()=> {

        if(enrollment.one_enrollment){
            setTitle(enrollment.one_enrollment.course_title)
            setBody(enrollment.one_enrollment.course_body)
        }
    },[enrollment.one_enrollment])

    useEffect(()=> {
       dispatch(fetchGetEnrollmentById(enrollmentId))
    },[dispatch])


    return (title && (
        
        <div className='EnrollmentDefaultPage-container'>
            <div className='learnpage-title-container'><h1>Welcome to {title}</h1></div>
            <p>{body}</p>
        </div>
        )) 
}

export default EnrollmentDefaultPage;
