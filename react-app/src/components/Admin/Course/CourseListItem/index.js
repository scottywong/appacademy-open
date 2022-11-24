import { useState } from 'react';
import {useHistory} from 'react-router-dom';
import { Modal} from '../../../../context/Modal';
import CourseDeleteForm from '../../Forms/CourseDeleteForm';
import './CourseListItem.css';

function CourseListItem({course,refreshCourseList}){

    const history = useHistory();
    const [showDeleteCourseModal,setShowDeleteCourseModal] = useState(false);

    return (
        <div className='CourseListItem-container'>
            <div onClick={() => history.push(`/learn/admin/courses/${course.id}`) } className='CourseListItem-name'>{course?.title}</div>
                <div className='CourseListItem-btns'>
                <a onClick={()=> setShowDeleteCourseModal(true)} className="button green course-btns">
                    <span className="button-inner"> Delete Course</span>
                    <span className="button-bg green"></span>
                </a>
                    {/* <button className='green-btn' onClick={()=> setShowDeleteCourseModal(true)}> Delete Course </button> */}
                    {showDeleteCourseModal && (
                    <Modal onClose={() => setShowDeleteCourseModal(false)}>
                        <CourseDeleteForm courseId={course.id} setShowDeleteCourseModal={setShowDeleteCourseModal} refreshCourseList={refreshCourseList} />
                    </Modal>
                    )}
                    
                </div>
        </div>

    );
}

export default CourseListItem;