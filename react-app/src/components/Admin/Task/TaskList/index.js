import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import './TaskList.css'
import TaskListItem from '../TaskListitem';
import { useEffect } from 'react';
import { fetchGetTasks } from '../../../../store/task';
import TaskCreateForm from '../../Forms/TaskCreateForm';
import { Modal } from '../../../../context/Modal';

function TaskList(){

    const dispatch = useDispatch();
    const tasks = Object.values(useSelector(state => state.task.all_tasks ? state.task.all_tasks : {} ));
    const [showTaskModal,setShowTaskModal] = useState(false);
    const [showDeleteTaskModal,setShowDeleteTaskModal] = useState(false);

    const refreshTaskList = () => {

        dispatch(fetchGetTasks());
    }

    useEffect(()=> {
        refreshTaskList();
    },[dispatch]);


    return(
    <div className='TaskList-container'> 

        <div className='TaskList-header'>
            <h1> Task List </h1>
            <a onClick={() => setShowTaskModal(true)} className="button green task-btns">
                <span className="button-inner"> Add Task</span>
                <span className="button-bg green"></span>
            </a>
        </div>

        {showTaskModal && (
                <Modal onClose={() => setShowTaskModal(false)}>
                    <TaskCreateForm setShowTaskModal={setShowTaskModal} />
                </Modal>
                )}
        { tasks?.map( task => <TaskListItem task={task} refreshTaskList={refreshTaskList} /> )}
    </div>
    )
}

export default TaskList;