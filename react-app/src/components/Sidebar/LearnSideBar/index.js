import React from "react";
import AssignmentSideBar from "../AssignmentSideBar";
import EnrollmentSideBar from "../EnrollmentSideBar";
import { useSelector, useDispatch } from "react-redux";
import { useState ,useEffect} from "react";
import { fetchUserEnrollments, fetchUserProgresses } from "../../../store/user";
import { useParams } from "react-router";
import { fetchGetEnrollmentById } from "../../../store/enrollment";
import { useLocation } from "react-router";

const LearnSideBar = ({isOpen,toggleSidebar}) => {

  const sidebarClass = isOpen ? "sidebar open" : "sidebar";
  
  if(isOpen && document.querySelector('[class*="page-container"]')){
    document.querySelector('[class*="page-container"]').classList.add('sidebar-active-page');
  }
  if(isOpen && document.querySelector('[class*="learnpage-title-container"]')){
    document.querySelector('[class*="learnpage-title-container"]').classList.add('sidebar-active-content-title');
  }

  const dispatch = useDispatch();
  const {enrollmentId} = useParams();
  const location =useLocation();

  const [userEnrollments,setUserEnrollments] = useState(false);
  const [currentEnrollment,setCurrentEnrollment] = useState(false);
  const [relatedAssignments,setRelatedAssignments] = useState(false);
  const [relatedProgresses,setRelatedProgresses] = useState(false);
  const [loaded,setLoaded] = useState(false);
  
  const user = useSelector(state=>state.user);
  const enrollment = useSelector(state=>state.enrollment);


    useEffect(()=>{
      dispatch(fetchUserProgresses())
        dispatch(fetchUserEnrollments())
        .then( () => {if(enrollmentId) dispatch(fetchGetEnrollmentById(enrollmentId))})
    },[dispatch,enrollmentId])

    useEffect(()=>{
        setLoaded(false)
        if(user.enrollments)  setUserEnrollments(Object.values(user.enrollments));
        if(enrollment.one_enrollment)  setCurrentEnrollment(enrollment.one_enrollment);
        if(enrollment.one_enrollment.Assignments) setRelatedAssignments(Object.values(enrollment.one_enrollment?.Assignments));
        if(user.progresses) setRelatedProgresses(Object.values(user.progresses));
        setLoaded(true)
    },[user,enrollment,enrollment.one_enrollment.Assignments, user.progresses])
    
  return loaded && (
    <div className={sidebarClass}>
     
      {/* {location.pathname.includes('/enrollments/') && <AssignmentSideBar enrollment={currentEnrollment}/>} */}
      {relatedAssignments && location.pathname.includes('/enrollments/') && <AssignmentSideBar assignments={relatedAssignments} enrollment={currentEnrollment}/>}
      
      {userEnrollments && location.pathname === '/learn/home' && ( <EnrollmentSideBar enrollments={userEnrollments}/>)}
      
    </div>
  );
};
export default LearnSideBar;
