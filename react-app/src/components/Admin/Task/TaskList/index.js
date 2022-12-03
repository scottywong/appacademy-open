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
    const tasks = useSelector(state => state.task);
    const [showTaskModal,setShowTaskModal] = useState(false);

    const [taskList,setTaskList] = useState(false);

    useEffect(()=> {
        if(tasks.all_tasks){
            setTaskList(Object.values(tasks.all_tasks));
        } 
    },[tasks]);

    useEffect(()=> {
        dispatch(fetchGetTasks());
    },[dispatch]);


    return taskList && (
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
        { taskList?.map( task => <TaskListItem key={task.id} task={task} /> )}
    </div>
    )
}

export default TaskList;