import EnrollmentListItemStudent from '../../Enrollment/EnrollmentListItemStudent';
import './EnrollmentSideBar.css';

function EnrollmentSideBar({enrollments}){

    console.log('esb: ', enrollments)

    return enrollments && (

        <div className='enroll-sidebar-container'>
            <h3>Courses </h3>
            {enrollments &&  enrollments.map(enrollment => (
                <EnrollmentListItemStudent enrollment={enrollment} />    
            ))}

        </div>

    )
}
export default EnrollmentSideBar;