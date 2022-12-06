import React from "react";
import AssignmentSideBar from "../AssignmentSideBar";
import EnrollmentSideBar from "../EnrollmentSideBar";
import { useSelector, useDispatch } from "react-redux";
import { useState ,useEffect} from "react";
import { fetchUserEnrollments } from "../../../store/user";
import { useParams } from "react-router";
import { fetchGetEnrollmentById } from "../../../store/enrollment";
import { useLocation } from "react-router";

const LearnSideBar = ({isOpen,toggleSidebar}) => {

  const sidebarClass = isOpen ? "sidebar open" : "sidebar";

  const dispatch = useDispatch();
  const {enrollmentId} = useParams();
  const location =useLocation();

  const [userEnrollments,setUserEnrollments] = useState(false);
  const [currentEnrollment,setCurrentEnrollment] = useState(false);
  const [relatedAssignments,setRelatedAssignments] = useState(false);
  
  const [loaded,setLoaded] = useState(false);
  const [showMenu,setShowMenu] = useState(true)
  
  const user = useSelector(state=>state.user);
  const enrollment = useSelector(state=>state.enrollment);

  const handleViewSidebar = () => {
        setShowMenu(!showMenu);
    }

    useEffect(()=>{
        dispatch(fetchUserEnrollments())
        .then( () => {if(enrollmentId) dispatch(fetchGetEnrollmentById(enrollmentId))})
    },[dispatch,enrollmentId])

    useEffect(()=>{
        setLoaded(false)
        if(user.enrollments)  setUserEnrollments(Object.values(user.enrollments));
        if(enrollment.one_enrollment)  setCurrentEnrollment(enrollment.one_enrollment);
        if(enrollment.one_enrollment.Assignments) setRelatedAssignments(Object.values(enrollment.one_enrollment?.Assignments));
        setLoaded(true)
    },[user,enrollment,enrollment.one_enrollment.Assignments])
    
  return loaded && (
    <div className={sidebarClass}>
     
      {relatedAssignments && location.pathname.includes('/enrollments/') && <AssignmentSideBar assignments={relatedAssignments} enrollment={currentEnrollment}/>}
      
      {userEnrollments && location.pathname === '/learn/home' && ( <EnrollmentSideBar enrollments={userEnrollments}/>)}
      
      {/* <button onClick={toggleSidebar} className="sidebar-toggle">
        {!showMenu && <div onClick={handleViewSidebar} className='LearnNavBar-menu'>
                <i className="fa-solid fa-arrow-right-long fa-2xl"></i>
            </div>}
            {showMenu && <div onClick={handleViewSidebar} className='LearnNavBar-menu'>
                <i class="fa-solid fa-arrow-left-long fa-2xl"></i>
            </div>}
      </button> */}
    </div>
  );
};
export default LearnSideBar;
