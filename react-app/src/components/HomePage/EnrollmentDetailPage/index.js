import { useParams } from "react-router";
import {useDispatch, useSelector } from "react-redux";
import EnrollmentDefaultPage from "../../DefaultPage/EnrollmentDefaultPage";
import AssignmentSideBar from "../../Sidebar/AssignmentSideBar";
import AssignmentDetailStudent from "../../Assignment/AssignmentDetailStudent";
import { useEffect } from "react";
import { fetchUserEnrollments } from "../../../store/user";

function EnrollmentDetailPage(){

    const dispatch = useDispatch();
    const {enrollmentId,assignmentId} = useParams();
    console.log(enrollmentId);
    console.log(assignmentId);
    const myEnrollments = useSelector(state=>state.user?.enrollments)
    
    useEffect(() => {
        dispatch(fetchUserEnrollments());
    },[dispatch]);
    
    console.log(myEnrollments);
    return (<div>
        {myEnrollments && myEnrollments[enrollmentId] &&
            (<div className='EnrollmentHomePage-container'>
                <AssignmentSideBar/>
                <AssignmentDetailStudent assignmentId={assignmentId}/>
            </div>)
        }</div>
        );
}

export default EnrollmentDetailPage;
