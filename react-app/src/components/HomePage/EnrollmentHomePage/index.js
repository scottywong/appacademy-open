import { useParams } from "react-router";
import {useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import './EnrollmentHomePage.css';
import { fetchGetEnrollmentById } from "../../../store/enrollment";

import { useHistory } from "react-router";
function EnrollmentHomePage(){

    const dispatch = useDispatch();
    const enrollment = useSelector(state=>state.enrollment)
    const [title,setTitle]=useState(null)
    const [body,setBody]=useState(null)
    const {enrollmentId} = useParams();
    const history = useHistory();

    const[loaded,setLoaded] = useState(false)
    
    useEffect(()=> {

        if(enrollment.one_enrollment){
            setTitle(enrollment.one_enrollment.course_title)
            setBody(enrollment.one_enrollment.course_body)
        }
    },[enrollment.one_enrollment])

    useEffect(()=> {

       dispatch(fetchGetEnrollmentById(enrollmentId))
       .then((res) => {
           if(res.ok===false){
            history.push('/learn/not-found');
        } else {
            setLoaded(true);
        }})
    },[dispatch])

    const styleObj = {
        padding:'20px',
        width: '60vw'
      };

    return loaded && (
    
        <div className='EnrollmentHomePage-container page-container'>

                <div className='learnpage-title-container'><h1>Welcome to {title}</h1></div>
                <div style={styleObj} dangerouslySetInnerHTML={{__html: body}}></div>
          
        </div>
    
        )
}

export default EnrollmentHomePage;
