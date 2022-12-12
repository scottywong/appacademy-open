import { useEffect ,  useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchGetCourses } from '../../../../store/course';
import CourseListItem from '../CourseListItem';
import { Modal } from '../../../../context/Modal';
import CourseCreateForm from '../../Forms/CourseCreateForm';
import './CourseList.css';

function CourseList(){

    const courses = useSelector(state => state.course)
    
    const dispatch = useDispatch();

    const [showCourseModal,setShowCourseModal] = useState(false);
    const [courseList,setCourseList] = useState(false);

    useEffect (() => {
        if(courses.all_courses){
            setCourseList(Object.values(courses.all_courses));
        } 
    },[courses]);

    useEffect( ()=> {
        dispatch(fetchGetCourses());
    },[dispatch])


    return courseList && (

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

            {courseList?.map( course =>  <CourseListItem key={course.id} course={course} /> )}
         
        </div>
    )
}

export default CourseList;