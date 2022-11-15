import EnrollmentDefaultPage from "../../DefaultPage/EnrollmentDefaultPage";
import AssignmentSideBar from "../../Sidebar/AssignmentSideBar";

function EnrollmentHomePage(){

    return (
        <div className='EnrollmentHomePage-container'>
            <AssignmentSideBar/>
            <EnrollmentDefaultPage/>
        </div>
        );
}

export default EnrollmentHomePage;
