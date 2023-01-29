import EnrollmentListItemStudent from '../../Enrollment/EnrollmentListItemStudent';
import './EnrollmentSideBar.css';

function EnrollmentSideBar({enrollments}){

    return enrollments && (

        <div className='enroll-sidebar-container'>
            <h3>Courses </h3> 
            {
            enrollments.length > 0 ? enrollments.map(enrollment => (  
                 <EnrollmentListItemStudent enrollment={enrollment} />)): 
            <p style={{textAlign:"center",marginTop:"30px"}}> No assigned courses</p>
            }

        </div>

    )
}
export default EnrollmentSideBar;