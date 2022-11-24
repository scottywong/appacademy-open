import { useEffect ,  useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchGetCourses } from '../../../../store/course';
import CourseListItem from '../CourseListItem';
import { Modal } from '../../../../context/Modal';
import CourseCreateForm from '../../Forms/CourseCreateForm';
import './CourseList.css';

function CourseList(){

    const courses = Object.values(useSelector(state => state.course?.all_courses ?  state.course?.all_courses :  [] ))
    const dispatch = useDispatch();
    console.log('courses: ', courses)

    const [showCourseModal,setShowCourseModal] = useState(false);

    const refreshCourseList = () => {

        dispatch(fetchGetCourses());
    }
    useEffect (() => {

        refreshCourseList();

    },[dispatch])


    return  (

        <div className="CourseList-container"> 

        <div className='CourseList-header'>
            <h1> Course List </h1>
            <a onClick={() => setShowCourseModal(true)} className="button green course-btns">
                <span className="button-inner"> Add Course</span>
                <span className="button-bg green"></span>
            </a>
            
        </div>
             {showCourseModal && (
                <Modal onClose={() => setShowCourseModal(false)}>
                    <CourseCreateForm setShowCourseModal={setShowCourseModal} />
                </Modal>
                )}

            {courses?.map( course =>  <CourseListItem course={course} refreshCourseList={refreshCourseList}/> )}
        </div>
    )
}

export default CourseList;