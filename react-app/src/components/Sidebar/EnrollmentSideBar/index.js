import EnrollmentListItemStudent from '../../Enrollment/EnrollmentListItemStudent';
import './EnrollmentSideBar.css';

function EnrollmentSideBar({enrollments}){


    return (

        <div className='enroll-sidebar-container'>

            {enrollments &&  enrollments.map(enrollment => (
                <EnrollmentListItemStudent enrollment={enrollment} />
                
            ))}

        </div>

    )
}
export default EnrollmentSideBar;