
import TaskList from '../Task/TaskList';
import CourseList from '../Course/CourseList';

import './AdminDetail.css';


function AdminDetail(){

    return (
        <div className='AdminDetail-container'>
            <div className='AdminDetail-btns'>
                <button> Add Course </button>
                <button> Add Task </button>
            </div>
            <div className='AdminDetail-lists'>
                <CourseList/>
                <TaskList/>
            </div>
        </div>
    );
}

export default AdminDetail;
