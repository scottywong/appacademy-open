import EnrollmentList from '../../Enrollment/EnrollmentList';
import AssignmentList from '../../Assignment/AssignmentList';
import './CourseDetail.css';
import { useParams } from 'react-router';

function CourseDetail(){

    const {courseId} = useParams();

    return (

        <div className='CourseDetail-container'>
            <div className='CourseDetail-btns'>
                <button> Edit Course </button>
                <button> Delete Course </button>
                <button> Add Assignment </button>
                <button> Add Enrollment </button>
            </div>
            <div className='CourseDetail-lists'>
                <EnrollmentList courseId={courseId}/>
                <AssignmentList courseId={courseId}/>
            </div>
        </div>
    );
}

export default CourseDetail;