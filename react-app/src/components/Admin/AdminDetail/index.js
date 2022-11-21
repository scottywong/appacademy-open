import { useState } from 'react';
import TaskList from '../Task/TaskList';
import CourseList from '../Course/CourseList';
import { Modal} from '../../../context/Modal';
import CourseCreateForm from '../Forms/CourseCreateForm';

import './AdminDetail.css';


function AdminDetail(){

    const [showCourseModal,setShowCourseModal] = useState(false);

    return (
        <div className='AdminDetail-container'>
            <div className='AdminDetail-btns'>
                <button className='green-btn' id='AdminDetail-CourseCreate-btn' onClick={() => setShowCourseModal(true)}> Add Course </button>
                {showCourseModal && (
                <Modal onClose={() => setShowCourseModal(false)}>
                    <CourseCreateForm setShowCourseModal={setShowCourseModal} />
                </Modal>
                )}
                <button className='green-btn'> Add Task </button>
            </div>
            <div className='AdminDetail-lists'>
                <CourseList/>
                <TaskList/>
            </div>
        </div>
    );
}

export default AdminDetail;
