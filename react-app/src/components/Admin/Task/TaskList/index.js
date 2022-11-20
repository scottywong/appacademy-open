import { useDispatch, useSelector } from 'react-redux';
import './TaskList.css'
import TaskListItem from '../TaskListitem';
import { useEffect } from 'react';
import { fetchGetTasks } from '../../../../store/task';

function TaskList(){

    const dispatch = useDispatch();
    const tasks = Object.values(useSelector(state => state.task.all_tasks ? state.task.all_tasks : {} ));
    
    useEffect(()=> {

        dispatch(fetchGetTasks());
    },[dispatch]);

    return(
    <div className="TaskList-container"> 
    <h1> Task List </h1>
        { tasks?.map( task => <TaskListItem task={task}/> )}
    </div>
    )
}

export default TaskList;