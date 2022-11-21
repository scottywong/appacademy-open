import { useParams } from 'react-router';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchGetTaskById } from '../../../../store/task';
import AssignmentList from '../../Assignment/AssignmentList';

import './TaskDetail.css';

function TaskDetail(){
    
    const dispatch = useDispatch();
    const {taskId} = useParams();

    const task = useSelector(state => state.task?.one_task);

    useEffect(()=> {
        dispatch(fetchGetTaskById(taskId));
    },[dispatch]);

    return (

        <div className='TaskDetail-container'>
            <h1 className='TaskDetail-title'> {task?.title} </h1>
            <div className='TaskDetail-btns'>
                <button> Edit Task </button>
                <button> Delete Task </button>
                <button> Add Assignment </button>
            </div>

            <div className='TaskDetail-detail'> {task?.detail} </div>
            <div className='TaskDetail-lists'>
                {/* <AssignmentList courseId={courseId}/> */}
            </div>
        </div>
    );
}

export default TaskDetail;