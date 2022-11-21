import EnrollmentList from '../../Enrollment/EnrollmentList';
import AssignmentList from '../../Assignment/AssignmentList';
import './CourseDetail.css';
import { useParams } from 'react-router';
import { useEffect,useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchGetCourses, fetchGetCourseById } from '../../../../store/course';
import CourseDeleteForm from '../../Forms/CourseDeleteForm';
import { Modal} from '../../../../context/Modal';

function CourseDetail(){

    const dispatch = useDispatch();
    const {courseId} = useParams();

    const course = useSelector(state => state.course?.one_course);
    const [showDeleteCourseModal,setShowDeleteCourseModal] = useState(false);
    const refreshCourseList = () => {
        dispatch(fetchGetCourses());
    };

    useEffect(()=> {
        dispatch(fetchGetCourseById(courseId));
    },[dispatch]);

    return (

        <div className='CourseDetail-container'>
            <h1 className='CourseDetail-title'> {course?.title} </h1>
           
            <div className='CourseDetail-btns'>
                <button> Edit Course </button>
                <button className='green-btn' onClick={()=> setShowDeleteCourseModal(true)}> Delete Course </button>
                {showDeleteCourseModal && (
                    <Modal onClose={() => setShowDeleteCourseModal(false)}>
                        <CourseDeleteForm courseId={course.id} setShowDeleteCourseModal={setShowDeleteCourseModal} refreshCourseList={refreshCourseList} />
                    </Modal>
                    )}
                <button> Add Assignment </button>
                <button> Add Enrollment </button>
            </div>
            <div className='CourseDetail-lists'>
                <AssignmentList courseId={courseId}/>
                <EnrollmentList courseId={courseId}/>
            </div>
        </div>
    );
}

export default CourseDetail;