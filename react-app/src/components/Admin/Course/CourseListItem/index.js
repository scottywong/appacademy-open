import { useState } from 'react';
import {useHistory} from 'react-router-dom';
import { Modal} from '../../../../context/Modal';
import CourseDeleteForm from '../../Forms/CourseDeleteForm';
import './CourseListItem.css';

function CourseListItem({course}){

    const history = useHistory();
    const [showDeleteCourseModal,setShowDeleteCourseModal] = useState(false);

    return (
        <div className='CourseListItem-container'>
            <div onClick={() => history.push(`/learn/admin/courses/${course.id}`) } className='CourseListItem-name'>{course?.title}</div>
                <div className='CourseListItem-btns'>
                <a onClick={()=> history.push(`/learn/admin/courses/${course.id}/edit`)} className="button green task-btns">
                <span className="button-inner"> Edit Course</span>
                <span className="button-bg green"></span>
                </a>
                <a onClick={()=> setShowDeleteCourseModal(true)} className="button green course-btns">
                    <span className="button-inner"> Delete Course</span>
                    <span className="button-bg green"></span>
                </a>
                    {showDeleteCourseModal && (
                    <Modal onClose={() => setShowDeleteCourseModal(false)}>
                        <CourseDeleteForm courseId={course.id} setShowDeleteCourseModal={setShowDeleteCourseModal}  />
                    </Modal>
                    )}
                    
                </div>
        </div>

    );
}

export default CourseListItem;