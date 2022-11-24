import { useState } from 'react';
import TaskList from '../Task/TaskList';
import CourseList from '../Course/CourseList';
import { Modal} from '../../../context/Modal';
import CourseCreateForm from '../Forms/CourseCreateForm';

import './AdminDetail.css';


function AdminDetail(){

    // const [showCourseModal,setShowCourseModal] = useState(false);

    return (
        <div className='AdminDetail-container'>
            <div className='AdminDetail-btns'>

                {/* <a onClick={() => setShowCourseModal(true)} className="button green">
                    <span className="button-inner"> Add Course</span>
                    <span className="button-bg green"></span>
                </a> */}
                {/* <button className='green-btn' id='AdminDetail-CourseCreate-btn' onClick={() => setShowCourseModal(true)}> Add Course </button> */}
          
{/* 
                <a onClick={()=> window.confirm('Are you sure you want to delete this item?')} className="button green">
                    <span className="button-inner"> Add Task</span>
                    <span className="button-bg green"></span>
                </a> */}
                    {/* <button className='green-btn'> Add Task </button> */}
            </div>
            <div className='AdminDetail-lists'>
                <CourseList/>
                <TaskList/>
            </div>
        </div>
    );
}

export default AdminDetail;
