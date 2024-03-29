import EnrollmentList from '../../Enrollment/EnrollmentList';
import AssignmentList from '../../Assignment/AssignmentList';
import './CourseDetail.css';
import '../../../../index.css';
import { useParams,useLocation, useHistory } from 'react-router';
import { useEffect,useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchGetCourseById } from '../../../../store/course';
import CourseDeleteForm from '../../Forms/CourseDeleteForm';
import { Modal} from '../../../../context/Modal';
import CourseEditForm from '../../Forms/CourseEditForm';
import AssignmentCreateForm from '../../Forms/AssignmentCreateForm';
import EnrollmentCreateForm from '../../Forms/EnrollmentCreateForm';

function CourseDetail(){

    const dispatch = useDispatch();
    const {courseId} = useParams();

    const history = useHistory();
    const location = useLocation();
    const course = useSelector(state => state.course);
    const [oneCourse,setOneCourse] = useState(false);
    const [showDeleteCourseModal,setShowDeleteCourseModal] = useState(false);
    const [showAssignmentModal,setShowAssignmentModal] = useState(false);
    const [showEnrollmentModal,setShowEnrollmentModal] = useState(false);

    const [loaded,setIsLoaded] = useState(false);

    useEffect(()=> {
       dispatch(fetchGetCourseById(courseId));
    },[dispatch]);

    useEffect(()=> {
        setIsLoaded(true);
        setOneCourse(course?.one_course)
    },[course.one_course])

    console.log('coursedetail: ', course.one_course)

    return loaded && (oneCourse && (

        
        <div className='CourseDetail-container'>
            <div class="overlay">
            <p>Sorry, this experience is not possible below 768px.</p>
            </div>

              <div className='CourseDetail-left-container'>
                <div className='CourseDetail-left'>
                <h1 className='CourseDetail-title'> {oneCourse?.title} </h1>
                <div className='CourseDetail-btns'>

                <div className='CourseDetail-btns-column'>

                {location.pathname.includes('/edit') && 
                        <a onClick={()=> history.push(`/learn/admin/courses/${courseId}`)} className="button green">
                            <span className="button-inner detail-btn-text ">View Course</span>
                            <span className="button-bg green"></span>
                        </a>
                }
                {!location.pathname.includes('/edit') &&
                 <a onClick={()=> history.push(`/learn/admin/courses/${courseId}/edit`)} className="button green detail-btn">
                     <span className="button-inner detail-btn-text">Edit Course</span>
                     <span className="button-bg green "></span>
                 </a>
                }

                <a onClick={()=> setShowDeleteCourseModal(true)} className="button green detail-btn">
                        <span className="button-inner detail-btn-text ">Delete Course</span>
                        <span className="button-bg green"></span>
                </a>
                {showDeleteCourseModal && (
                        <Modal onClose={() => setShowDeleteCourseModal(false)}>
                            <CourseDeleteForm courseId={courseId} setShowDeleteCourseModal={setShowDeleteCourseModal} />
                        </Modal>
                        )}
                </div>

                <div className='CourseDetail-btns-column'>
                    <a onClick={()=> setShowAssignmentModal(true)} className="button green detail-btn">
                        <span className="button-inner detail-btn-text">Add Assignments</span>
                        <span className="button-bg green"></span>
                    </a>
                    {showAssignmentModal && (
                        <Modal onClose={() => setShowDeleteCourseModal(false)}>
                            <AssignmentCreateForm setShowAssignmentModal={setShowAssignmentModal} />
                        </Modal>
                        )}
                    <a onClick={()=> setShowEnrollmentModal(true)} className="button green detail-btn">
                        <span className="button-inner detail-btn-text"> Add Enrollments</span>
                        <span className="button-bg green"></span>
                    </a>
                    {showEnrollmentModal && (
                        <Modal onClose={() => setShowEnrollmentModal(false)}>
                            <EnrollmentCreateForm courseId={courseId} setShowEnrollmentModal={setShowEnrollmentModal} />
                        </Modal>
                        )}    

                </div>

                    
                   
                   
                </div>
            </div>
            <div className='CourseDetail-lists'>
                <AssignmentList courseId={courseId}/>
                <EnrollmentList courseId={courseId}/>
            </div>
        </div>

        <div className='CourseDetail-detail-container'>
            {location.pathname.includes('/edit') && <div className='CourseDetail'> <CourseEditForm course={oneCourse}/> </div> }
            {!location.pathname.includes('/edit') && 
            (<div className='CourseDetail'>
                <h1 className='CourseDetail-title'> {oneCourse?.title} </h1>
            <div  dangerouslySetInnerHTML={{__html: oneCourse?.body}}/>
            </div>) }
        </div>
    </div> 
        )|| 
        (!oneCourse && ( <main style={{ padding: "1rem" }}>
        <p>Sorry, the page couldn't be found.</p>
        </main>))
        )
}

export default CourseDetail;