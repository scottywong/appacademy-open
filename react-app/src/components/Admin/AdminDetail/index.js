import { useState } from 'react';
import TaskList from '../Task/TaskList';
import CourseList from '../Course/CourseList';
import { Modal} from '../../../context/Modal';
import CourseCreateForm from '../Forms/CourseCreateForm';
import { useSelector } from 'react-redux';

import './AdminDetail.css';


function AdminDetail(){

    const sessionUser = useSelector(state => state.session.user);

    return (
        <div className='AdminDetail-container'>
            {/* <div className='AdminDetail-header'>
                <h1>Welcome {sessionUser.username}!</h1>
            </div> */}
            <div className='AdminDetail-lists'>
                <CourseList/>
                <TaskList/>
            </div>
        </div>
    );
}

export default AdminDetail;
